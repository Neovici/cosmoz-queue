import i18next from 'i18next';

// Initialize i18next for Storybook environment
i18next.init({
	lng: 'en',
	resources: {
		en: {
			translation: {
				'Load more': 'Load more',
				'Load all': 'Load all',
			},
		},
	},
});

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/iu,
				date: /Date$/u,
			},
		},
	},
};
export default preview;
