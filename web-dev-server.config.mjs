import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
	nodeResolve: true,
	open: true,
	watch: true,
	appIndex: 'demo/index.html',
	plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
};
