import cfg from '@neovici/cfg/eslint/config.mjs';

export default [
	...cfg,
	{
		ignores: ['dist/', 'coverage/', 'storybook-static/'],
	},
];
