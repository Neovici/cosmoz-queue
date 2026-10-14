import { array } from '@neovici/cosmoz-utils/array';

/**
 * @deprecated Use `initial-size` and `min-size` attributes on
 * `<cosmoz-resizable-view>` instead (mapped automatically to `splitAttrs`,
 * by both `queue()` and `useQueue()`).
 * `expandToMin` and `snapOffset` have no equivalent and are silently ignored.
 */
export interface SplitConfig {
	sizes?: [number, number];
	/** Minimum widths forwarded to `min-size`: `300` (previous pane only) or `[300, 400]` (both panes). */
	minSize?: number[] | number;
	expandToMin?: boolean;
	snapOffset?: number;
}

/**
 * `initial-size` / `min-size` attribute values for `<cosmoz-resizable-view>`.
 */
export interface SplitAttrs {
	initialSize: string;
	minSize?: string;
}

/**
 * Maps the `split` option to `initial-size` / `min-size` attribute values.
 * Shared by `queue()` and `useQueue()`, consumed via `renderQueue`.
 */
export const computeSplitAttrs = (split?: SplitConfig): SplitAttrs =>
	split
		? {
				initialSize: split.sizes?.[0] != null ? `${split.sizes[0]}%` : '50%',
				// `''` must never reach renderQueue: it would bypass its `?? '100'`
				// fallback and render an empty `min-size` (no pane minimums).
				minSize:
					split.minSize != null
						? array(split.minSize).join(' ') || undefined
						: undefined,
			}
		: { initialSize: '50%', minSize: '100' };
