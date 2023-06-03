/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
// eslint-disable-next-line no-restricted-imports
import * as environment from '$env/static/private';

const PINO_LOG_LEVELS = ['fatal', 'error', 'warn', 'info', 'debug', 'trace'] as const;

export const ServerConfigSchema = z.object({
	AUTH_SECRET: z.string().trim().min(32),
	KEYCLOAK_CLIENT_ID: z.string().trim().min(1),
	KEYCLOAK_CLIENT_SECRET: z.string().trim().min(1),
	KEYCLOAK_ISSUER: z.string().trim().min(1),
	DB_HOST: z.string().trim().min(1),
	DB_USER: z.string().trim().min(1),
	DB_PASSWORD: z.string().trim().min(1),
	DB_NAME: z.string().trim().min(1),
	DB_PORT: z.coerce.number().default(5432),
	DATABASE_URL: z.string().trim().min(1).url(),
	REDIS_URL: z.string().trim().min(1).url(),
	PINO_LOG_LEVEL: z.enum(PINO_LOG_LEVELS).optional(),
});

export type ServerConfigSchema = z.infer<typeof ServerConfigSchema>;

export const config = ServerConfigSchema.parse(environment);
