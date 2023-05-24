// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'ar'
	| 'de'
	| 'en'
	| 'es'
	| 'it'
	| 'ru'
	| 'uk'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * H​e​l​l​o​ ​W​o​r​l​d
	 */
	message: string
	seo: {
		/**
		 * M​y​ ​A​p​p
		 */
		title: string
		/**
		 * A​ ​v​e​r​y​ ​g​o​o​d​ ​a​p​p
		 */
		description: string
	}
	navigation: {
		/**
		 * N​a​v​i​g​a​t​i​o​n
		 */
		title: string
		/**
		 * H​o​m​e​p​a​g​e
		 */
		homepage: string
		/**
		 * A​b​o​u​t
		 */
		about: string
	}
	buttons: {
		/**
		 * C​r​e​a​t​e
		 */
		create: string
		/**
		 * L​o​g​o​u​t
		 */
		logOut: string
		/**
		 * S​i​g​n​ ​i​n
		 */
		logIn: string
	}
	labels: {
		/**
		 * T​i​t​l​e
		 */
		title: string
		/**
		 * D​e​s​c​r​i​p​t​i​o​n
		 */
		description: string
		/**
		 * V​i​s​i​b​i​l​i​t​y
		 */
		visibility: string
		/**
		 * {​0​}​ ​v​i​e​w​s
		 * @param {unknown} 0
		 */
		views: RequiredParams<'0'>
	}
	errors: {
		/**
		 * T​i​t​l​e​ ​c​a​n​n​o​t​ ​b​e​ ​e​m​p​t​y​.
		 */
		titleRequired: string
		/**
		 * D​e​s​c​r​i​p​t​i​o​n​ ​c​a​n​n​o​t​ ​b​e​ ​e​m​p​t​y​.
		 */
		descriptionRequired: string
		/**
		 * N​o​t​ ​f​o​u​n​d​.
		 */
		notFound: string
	}
	messages: {
		/**
		 * P​l​e​a​s​e​ ​w​a​i​t​.​.​.
		 */
		pleaseWait: string
	}
	pages: {
		root: {
			loggedIn: {
				messages: {
					/**
					 * C​l​i​c​k​ ​C​r​e​a​t​e​ ​t​o​ ​g​e​t​ ​s​t​a​r​t​e​d​.
					 */
					createList: string
				}
			}
			messages: {
				/**
				 * P​r​e​s​e​n​t​i​n​g​ ​t​h​e​ ​u​l​t​i​m​a​t​e​ ​Y​o​u​T​u​b​e​ ​e​x​p​e​r​i​e​n​c​e​.​ ​W​h​e​t​h​e​r​ ​y​o​u​'​r​e​ ​l​o​o​k​i​n​g​ ​f​o​r​ ​n​e​w​ ​c​o​n​t​e​n​t​ ​t​o​ ​w​a​t​c​h​ ​o​r​ ​w​a​n​t​ ​t​o​ ​s​h​a​r​e​ ​y​o​u​r​ ​o​w​n​ ​c​u​r​a​t​e​d​ ​l​i​s​t​ ​w​i​t​h​ ​f​r​i​e​n​d​s​,​ ​o​u​r​ ​a​p​p​ ​h​a​s​ ​g​o​t​ ​y​o​u​ ​c​o​v​e​r​e​d​.
				 */
				tagline: string
			}
		}
		onboarding: {
			labels: {
				/**
				 * U​s​e​r​n​a​m​e
				 */
				username: string
				/**
				 * U​p​l​o​a​d​ ​F​i​l​e
				 */
				uploadFile: string
			}
			messages: {
				/**
				 * W​e​l​c​o​m​e​ ​t​o​ ​l​i​s​t​d​!​ ​L​e​t​'​s​ ​s​e​t​u​p​ ​y​o​u​r​ ​p​r​o​f​i​l​e​.
				 */
				main: string
				/**
				 * U​p​l​o​a​d​ ​y​o​u​r​ ​a​v​a​t​a​r​.
				 */
				avatar: string
				/**
				 * T​h​a​t​'​s​ ​a​l​l​!​ ​L​e​t​'​s​ ​g​e​t​ ​s​t​a​r​t​e​d​!
				 */
				final: string
			}
		}
		create: {
			labels: {
				/**
				 * C​h​a​n​n​e​l​ ​S​e​a​r​c​h
				 */
				channelSearch: string
			}
			messages: {
				/**
				 * S​e​a​r​c​h​ ​f​o​r​ ​a​ ​c​h​a​n​n​e​l​.​.​.
				 */
				channelSearch: string
			}
		}
	}
}

export type TranslationFunctions = {
	/**
	 * Hello World
	 */
	message: () => LocalizedString
	seo: {
		/**
		 * My App
		 */
		title: () => LocalizedString
		/**
		 * A very good app
		 */
		description: () => LocalizedString
	}
	navigation: {
		/**
		 * Navigation
		 */
		title: () => LocalizedString
		/**
		 * Homepage
		 */
		homepage: () => LocalizedString
		/**
		 * About
		 */
		about: () => LocalizedString
	}
	buttons: {
		/**
		 * Create
		 */
		create: () => LocalizedString
		/**
		 * Logout
		 */
		logOut: () => LocalizedString
		/**
		 * Sign in
		 */
		logIn: () => LocalizedString
	}
	labels: {
		/**
		 * Title
		 */
		title: () => LocalizedString
		/**
		 * Description
		 */
		description: () => LocalizedString
		/**
		 * Visibility
		 */
		visibility: () => LocalizedString
		/**
		 * {0} views
		 */
		views: (arg0: unknown) => LocalizedString
	}
	errors: {
		/**
		 * Title cannot be empty.
		 */
		titleRequired: () => LocalizedString
		/**
		 * Description cannot be empty.
		 */
		descriptionRequired: () => LocalizedString
		/**
		 * Not found.
		 */
		notFound: () => LocalizedString
	}
	messages: {
		/**
		 * Please wait...
		 */
		pleaseWait: () => LocalizedString
	}
	pages: {
		root: {
			loggedIn: {
				messages: {
					/**
					 * Click Create to get started.
					 */
					createList: () => LocalizedString
				}
			}
			messages: {
				/**
				 * Presenting the ultimate YouTube experience. Whether you're looking for new content to watch or want to share your own curated list with friends, our app has got you covered.
				 */
				tagline: () => LocalizedString
			}
		}
		onboarding: {
			labels: {
				/**
				 * Username
				 */
				username: () => LocalizedString
				/**
				 * Upload File
				 */
				uploadFile: () => LocalizedString
			}
			messages: {
				/**
				 * Welcome to listd! Let's setup your profile.
				 */
				main: () => LocalizedString
				/**
				 * Upload your avatar.
				 */
				avatar: () => LocalizedString
				/**
				 * That's all! Let's get started!
				 */
				final: () => LocalizedString
			}
		}
		create: {
			labels: {
				/**
				 * Channel Search
				 */
				channelSearch: () => LocalizedString
			}
			messages: {
				/**
				 * Search for a channel...
				 */
				channelSearch: () => LocalizedString
			}
		}
	}
}

export type Formatters = {}
