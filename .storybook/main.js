export default {
	stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-vitest',
		'@neovici/cfg/storybook/preset.mjs',
	],
	framework: '@storybook/web-components-vite',
};
