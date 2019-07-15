export class Number {
   private numberRaw: string;
   getNumberRaw(): string { return this.numberRaw; }
   setNumberRaw(value: string): void { this.numberRaw = value; }
   private number: number;
   getNumber(): number { return this.number; }
   setNumber(value: string): void { this.number = new Number(value).getNumber(); }

   constructor(numberRaw: string) {
      this.numberRaw = numberRaw;
   }

   validate(failMessage: string): boolean {
      var valid: boolean = true;
      var numberRaw = this.getNumberRaw();
      let number = new Number(this.getNumberRaw());
      if(isNaN(number.getNumber())) {
         console.log(failMessage + `: ` + JSON.stringify(numberRaw));
          valid = false;
      }
      return valid;
   }
}
