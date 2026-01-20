import { css } from '@pionjs/pion';
import {
	bottomBarInfoStyles,
	buttonStyles,
	statusStyle,
} from '../styles/shared-styles';
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
