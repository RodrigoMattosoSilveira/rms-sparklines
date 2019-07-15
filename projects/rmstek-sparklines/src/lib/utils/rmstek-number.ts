export class RmstekNumber {
   private valueRaw: string;
   getValueRaw(): string { return this.valueRaw; }
   setValuerRaw(value: string): void { this.valueRaw = value; }
   private value: number;
   getValue(): number { return this.value; }
   setValue(value: number): void { this.value = value; }

   constructor(valueRaw: string) {
      this.setValuerRaw(valueRaw);
   }

   validate(failMessage: string): boolean {
      var valid: boolean = true;
      var valueRaw: string = this.getValueRaw();
      // https://stackoverflow.com/questions/23437476/in-typescript-how-to-check-if-a-string-is-numeric
      if(isNaN(Number(valueRaw))) {
         console.log(failMessage + ` : ` + valueRaw);
          valid = false;
      }
      else {
      }
      if (valid) { this.setValue(Number(valueRaw)); }
      return valid;
   }
}
