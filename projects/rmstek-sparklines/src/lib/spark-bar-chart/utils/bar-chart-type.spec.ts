import { BarChartType } from './bar-chart-type';

describe(`BarChartType`, () => {
  var testObj: BarChartType;
  var valueRaw: string;
  var value: number;
  describe(`should be`, () => {
    beforeEach(() => {
      valueRaw = `NEGATIVE`;
      testObj = new BarChartType(valueRaw);
    });
    it(`created`, () => {
      expect(testObj).toBeTruthy();
    });
    it(`initialized correctly`, () => {
      expect(testObj.getValueRaw()).toBe(valueRaw);
    });
    });
  describe(`should be valid with`, () => {
    it(`NEGATIVE`, () => {
      let valueRaw = 'NEGATIVE';
      testObj = new BarChartType(valueRaw);
      expect(testObj.validate()).toBe(true);
    });
    it(`negative`, () => {
      let valueRaw = 'negative';
      testObj = new BarChartType(valueRaw);
      expect(testObj.validate()).toBe(true);
    });
    it(`POSITIVE`, () => {
      let valueRaw = 'POSITIVE';
      testObj = new BarChartType(valueRaw);
      expect(testObj.validate()).toBe(true);
    });
    it(`PoSiTiVe`, () => {
      let valueRaw = 'PoSiTiVe';
      testObj = new BarChartType(valueRaw);
      expect(testObj.validate()).toBe(true);
    });
    it(`ZERO`, () => {
      let valueRaw = 'ZERO';
      testObj = new BarChartType(valueRaw);
      expect(testObj.validate()).toBe(true);
    });
  });
  describe(`should not be valid with`, () => {
    it(`NEGATIVEE`, () => {
      let valueRaw = 'NEGATIVEE';
      testObj = new BarChartType(valueRaw);
      expect(testObj.validate()).toBe(false);
    });
    it(`NEGATIVE1`, () => {
      let valueRaw = 'NEGATIVE1';
      testObj = new BarChartType(valueRaw);
      expect(testObj.validate()).toBe(false);
    });
  });
});
