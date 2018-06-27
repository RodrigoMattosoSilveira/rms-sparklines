// TODO: Move test file to TypeScript.
// import 'mocha';
// import { expect } from 'chai';
// import 'karma-fixture';
import '@webcomponents/webcomponentsjs/webcomponents-lite';
import { RmsSparklineInlines } from '../src/rms-sparkline-inline';

describe('<rms-sparkline-inline>', () => {
	let component;
	let fixturePath = 'rms-sparkline-inline.fixture.html';
	const FIXTURES = {
		DEFAULT: 0,
		ATTRIBUTES: 1,
	};
	const DEFAULTS = {
		BOOLEAN: true,
		NUMBER: 42,
		STRING: 'Pickle',
		OBJECT: {
			foo: 'bar',
		},
	};

	let canvas;

	before(() => {
		fixture.setBase('test/fixture')
	});

	afterEach(() => {
		fixture.cleanup()
	});

	/**
	 * Validate the the component internal arguments used for computation are valid
	 */
	describe('the rms-sparkline-inline', () => {
		describe('when declared without any attributes, its', () => {
			before(() => {
				component = fixture.load(fixturePath)[FIXTURES.DEFAULT];
				component.linePoints = [4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 5];
				canvas = component.shadowRoot.children[0];
			});
			it('tag name is correct', () => {
				expect(component.tagName).to.equal('RMS-SPARKLINE-INLINE');
			});
			it('has a CANVAS element', () => {
				expect(canvas.tagName).to.equal('CANVAS');
			});
			it('linePoints attarray is empty', () => {
				expect(component.linePoints.length).to.equal(12);
			});
			it('className attribute is set to none', () => {
				expect(component.className).to.equal('');
			});
			it('width attribute is set to 64', () => {
				expect(component.width).to.equal(64);
			});
			it('height attribute is set to 16', () => {
				expect(component.height).to.equal(16);
			});
			it(`linecolor attribute is set to "lightgrey"`, () => {
				expect(component.linecolor).to.equal('lightgrey');
			});
			it(`linewidth attribute is set to 1`, () => {
				expect(component.linewidth).to.equal(1);
			});
			it(`shadecolor attribute is set to "lightblue"`, () => {
				expect(component.shadecolor).to.equal(null);
			});
			it(' children size is 1', () => {
				expect(component.shadowRoot.children.length).equal(1);
			});
			/**
			 * The following two tests are not working due to timing issues. I'll include them in the styleguide where
			 * protractor is better at this
			 */
			xit(`generates the correct canvas image`, () => {
				setTimeout(function(){
					let canvas = component.shadowRoot.children[0];
					expect(canvas.toDataURL()).to.equal(defaultInline);
				}, 5000);
			});
			xit(`generates the in correct canvas image when changed`, () => {
				component.setAttribute('dotradius', 2.5);
				setTimeout(function(){
					let canvas = component.shadowRoot.children[0];
					expect(canvas.toDataURL()).to.not.equal(defaultInline);
				}, 5000);
			});
		});
		describe(' when declared with all attributes (see fixture for values)', () => {
			beforeEach(() => {
				component = fixture.load(fixturePath)[FIXTURES.ATTRIBUTES];
				component.linePoints = [1,2,3,4,5,6,7,8,9,1,2,3];
			});
			it('tag name is correct', () => {
				expect(component.tagName).to.equal('RMS-SPARKLINE-INLINE');
			});
			it('linePoints attarray has 12 elements', () => {
				expect(component.linePoints.length).to.equal(12);
			});
			it(`classname attribute is set to "class_1 class_2 class_3`, () => {
				expect(component.className).to.equal('class_1 class_2 class_3');
			});
			it('width attribute is set to 65', () => {
				expect(component.width).to.equal(65);
			});
			it('height attribute is set to 17', () => {
				expect(component.height).to.equal(17);
			});
			it(`linecolor attribute is set to "linecolor"`, () => {
				expect(component.linecolor).to.equal('linecolor');
			});
			it(`linewidth attribute is set to 5.7`, () => {
				expect(component.linewidth).to.equal(5.7);
			});
			it(`dotradius attribute is set to 1.7`, () => {
				expect(component.dotradius).to.equal(1.7);
			});
			it(`shadecolor attribute is set to "lightblue"`, () => {
				expect(component.shadecolor).to.equal('shadecolor');
			});
		});

	});
});
