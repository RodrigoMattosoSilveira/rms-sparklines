/*
 * Copyright © Markodojo Inc., 2013 - ${YEAR}
 * All Rights Reserved. No part of this website may be reproduced without Markodojo express consent.
 */

// TODO: Move test file to TypeScript.
// import 'mocha';
// import { expect } from 'chai';
// import 'karma-fixture';
import '@webcomponents/webcomponentsjs/webcomponents-lite';

describe('<rms-sparkline-bar-chart>', () => {
  let component;
  let fixturePath = 'rms-sparkline-bar-chart.fixture.html';
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
  const defaultInline = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAmklEQVRYR+2XzQ7AIAiDx/s/tDvs5MLSasFpgmd+ykc10S7ptNanm0nlwpOxPlEwbhA+01BBrG8AgFcMNxjSGx6M9RUAHno5wHnwsMV4wBmRWN8BVwAP8aCbc2gB8Ml5dpwj/L0d1vLpDshtcCgAdtt/wYvTZ/zjwTZdcX1YLXhBmwFQBmNzX7+XvRzADqHEpQNQxK3ILQAdgRuAXtQRdbJtQgAAAABJRU5ErkJggg==
`;

  before(() => {
    fixture.setBase('test/fixture')
  });

  afterEach(() => {
    fixture.cleanup()
  });

	describe('the rms-sparkline-inline', () => {
		describe('when declared without any attributes, its ', () => {
			beforeEach(() => {
				component = fixture.load(fixturePath)[FIXTURES.DEFAULT];
				component.barPoints = [4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 5];
			});
			it('tag name is correct', () => {
				expect(component.tagName).to.equal('RMS-SPARKLINE-BAR-CHART');
			});
			it('barPoints array is empty', () => {
				expect(component.barPoints.length).to.equal(12);
			});
			it('classname attribute is set to none', () => {
				expect(component.className).to.equal('no class provided');
			});
			it('width attribute is set to 64', () => {
				expect(component.width).to.equal(64);
			});
			it('height attribute is set to 16', () => {
				expect(component.height).to.equal(16);
			});
			it(`linecolor attribute is set to "lightgrey"`, () => {
				expect(component.lineColor).to.equal('lightgrey');
			});
			it(`lineWidth attribute is set to 1`, () => {
				expect(component.lineWidth).to.equal(1);
			});
			it(`toolTip attribute is set to false`, () => {
				expect(component.toolTip).to.equal(false);
			});
			it(`fillcolor attribute is set to "lightblue"`, () => {
				expect(component.fillColor).to.equal('lightblue');
			});
			it(' children size is 1', () => {
				expect(component.shadowRoot.children.length).equal(2);
			});
			it(`generates the correct canvas image`, () => {
				setTimeout(function(){
					let canvas = component.shadowRoot.children[1];
					expect(canvas.toDataURL()).to.equal(defaultInline);
				}, 5000);
			});
			it(`generates a different image when attribute changed`, () => {
				component.setAttribute('fillcolor', 'red');
				setTimeout(function(){
					let canvas = component.shadowRoot.children[1];
					expect(canvas.toDataURL()).to.not.equal(defaultInline);
				}, 5000);
			});
		});
		describe('when declared without any attributes, its ', () => {
			beforeEach(() => {
				component = fixture.load(fixturePath)[FIXTURES.ATTRIBUTES];
				component.barPoints = [4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 5];
			});
			it('tag name is correct', () => {
				expect(component.tagName).to.equal('RMS-SPARKLINE-BAR-CHART');
			});
			it('barPoints array is empty', () => {
				expect(component.barPoints.length).to.equal(12);
			});
			it(`classname attribute is set to"class_1 class_2 class_3"`, () => {
				expect(component.className).to.equal('class_1 class_2 class_3');
			});
			it('width attribute is set to 65', () => {
				expect(component.width).to.equal(65);
			});
			it('height attribute is set to 17', () => {
				expect(component.height).to.equal(17);
			});
			it(`lineColor attribute is set to "linecolor"`, () => {
				expect(component.lineColor).to.equal('linecolor');
			});
			it(`lineWidth attribute is set to 5.7`, () => {
				expect(component.lineWidth).to.equal(5.7);
			});
			it(`toolTip attribute is set to true`, () => {
				expect(component.toolTip).to.equal(true);
			});
			it(`fillcolor attribute is set to "fillcolor"`, () => {
				expect(component.fillColor).to.equal('fillcolor');
			});
			it(' children size is 1', () => {
				expect(component.shadowRoot.children.length).equal(2);
			});
			it(`generates the correct canvas image`, () => {
				setTimeout(function(){
					let canvas = component.shadowRoot.children[1];
					expect(canvas.toDataURL()).to.equal(defaultInline);
				}, 5000);
			});
			it(`generates a different image when attribute changed`, () => {
				component.setAttribute('fillcolor', 'red');
				setTimeout(function(){
					let canvas = component.shadowRoot.children[1];
					expect(canvas.toDataURL()).to.not.equal(defaultInline);
				}, 5000);
			});
		});
	});
});

