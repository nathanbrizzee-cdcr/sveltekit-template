// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { Session } from '@auth/sveltekit/node_modules/@auth/core/types';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: Session | undefined;
			locale: import('$lib/i18n/i18n-types.js').Locales;
		}
		// interface PageData {}
		// interface Platform {}
		interface KeycloakAccessToken {
			exp: number;
			iat: number;
			auth_time: number;
			jti: string;
			iss: string;
			aud: string;
			sub: string;
			typ: string;
			azp: string;
			session_state: string;
			acr: '0';
			'allowed-origins': [];
			realm_access: {
				roles: [string];
			};
			resource_access: {
				account: {
					roles: [Array];
				};
			};
			scope: string;
			sid: string;
			email_verified: boolean;
			name: string;
			preferred_username: string;
			given_name: string;
			family_name: string;
			email: string;
		}
	}
}
