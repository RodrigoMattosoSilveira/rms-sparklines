export class RmstekNumberArray {
   private valueParsed: string;
   getValueRaw(): string { return this.valueParsed; }
   setValueRaw(value: string): void { this.valueParsed = value; }
   private value: Array<number>;
   getValue(): Array<number> { return this.value; }
   setValue(value: Array<number>): void { this.value = value; }

   constructor(valueParsed: string) {
      this.setValueRaw(valueParsed);
   }

   validate(failMessage: string): boolean {
      var valid: boolean = true;
      var valueParsed = JSON.parse(this.getValueRaw());
      var value: Array<number> = [];
      for (let i = 0; i < valueParsed.length; i++) {
         if(isNaN(Number(valueParsed[i]))) {
            // console.log(failMessage + ` : ` + valueParsed[i]);
             valid = false;
         }
         else {
            value.push(Number(valueParsed[i]));
         }
      }
      if (valid) { this.setValue(value); }
      return valid;
   }
}
