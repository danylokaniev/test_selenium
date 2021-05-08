const BaseFragment = require('protractor-element-extend').BaseFragment;

class OffecesSlider extends BaseFragment {
	constructor(rootElement) {
		super(rootElement);
		this.activeLink = element(by.css('.tabs__link.js-tabs-link.active'));
	}

	get getActiveLink() {
		return element(by.css('.tabs__link.js-tabs-link.active'));
	}

	setActiveLinkByNthChild(numberOfChild) {
		// return element(By.css('.owl-item.active')).all(By.tagName('div')).get(numberOfChild).click();
		// console.log($$(`.js-tabs-controls div.owl-item.active`).getText());
		// $$(`.js-tabs-controls div.owl-item.active`).get(numberOfChild).click();
		return $$('.owl-item.active').get(numberOfChild).click();
	}

	get sliderButtonsAmount() {
		return $$('.owl-nav button').count();
	}

	get sliderTabsAmount() {
		return $$('.tabs__link.js-tabs-link').count();
	}

	get sliderActiveImagesAmount() {
		return $$('.owl-stage').last().$$('.owl-item.active').count();
	}

	get sliderTitle() {
		return element(by.css('.title-ui.title--center.title--padding-normal'));
	}
}

module.exports = OffecesSlider;
