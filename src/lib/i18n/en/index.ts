import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
	message: 'Hello World',
	seo: {
		title: 'CDCR Layout',
		description: 'Starter template for CDCR Sveltekit development.',
	},
	navigation: {
		title: 'Navigation',
		homepage: 'Homepage',
		about: 'About',
	},
	buttons: {
		create: 'Create',
		logOut: 'Logout',
		logIn: 'Log in',
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
			login: {
				headline: 'Terms and Conditions',
				body: 'This is an official State of California System for authorized and approved law enforcement use only. Access to or use of this system by non-authorized user is a violation of both State of California and Federal law. Unauthorized access will be prosecuted to the full extent of the law.',
				acknowledgement: 'I agree to these Terms and Conditions.',
				disabledBtn: 'Must accept Terms and Conditions',
				loginBtn: 'Login to ', // will render with siteTitle.
			},
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
