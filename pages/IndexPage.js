const BasePage = require('./BasePage');
const OfficesSlider = require('../fragments/OfficesSliderFragment');

class IndexPage extends BasePage {
	constructor() {
		super();
		this.slider = new OfficesSlider($('.tabs-ui'));
	}

	get getSlider() {
		return this.slider;
	}
}

module.exports = IndexPage;
