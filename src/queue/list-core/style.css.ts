import { loadMoreStyle } from '#cz/render/load-more.ts';
import { style as statusStyle } from '#cz/render/status/index.ts';
import {
	bottomBarInfoStyles,
	buttonStyles,
} from '#cz/styles/app/shared-styles';
import { css } from '@pionjs/pion';
export const style = css`
	:host {
		display: flex;
		flex-direction: column;
		flex: auto;
		height: 100%;
	}
	#omnitable {
		flex: auto;
		min-height: 200px;
	}
	${bottomBarInfoStyles}
	${buttonStyles}
	${statusStyle}
	${loadMoreStyle}
`;
