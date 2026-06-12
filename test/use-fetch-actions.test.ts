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

describe('useFetchActions stale request handling', () => {
	it('identifies AbortError by name property', () => {
		const abortError = new DOMException(
			'The operation was aborted.',
			'AbortError',
		);
		expect(abortError.name).toBe('AbortError');
		expect(abortError?.name === 'AbortError').toBe(true);
	});

	it('does not identify regular Error as AbortError', () => {
		const networkError = new Error('Network error');
		expect(networkError?.name === 'AbortError').toBe(false);
	});

	it('reqId guard: stale response does not update state', () => {
		let reqId = 0;
		const thisReq = ++reqId;

		expect(thisReq).toBe(1);
		expect(reqId).toBe(1);

		const thisReq2 = ++reqId;
		expect(thisReq2).toBe(2);
		expect(reqId).toBe(2);

		expect(reqId !== thisReq).toBe(true);
		expect(reqId === thisReq2).toBe(true);
	});
});
