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

	const expectedSparkline_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAADbklEQVRYR82XT2wUVRzHv7/Z1HQTQpZURRsXUSwxnXlPTEqEg7gQNcYE/HMxxkNtL8YAiVBPxqSvIcaEA4IxvUCiCRcuBMVqggrS6IEL2r63s5O4F/Ui6IHGGDbs7MzPvN0tTofCDpUu/V02m/f9ze/3+/x+b94bwt02pUoAPgKwCcCvAF6BUjPdSou6FeimcVrFPpFYn4FST3Yrr5UAgG8oVqmu5XVHAs3Ozm4homdsJ/P5/MjAwMC1zB1Uyo79wwn9LJSy26ErtmQAQRCUGo3GewBs4ReJaDqO4z+JaLsQYlfW7D+cmvrqoNbiSr1evL+3t7F17dpXvxgZ+TKr///VLQmA7/tPR1G0B8DRer0+PTQ0FM4nYoz5hpkPSim/65ScMeZtAJ4QYrfVGmOeB7BfCPFCJ9/bWWfgMwDDbZ/z9kVLwJz9vwAAA6rdUbt2noCJdCCt9TYAB6SUtvM3WBAEG8MwPC2lfPxWSfq+/1QURYellFuTOmPMFDNPSim/Xsy/Uqk8ODg4+EcnANVqdUMYho3i6OiWVRcunEjp9xFweAEABuxx9H1KuJ0AS6xpxhirUUII+3tT01p/4jhOxfO8ycVEvu/fE8fx30KI3vR6EATrwzA8J6V8NL1WLpcnmNkCmykUCuPFYrG2SINeJCLbOPseeujeY8dWP3DkyJqUboJazf5vAtrdH08Ka553PG/MKBE1fN/fEcfx+0KIHZ3ot2HFQggnra1Wq/fVarUTuVzuDdd1Ly32LK31Icdxfvc8r9klZnaMMbYR30opDxhj3mXmCSKa7OvrG+/v77+qtZ4v/DIzj0spLzZ9W/eLn1NxRqi1LRYAeBPAp0nhpbEx/6/h4Y1EdIaZ81LKZ7MU3wawF8Bj4uTJU7ZjUGrOGPMaM39MRFIIcbnDFIV2QiqVSimKojO5XK7kuu6PSR9jzJgFAeA0Ea1OFp7UMfAOgJcBFAB8Pt/9BQDatCzl+b09Ta1t0Rx9IcT1rZAJglKlVT09Z/8Jw+YU7Fq37qcPNm/+RQjxehZ/rfVbjuO8FMdxj5TyuVv52Jey67o/ZHluWrOkUyBTIKWSMFsut3nBKZfLOz3PW9YjsbsAgEfQuvisGFtOAMmz1xb8G5Rav2IqbyeynAAKYFYg2gTmORCpbn7lZQW9fACyZnCXdf8CwpFKIGant1sAAAAASUVORK5CYII=";
	let actualSparkline_1;
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
				actualSparkline_1 = canvas.toDataURL();
			});
			it('tag name is correct', () => {
				expect(component.tagName).to.equal('RMS-SPARKLINE-INLINE');
			});
			it('tag name is correct', () => {
				expect(canvas.tagName).to.equal('CANVAS');
			});
			it('linePoints attarray is empty', () => {
				expect(component.linePoints.length).to.equal(12);
			});
			it('classname attribute is set to none', () => {
				expect(component.classname).to.equal('');
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
			it(`startcolor attribute is set to "red"`, () => {
				expect(component.startcolor).to.equal('red');
			});
			it(`endcolor attribute is set to "red"`, () => {
				expect(component.endcolor).to.equal('red');
			});
			it(`maxcolor attribute is set to "teal"`, () => {
				expect(component.maxcolor).to.equal('teal');
			});
			it(`dotradius attribute is set to 0`, () => {
				expect(component.dotradius).to.equal(0);
			});
			it(`toolTip attribute is set to false`, () => {
				expect(component.tooltip).to.equal(false);
			});
			it(` shade attribute is set to false`, () => {
				expect(component.shade).to.equal(false);
			});
			it(`shadecolor attribute is set to "lightblue"`, () => {
				expect(component.shadecolor).to.equal('lightblue');
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
				expect(component.classname).to.equal('class_1 class_2 class_3');
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
			it(`startcolor attribute is set to "startcolor"`, () => {
				expect(component.startcolor).to.equal('startcolor');
			});
			it(`endcolor attribute is set to "endcolor"`, () => {
				expect(component.endcolor).to.equal('endcolor');
			});
			it(`maxcolor attribute is set to "maxcolor"`, () => {
				expect(component.maxcolor).to.equal('maxcolor');
			});
			it(`dotradius attribute is set to 1.7`, () => {
				expect(component.dotradius).to.equal(1.7);
			});
			it(`toolTip attribute is set to true`, () => {
				expect(component.tooltip).to.equal(true);
			});
			it(` shade attribute is set to true`, () => {
				expect(component.shade).to.equal(true);
			});
			it(`shadecolor attribute is set to "lightblue"`, () => {
				expect(component.shadecolor).to.equal('shadecolor');
			});
		});

	});
});
