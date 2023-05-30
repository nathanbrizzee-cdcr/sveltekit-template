import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
	message: 'Hello World',
	seo: {
		title: 'My App',
		description: 'A very good app',
	},
	navigation: {
		title: 'Navigation',
		homepage: 'Homepage',
		about: 'About',
	},
	buttons: {
		create: 'Create',
		logOut: 'Logout',
		logIn: 'Sign in',
	},
	labels: {
		title: 'Title',
		description: 'Description',
		visibility: 'Visibility',
		views: '{0} views',
	},
	errors: {
		titleRequired: 'Title cannot be empty.',
		descriptionRequired: 'Description cannot be empty.',
		notFound: 'Not found.',
	},
	messages: {
		pleaseWait: 'Please wait...',
	},
	pages: {
		root: {
			loggedIn: {
				messages: {
					createList: 'Click Create to get started.',
				},
			},
			messages: {
				tagline:
					"Presenting the ultimate YouTube experience. Whether you're looking for new content to watch or want to share your own curated list with friends, our app has got you covered.",
			},
		},
		onboarding: {
			buttons: {
				letsGo: 'Lets Go!',
			},
			labels: {
				username: 'Username',
				uploadFile: 'Upload File',
			},
			messages: {
				main: "Welcome to listd! Let's setup your profile.",
				avatar: 'Upload your avatar.',
				final: "That's all! Let's get started!",
			},
		},
		create: {
			labels: {
				channelSearch: 'Channel Search',
			},
			messages: {
				channelSearch: 'Search for a channel...',
			},
		},
	},
};

export default en;
