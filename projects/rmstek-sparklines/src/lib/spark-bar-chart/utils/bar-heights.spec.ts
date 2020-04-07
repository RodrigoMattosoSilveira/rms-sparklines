import { BarHeights } from './bar-heights';

describe(`BarHeights`, () => {
  var testaObj: BarHeights;
  var valueRaw: string;
  describe(`should be`, () => {
    beforeEach(() => {
      valueRaw = `BarHeights`;
      testaObj = new BarHeights(valueRaw);
    });
    it(`created`, () => {
      expect(testaObj).toBeTruthy();
    });
    it(`initialized correctly`, () => {
      expect(testaObj.getValueRaw()).toBeTruthy(`BarHeights`);
    });
  });
  describe(`should be`, () => {
    beforeEach(() => {
    });
    it(`valid with all numbers`, () => {
      valueRaw = JSON.stringify([1, 3, 5, 7]);
      testaObj = new BarHeights(valueRaw);
    expect(testaObj.validate(`LinePoints`)).toBe(true);
    });
    it(`invalid with non numeric`, () => {
      valueRaw = JSON.stringify([1, '3A', 5, 7]);
      testaObj = new BarHeights(valueRaw);
      expect(testaObj.validate(`LinePoints`)).toBe(false);
    });
  });
});
