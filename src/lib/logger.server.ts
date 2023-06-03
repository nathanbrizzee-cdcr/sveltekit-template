import { pino } from 'pino';
import { config } from '$lib/config.server';
import { name as MyAppName, version as MyAppVersion } from '../../package.json';

const appName = `${MyAppName ?? 'my-missing-app-name'}:${MyAppVersion ?? '0.0.0'}`;

// https://getpino.io/#/docs/help
export const logger = pino({
	name: appName,
	level: config.PINO_LOG_LEVEL ?? 'error',
	formatters: {
		level: (label) => ({ level: label }),
	},
});
