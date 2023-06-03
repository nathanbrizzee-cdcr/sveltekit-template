import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { PrismaClient, User, UserSettings } from '@prisma/client';
import type { Adapter, AdapterAccount, AdapterSession } from 'next-auth/adapters';

type OGAdapter = Omit<
	Adapter,
	'getUser' | 'getUserByEmail' | 'getUserByAccount' | 'getSessionAndUser'
>;

export interface CustomAdapter extends OGAdapter {
	getUser(id: string): Promise<(User & { settings: UserSettings | null }) | null>;
	getUserByEmail(email: string): Promise<(User & { settings: UserSettings | null }) | null>;
	getUserByAccount(
		providerAccountId: Pick<AdapterAccount, 'provider' | 'providerAccountId'>
	): Promise<(User & { settings: UserSettings | null }) | null>;
	getSessionAndUser(sessionToken: string): Promise<{
		session: AdapterSession;
		user: User & { settings: UserSettings | null };
	} | null>;
}
export default function CustomPrismaAdapter(client: PrismaClient): CustomAdapter {
	const myPrismaAdapter = PrismaAdapter(client);
	return {
		...myPrismaAdapter,
		linkAccount(account: AdapterAccount) {
			// Keycloak sends a non-standard JSON token so we have to transform it into something NextAuth/Prisma can deal with.
			// https://github.com/nextauthjs/next-auth/issues/3823
			account.not_before_policy = account['not-before-policy'];
			delete account['not-before-policy'];
			return myPrismaAdapter.linkAccount(account);
		},
		async getUser(id: string) {
			return client.user.findUnique({
				where: { id },
				include: { settings: true },
			});
		},
		async getUserByEmail(email: string) {
			return client.user.findUnique({
				where: { email },
				include: { settings: true },
			});
		},
		async getUserByAccount(
			providerAccountId: Pick<AdapterAccount, 'provider' | 'providerAccountId'>
		) {
			const account = await client.account.findUnique({
				where: { provider_providerAccountId: providerAccountId },
				select: {
					user: {
						include: {
							settings: true,
						},
					},
				},
			});
			return account?.user ?? null;
		},
		async getSessionAndUser(sessionToken: string) {
			const userAndSession = await client.session.findUnique({
				where: { sessionToken },
				include: {
					user: {
						include: {
							settings: true,
						},
					},
				},
			});

			if (!userAndSession) return null;

			const { user, ...session } = userAndSession;
			return { user, session };
		},
	};
}
