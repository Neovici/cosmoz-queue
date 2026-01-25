import { esbuildPlugin } from '@web/dev-server-esbuild';
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
	nodeResolve: true,
	files: 'test/**/*.test.ts',
	plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
	browsers: [playwrightLauncher({ product: 'chromium' })],
	testFramework: { config: { ui: 'bdd' } },
	coverage: true,
	coverageConfig: {
		include: ['src/**/*.ts'],
	},
};
