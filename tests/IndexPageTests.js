const IndexPage = require('../pages/IndexPage');

describe('Main page - epam.com: ', () => {
	const indexPageObject = new IndexPage();
	beforeEach(async () => await browser.get('https://www.epam.com/'));

	it('Page should have a title', async () => {
		await expect(indexPageObject.getPageTitle()).toEqual('EPAM | Enterprise Software Development, Design & Consulting');
	});

	it('When click on the third tab - activate AMERICAS', async () => {
		await indexPageObject.getSlider.setActiveLinkByNthChild(3);
		await expect(indexPageObject.getSlider.getActiveLink.getText()).toBe('AMERICAS');
	});

	it('Offices slider has 2 buttons', async () => {
		await expect(indexPageObject.getSlider.sliderButtonsAmount).toBe(2);
	});

	it('Offices slider has 3 active images', async () => {
		await expect(indexPageObject.getSlider.sliderActiveImagesAmount).toBe(3);
	});

	it('Offices slider has 4 tabs', async () => {
		await expect(indexPageObject.getSlider.sliderTabsAmount).toBe(4);
	});

	it('Offices slider has specific title', async () => {
		await expect(indexPageObject.getSlider.sliderTitle.getText()).toBe('OUR OFFICES');
	});
});
