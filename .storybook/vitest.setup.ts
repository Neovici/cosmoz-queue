import { setProjectAnnotations } from '@storybook/web-components';
import { beforeAll, expect } from 'vitest';
import * as previewAnnotations from './preview';

const annotations = setProjectAnnotations([previewAnnotations]);

beforeAll(annotations.beforeAll);

// Custom snapshot serializer to strip lit-html dynamic markers
// These markers (e.g., <!--?lit$862816821$-->) change between runs
expect.addSnapshotSerializer({
	test: (val) => typeof val === 'string' && val.includes('<!--?lit$'),
	// eslint-disable-next-line max-params
	serialize: (val, config, indentation, depth, refs, printer) =>
		printer(
			(val as string).replace(/<!--\?lit\$\d+\$-->/gu, ''),
			config,
			indentation,
			depth,
			refs,
		),
});
