import { BarChartTypesEnum } from './bar-chart-types-enum';

describe(`BarChartTypesEnum`, () => {
  var barChartTypesKeys: string[];
  var barChartTypesValues: string[];
  describe(`keys`, () => {
    beforeEach(() => {
      barChartTypesKeys = Object.keys(BarChartTypesEnum).map(x => x.toUpperCase());
    });
    it(`lenght is 3`, () => {
      expect (barChartTypesKeys.length).toBe(3);
    });
    it(`with a NEGATIVE key`, () => {
      expect (barChartTypesKeys.indexOf(`NEGATIVE`)).not.toBe(-1);
    });
    it(`with a POSITIVE key`, () => {
      expect (barChartTypesKeys.indexOf(`POSITIVE`)).not.toBe(-1);
    });
    it(`with a ZERO key`, () => {
      expect (barChartTypesKeys.indexOf(`ZERO`)).not.toBe(-1);
    });
  });
  describe(`values`, () => {
    beforeEach(() => {
      barChartTypesValues = Object.values(BarChartTypesEnum).map(x => x.toUpperCase());
    });
    it(`lenght is 3`, () => {
      expect (barChartTypesValues.length).toBe(3);
    });
    it(`with a NEGATIVE value`, () => {
      expect (barChartTypesValues.indexOf(`NEGATIVE`)).not.toBe(-1);
    });
    it(`with a POSITIVE value`, () => {
      expect (barChartTypesValues.indexOf(`POSITIVE`)).not.toBe(-1);
    });
    it(`with a ZERO value`, () => {
      expect (barChartTypesValues.indexOf(`ZERO`)).not.toBe(-1);
    });
  });
});
