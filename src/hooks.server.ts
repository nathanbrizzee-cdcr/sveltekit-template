import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { detectLocale } from '$lib/i18n/i18n-util.js';
import { SvelteKitAuth } from '@auth/sveltekit';
import Keycloak from '@auth/core/providers/keycloak';
import PrismaAdapter from '$lib/prisma/client';
import { config } from '$/lib/config.server';
import prismaClient from '$/lib/db.server';
import { logger } from '$lib/logger.server';

const handleDetectLocale = (async ({ event, resolve }) => {
	// TODO: get lang from cookie / user setting
	const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(event.request);
	const locale = detectLocale(acceptLanguageHeaderDetector);
	event.locals.locale = locale;

	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', locale) });
}) satisfies Handle;

const handleAuth = (async (...args) => {
	const [{ event }] = args;
	return SvelteKitAuth({
		trustHost: true,
		secret: config.AUTH_SECRET,
		adapter: PrismaAdapter(prismaClient),
		providers: [
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			Keycloak({
				clientId: config.KEYCLOAK_CLIENT_ID,
				clientSecret: config.KEYCLOAK_CLIENT_SECRET,
				issuer: config.KEYCLOAK_ISSUER,
			}),
		],
		logger: {
			error(code, ...message) {
				logger.error({ auth: { code, message } });
			},
			warn(code, ...message) {
				logger.warn({ auth: { code, message } });
			},
			debug(code, ...message) {
				logger.trace({ auth: { code, message } });
			},
		},
		callbacks: {
			// async signIn({ user, account, profile, email, credentials }) {
			// 	// Called when user logs in
			// 	// Return true if OK to sign in, or False if not OK
			// 	return true;
			// },
			async session({ session, user }) {
				session.user = {
					id: user.id,
					name: user.name,
					email: user.email,
					image: user.image,
					roles: user.roles,
					settings: user.settings,
				};
				event.locals.session = session;
				return session;
			},
		},
		events: {
			async linkAccount(message) {
				// Only called on account creation
				logger.debug({ linkAccount: message });
			},
			async createUser(message) {
				const locale = await prismaClient.locale.findFirst({
					where: {
						id: event.locals.locale,
					},
				});

				const settings = await prismaClient.userSettings.create({
					data: {
						localeId: locale?.id ?? 'en-US',
						userId: message.user.id,
					},
				});

				message.user.settings = settings;
			},
		},
	})(...args);
}) satisfies Handle;

const protectedHandle = (async ({ event, resolve }) => {
	await event.locals.getSession();
	if (!event.locals.session && event.route.id?.includes('(protected)')) {
		throw redirect(302, '/');
	}
	// logger.debug({ session: event.locals.session });
	return resolve(event);
}) satisfies Handle;

export const handle = sequence(handleDetectLocale, handleAuth, protectedHandle);
