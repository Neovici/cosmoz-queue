export default {
	stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	framework: {
		name: '@web/storybook-framework-web-components',
	},
	core: {
		builder: {
			name: '@web/storybook-builder',
		},
	},
};
