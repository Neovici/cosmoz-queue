import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, userEvent } from 'storybook/test';
import { itemClick } from '../src/queue/item-click';

const meta: Meta = {
	title: 'Tests/ItemClick',
};

export default meta;

export const FiresEvent: StoryObj = {
	render: () => html`
		<button
			id="test-button"
			@click=${itemClick({ index: 2, activate: 'queue' })}
		>
			Click me
		</button>
	`,
	async play({ canvasElement }) {
		const button = canvasElement.querySelector(
			'#test-button',
		) as HTMLButtonElement;

		let eventDetail: { index: number; activate: string } | null = null;
		button.addEventListener('omnitable-item-click', ((e: CustomEvent) => {
			eventDetail = e.detail;
		}) as EventListener);

		await userEvent.click(button);

		expect(eventDetail).not.toBeNull();
		expect(eventDetail!.index).toBe(2);
		expect(eventDetail!.activate).toBe('queue');
	},
};

export const PreventsDefault: StoryObj = {
	render: () => html`
		<button
			id="test-button"
			@click=${itemClick({ index: 3, activate: 'list' })}
		>
			Click me
		</button>
	`,
	async play({ canvasElement }) {
		const button = canvasElement.querySelector(
			'#test-button',
		) as HTMLButtonElement;

		let eventDetail: { index: number; activate: string } | null = null;
		let wasDefaultPrevented = false;

		button.addEventListener('omnitable-item-click', ((e: CustomEvent) => {
			eventDetail = e.detail;
			e.preventDefault();
		}) as EventListener);

		button.addEventListener('click', (e: MouseEvent) => {
			wasDefaultPrevented = e.defaultPrevented;
		});

		await userEvent.click(button);

		expect(eventDetail).not.toBeNull();
		expect(eventDetail!.index).toBe(3);
		expect(eventDetail!.activate).toBe('list');
		expect(wasDefaultPrevented).toBe(true);
	},
};

export const DoesNotFireWithCtrlKey: StoryObj = {
	render: () => html`
		<button
			id="test-button"
			@click=${itemClick({ index: 3, activate: 'list' })}
		>
			Click me
		</button>
	`,
	async play({ canvasElement }) {
		const button = canvasElement.querySelector(
			'#test-button',
		) as HTMLButtonElement;

		let eventFired = false;
		button.addEventListener('omnitable-item-click', () => {
			eventFired = true;
		});

		// Simulate ctrl+click using native MouseEvent
		const ctrlClickEvent = new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
			ctrlKey: true,
		});
		button.dispatchEvent(ctrlClickEvent);

		expect(eventFired).toBe(false);
	},
};
