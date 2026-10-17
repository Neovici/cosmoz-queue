import { css } from '@pionjs/pion';
import { bottomBarInfoStyles, statusStyle } from '../styles/shared-styles';
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
	${statusStyle}
`;
