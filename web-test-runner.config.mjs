import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
	nodeResolve: true,
	files: 'src/**/*.test.ts',
	plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
	browsers: [playwrightLauncher({ product: 'chromium' })],
	testFramework: { config: { ui: 'tdd' } },
	coverage: true,
	coverageConfig: {
		include: ['src/**/*.ts'],
	},
};
