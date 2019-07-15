export class RmstekNumberArray {
   private valueRaw: string;
   getValueRaw(): string { return this.valueRaw; }
   setValueRaw(value: string): void { this.valueRaw = value; }
   private value: Array<number>;
   getValue(): Array<number> { return this.value; }
   setValue(value: Array<number>): void { this.value = value; }

   constructor(valueRaw: string) {
      this.setValueRaw(valueRaw);
   }

   validate(failMessage: string): boolean {
      var valid: boolean = true;
      var valueRaw = JSON.parse(this.getValueRaw());
      var value: Array<number> = [];
      for (let i = 0; i < valueRaw.length; i++) {
         if(isNaN(Number(valueRaw[i]))) {
            console.log(failMessage + ` : ` + valueRaw[i]);
             valid = false;
         }
         else {
            value.push(Number(valueRaw[i]));
         }
      }
      if (valid) { this.setValue(value); }
      return valid;
   }
}
