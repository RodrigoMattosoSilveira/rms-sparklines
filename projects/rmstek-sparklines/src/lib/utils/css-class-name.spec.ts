import { CssClassName } from './css-class-name';

/**
In CSS, identifiers (including element names, classes, and IDs in selectors)
can contain only the characters [a-zA-Z0-9] and ISO 10646 characters U+00A0 and
higher, plus the hyphen (-) and the underscore (_); they cannot start with a
digit, two hyphens, or a hyphen followed by a digit. Identifiers can also
contain escaped characters and any ISO 10646 character as a numeric code
(see next item). For instance, the identifier "B&W?" may be written as
"B\&W\?" or "B\26 W\3F". So - --indent1 is invalid and needs to be escaped
as \--indent1 (-- classes break on iOS, for example). The W3C says that the
use of a leading '-' or '_' should be reserved for vendor-specific CSS
extensions (e.g., -moz* classes implemented by Mozilla browsers). CSS
identifiers can now start with two hyphens.

We will keep it simple and not allow only letters and numbers, and having to
start with a letter
*/
describe(`ClassName`, () => {
  var testObj: CssClassName;
  var valueRaw: string;
  var value: number;
  describe(`when created`, () => {
    beforeEach(() => {
      testObj = new CssClassName('valueRaw');
    });
    it(`is valid`, () => {
      expect(testObj).toBeTruthy();
    });
    describe(`starts with a letter`, () => {
      describe(`has letters, numbers, underscores, or hyphens`, () => {
        it(`and is at least two characters long`, () => {
          testObj = new CssClassName('valueRaw');
          expect(testObj.validate(`Invalid CSS class name`)).toBe(true);

          testObj = new CssClassName('ValueRaw');
          expect(testObj.validate(`Invalid CSS class name`)).toBe(true);

          testObj = new CssClassName('Value-Raw');
          expect(testObj.validate(`Invalid CSS class name`)).toBe(true);

          testObj = new CssClassName('Value_Raw');
          expect(testObj.validate(`Invalid CSS class name`)).toBe(true);

          testObj = new CssClassName('value1Raw');
          expect(testObj.validate(`Invalid CSS class name`)).toBe(true);
        });
        it(`and is not at least two characters long`, () => {
          testObj = new CssClassName('v');
          expect(testObj.validate(`Invalid CSS class name`)).toBe(false);
        });
      });
    });
    describe(`starts with an invalid character`, () => {
      it(`the character underscopre`, () => {
        testObj = new CssClassName('_valueRaw');
        expect(testObj.validate(`Invalid CSS class name`)).toBe(false);
      });
      it(`the character hypphen`, () => {
        testObj = new CssClassName('-valueRaw');
        expect(testObj.validate(`Invalid CSS class name`)).toBe(false);
      });
      it(`the character exclamation point`, () => {
        testObj = new CssClassName('!valueRaw');
        expect(testObj.validate(`Invalid CSS class name`)).toBe(false);
      });
    });
    describe(`has invalid character`, () => {
      it(`any character`, () => {
        testObj = new CssClassName('value!Raw');
        expect(testObj.validate(`Invalid CSS class name`)).toBe(true);
      });
    });
  });
});
