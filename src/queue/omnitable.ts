import { html } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';
import '@neovici/cosmoz-omnitable';
import { Rec } from '@neovici/cosmoz-utils/object';
import { updateWith } from '../util/polymer-property-changed-event.js';
import { Ref } from '@pionjs/pion';
import { ref } from 'lit-html/directives/ref.js';

interface Props<I> {
	exposedParts?: string;
	settingsId?: string;

	data$?: Promise<I[]>;

	onData?: (v: I[]) => void;
	selected?: I[];
	onSelected?: (v: I[]) => void;

	descending?: boolean;
	onDescending?: (v: boolean) => void;

	sortOn?: string;
	onSort?: (v: string) => void;

	ref?: Ref<HTMLElement | undefined>;
}

const loading$$ = <T>(data$?: Promise<T>, loading?: boolean) =>
	guard([data$, loading], () =>
		when(
			data$,
			(data$) =>
				until(
					data$?.then(
						() => false,
						() => false,
					),
					true,
				),
			() => loading,
		),
	);
const data$$ = <T, D>(data$?: Promise<T>, data?: D) =>
	guard([data$, data], () =>
		when(
			data$,
			() => until(data$, []),
			() => data,
		),
	);

const omnitable = <I extends Rec>(
	{
		exposedParts,
		settingsId,
		data$,
		onData,
		selected,
		onSelected,
		descending,
		onDescending,
		sortOn,
		onSort,
		ref: omnitableRef,
	}: Props<I>,
	content?: unknown,
) => html`
	<cosmoz-omnitable
		${ref((el?: Element) => {
			if (omnitableRef) omnitableRef.current = el as HTMLElement;
		})}
		class="ot"
		.settingsId=${settingsId}
		.data=${data$$(data$)}
		?loading=${loading$$(data$)}
		exportparts=${exposedParts}
		.sortOn=${sortOn}
		@sort-on-changed=${updateWith(onSort)}
		.descending=${descending}
		@descending-changed=${updateWith(onDescending)}
		.selectedItems=${selected}
		@selected-items-changed=${updateWith(onSelected)}
		@visible-data-changed=${updateWith(onData)}
		>${content}</cosmoz-omnitable
	>
`;

export default omnitable;
