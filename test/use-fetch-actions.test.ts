import { describe, expect, it } from 'vitest';
import { mapActions, noActions } from '../src/queue/map-actions';
import { Performable } from '../src/types/performable';

describe('noActions', () => {
	it('is a stable reference', () => {
		const result = mapActions(['a'], undefined);
		expect(result).toBe(noActions);
	});

	it('is returned when data is undefined', () => {
		const result = mapActions(['invoice-1', 'invoice-2'], undefined);
		expect(result).toBe(noActions);
		expect(result.actions).toEqual({});
		expect(result.actionRows).toEqual([]);
	});

	it('is returned when data is undefined with empty ids', () => {
		const result = mapActions([], undefined);
		expect(result).toBe(noActions);
	});
});

describe('mapActions', () => {
	it('maps ids to actionRows with actions from data', () => {
		const action: Performable = { action: 'approve' };
		const data = { 'invoice-1': [action] };
		const result = mapActions(['invoice-1'], data);
		expect(result.actionRows).toEqual([{ id: 'invoice-1', actions: [action] }]);
		expect(result.actions).toEqual({ 'invoice-1': [action] });
	});

	it('returns empty actions array for ids not in data', () => {
		const data = { 'invoice-1': [{ action: 'approve' }] };
		const result = mapActions(['invoice-1', 'invoice-2'], data);
		expect(result.actionRows).toEqual([
			{ id: 'invoice-1', actions: [{ action: 'approve' }] },
			{ id: 'invoice-2', actions: [] },
		]);
	});

	it('does not include deselected ids in actionRows', () => {
		const action: Performable = { action: 'approve' };
		const data = {
			'invoice-1': [action],
			'invoice-2': [{ action: 'cancel' }],
		};
		const result = mapActions(['invoice-1'], data);
		expect(result.actionRows).toEqual([{ id: 'invoice-1', actions: [action] }]);
	});

	it('returns empty actionRows for empty ids regardless of data', () => {
		const data = { 'invoice-1': [{ action: 'approve' }] };
		const result = mapActions([], data);
		expect(result.actionRows).toEqual([]);
	});
});
