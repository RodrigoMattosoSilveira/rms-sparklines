// TODO: Move test file to TypeScript.
// import 'mocha';
// import { expect } from 'chai';
// import 'karma-fixture';
import '@webcomponents/webcomponentsjs/webcomponents-lite';

import { RmsSparklineBoxplot } from '../src/rms-sparkline-boxplot';

describe('<rms-sparkline-boxplot>', () => {
  let component;
  let fixturePath = 'rms-sparkline-boxplot.fixture.html';
  const FIXTURES = {
    DEFAULT: 0,
    SLOT: 1,
    STYLE: 2,
    ATTRIBUTES: 3,
    PROPERTIES: 4,
  };
  const DEFAULTS = {
    BOOLEAN: true,
    NUMBER: 42,
    STRING: 'Pickle',
    OBJECT: {
      foo: 'bar',
    },
  }

  before(() => {
    fixture.setBase('test/fixture')
  });

  afterEach(() => {
    fixture.cleanup()
  });

  describe('slot', () => {
    beforeEach(() => {
      component = fixture.load(fixturePath)[FIXTURES.SLOT];
    });

    it('is rendered', () => {
      // Firefox has different output so testing for inclusion instead of exact match.
      const slot = component.shadowRoot.querySelector('slot');
      expect(slot.assignedNodes()[0].wholeText).to.include(DEFAULTS.STRING);
      // TODO: Switch to simpler test when Firefox is no longer polyfilled.
      // expect(component.innerText).equal('Cat');
    });
  });

  describe('--rms-sparkline-boxplot-background-color', () => {
    describe('with default', () => {
      beforeEach(() => {
        component = fixture.load(fixturePath)[FIXTURES.SLOT];
      });

      it('is set', () => {
        expect(getComputedStyle(component.shadowRoot.querySelector('.content')).backgroundColor).equal('rgb(250, 250, 250)');
      });
    });

    describe('with outside value', () => {
      beforeEach(() => {
        component = fixture.load(fixturePath)[FIXTURES.STYLE].querySelector('rms-sparkline-boxplot');
      });

      it('is set blue', () => {
        expect(getComputedStyle(component.shadowRoot.querySelector('.content')).backgroundColor).equal('rgb(3, 169, 244)');
      });
    });
  });

  describe('#chartType', () => {
    beforeEach(() => {
      component = fixture.load(fixturePath)[FIXTURES.DEFAULT];
    });

    describe('as property', () => {
      describe('when defined', () => {
        beforeEach(() => {
          component.chartType = DEFAULTS.STRING;
        });

        it('is gettable', () => {
          expect(component.chartType).equal(DEFAULTS.STRING);
        });

        it('is reflected to attribute', () => {
          expect(component.getAttribute('chartType')).equal(DEFAULTS.STRING);
        });

        // it('is rendered in shadowRoot', () => {
        //   expect(component.shadowRoot.querySelector('.content').innerText).to.include(`chartType: ${DEFAULTS.STRING}`);
        // });
      });

      describe('when undefined', () => {
        beforeEach(() => {
          component.chartType = null;
        });

        it('is gettable', () => {
          expect(component.chartType).equal(null);
        });

        it('is not reflected to attribute', () => {
          expect(component.hasAttribute('chartType')).to.be.false;
        });

        it('is not rendered in shadowRoot', () => {
          expect(component.shadowRoot.querySelector('.content').innerText).to.include(`chartType: N/A`);
        });
      });
    });

    describe('as attribute', () => {
      describe('when defined', () => {
        beforeEach(() => {
          component.setAttribute('chartType', DEFAULTS.STRING);
        });

        it('is gettable', () => {
          expect(component.chartType).equal(DEFAULTS.STRING);
        });

        it('is reflected to attribute', () => {
          expect(component.getAttribute('chartType')).equal(DEFAULTS.STRING);
        });

        // it('is rendered in shadowRoot', () => {
        //   expect(component.shadowRoot.querySelector('.content').innerText).to.include(`chartType: ${DEFAULTS.STRING}`);
        // });
      });

      describe('when undefined', () => {
        beforeEach(() => {
          component.removeAttribute('chartType');
        });

        it('is gettable', () => {
          expect(component.chartType).equal(null);
        });

        it('is not reflected to attribute', () => {
          expect(component.hasAttribute('chartType')).to.be.false;
        });

        it('is not rendered in shadowRoot', () => {
          expect(component.shadowRoot.querySelector('.content').innerText).to.include(`chartType: N/A`);
        });
      });
    });
  });

});
