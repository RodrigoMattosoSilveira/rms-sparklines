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

	const defaultInline = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAADeUlEQVRYR81XXWhcRRT+Zu6SV9OiD2oU6wohe+dMjCJCpbSC2uqDjfhSqRT/8KXV4oOWQklukIK2ig0mUn+CYkIRLer6JigWY8GHUso5e7dJIVgfisR/qb4kvXdk7C6s203u3bjEnLe5851vvvPNzGGuwv8VURQBGK4tP4LL41UP9V9XnJubu6pYLP7RNk8UDQL4pJY3gCg60zZHBxJWZICIbHHObXfODWqtZ4loW7taROT97y5ePHkpTR/uXbduLAzDz9rl6AS+LQNE5BUATwM4BaBcKBTKi4uL+7XWp4wxb+cVFMfxtiRJ9lpr7xeRjQAOE9FdefM7icttgIic9EdWa300DMM/6yJmZmY2LCwsfGGtLeYVxsy/Aihaa3/zOSLyjVJqnzHGr7GqkcsAZh7TWleNMW+0UicixwEcI6KPs9TXuM4aY8br2DiOH0yS5Elr7fas/JXMO+Amn6eA8835mQaIyBMANhLRU0stXqlU7nDOjRHRncsJXO64M/OM7yv9/f2zrTgqlcpWY8znWQYw880AqI5bPzW14fpDh16rjR9SwKeNHMpd/vCVAkabyeM4HkiS5B1r7e1ZC4vICefckLX266WwInI+CILNpVLp+2YMMz+ulNpERN7wfwUz7wuC4Lo0TdcbYzzu0hImHXDObXXO/VKfv3pi4sZrR0cHauPnFHCk2QDnP1zYvfuenvHxLxsnRSQlIp1VvJ+vNbZnrbUPLHFNJpxz09ba95Yx6Keurq6+3t7en+sYETnsCzbG7GfmnQDeBbDHWvtWHcPMmwF43klr7VAjvwO6AdTfGJECfm9pwNnp6dmku9sXW9ZaH0/T9E0Au4iI8xjgMcwsQRDsCMMwbsxh5heVUj8S0esZV+R5ANcQ0QseJyITAKpE9GrTxhwFMBAEwWCSJC8DuCEIgsdanaws7f4KbAFwxjtTqVRu8fcQwI5CobCzr6/vXBZBk7BHAdxHRLsadtA3zgtEdDAPl4g4IlLM7K9m2Vrrd/yK8H0nTdMDSqmPiGgqD3crTGYTbJdYRH4AcCsRzYvIBwBOEJHfsVzBzC8ppe7WWh9cjcdRxw14ZHLy2Lfz85vu7en565kwHCKiD3NV3gCqVqu3lUql0+3mrQTfcQNqb/r+f8REvues7ei8wOHhI1BqL5wrY2TE//Cs6ei8AWu63CvF/Q17AV4gyi1iTAAAAABJRU5ErkJggg=="

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
			beforeEach(() => {
				component = fixture.load(fixturePath)[FIXTURES.DEFAULT];
				component.linePoints = [4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 5];
			});
			it('tag name is correct', () => {
				expect(component.tagName).to.equal('RMS-SPARKLINE-INLINE');
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
			it(`dotradius attribute is set to 1`, () => {
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
			it(`generates the correct canvas image`, () => {
				setTimeout(function(){
					let canvas = component.shadowRoot.children[0];
					expect(canvas.toDataURL()).to.equal(defaultInline);
				}, 5000);
			});
			it(`generates the in correct canvas image when changed`, () => {
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
