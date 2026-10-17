import { array } from '@neovici/cosmoz-utils/array';

/**
 * Split-view sizing options for `queue()` and `useQueue()`.
 *
 * Mapped to the `initial-size` / `min-size` attributes of
 * `<cosmoz-resizable-view>` by both `queue()` and `useQueue()`.
 */
export interface SplitConfig {
	/** Initial widths of the two panes in percent. */
	sizes?: [number, number];
	/** Minimum widths per pane, forwarded to the `min-size` attribute. */
	minSize?: number[] | number;
	/** @deprecated Split.js leftovers, ignored. */
	expandToMin?: boolean;
	/** @deprecated Split.js leftovers, ignored. */
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
