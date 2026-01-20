import { style as statusStyle } from '#cz/render/status/index.ts';
import {
	bottomBarInfoStyles,
	buttonStyles,
} from '#cz/styles/app/shared-styles';
import { css } from '@pionjs/pion';
import { style as loadMoreStyle } from './more/render-more';
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
