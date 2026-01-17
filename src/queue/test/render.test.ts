import { expect, fixture } from '@open-wc/testing';
import { nothing, TemplateResult } from 'lit-html';
import { spy } from 'sinon';
import { renderNav, renderPagination } from '../render';

suite('queue > render', () => {
	test('renderNav', async () => {
		const el = await fixture(renderNav({}));
		await expect(el).dom.to.equalSnapshot();
	});

	test('renderPagination nothing', async () => {
		expect(renderPagination()).to.equal(nothing);
	});

	test('renderPagination', async () => {
		const onPage = spy();
		const el = await fixture(
			renderPagination({
				totalPages: 10,
				pageNumber: 3,
				onPage,
			}) as TemplateResult,
		);
		await expect(el).dom.to.equalSnapshot();
		el.querySelector<HTMLElement>('.page-next')?.click();
		expect(onPage).to.have.been.calledWith(4);
		onPage.resetHistory();
		el.querySelector<HTMLElement>('.page-prev')?.click();
		expect(onPage).to.have.been.calledWith(2);
	});
});
