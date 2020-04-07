export class CssClassName {
  className: string;

  constructor(private classNameRaw: string) {
  }

  validate(failMessage: string): boolean {
    /**
    https://stackoverflow.com/questions/448981/which-characters-are-valid-in-css-class-names-selectors

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
    // let regexp: RegExp = /-?[_a-zA-Z]+[_a-zA-Z0-9-]*/;
    let regexp: RegExp = /^[a-zA-Z]+[_a-zA-Z0-9-]*/;
    var valid: boolean = true;
    if (this.classNameRaw.length < 2) {
      valid = false;
      console.log(failMessage + ` : ` + this.classNameRaw + ` is less than 2 characters long`);
    } else {
      valid = regexp.test(this.classNameRaw);
      if(!valid) {
        console.log(failMessage + ` : ` + this.classNameRaw + ` has invalid length or characters`);
      }
    }
    if (valid) { this.className = this.classNameRaw }
    return valid;
  }
}
