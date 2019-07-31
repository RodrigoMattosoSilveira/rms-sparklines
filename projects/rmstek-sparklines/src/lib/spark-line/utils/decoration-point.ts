import { RmstekColor } from '../../utils/rmstek-color';
import { RmstekNumber } from '../../utils/rmstek-number';
import { DecorationPointInterface } from './decoration-point-interfce';

export class DecorationPoint {

   getValueRaw(): string { return this.valueRaw; }
   setValueRaw(value: string): void {  this.valueRaw = value; }

   private index: number;
   geIndex(): number { return this.index; }
   setIndex(value: number): void { this.index = value }

   private color: string;
   getColor(): string { return this.color; }
   setColor(value: string): void { this.color = value }

   getValue(): DecorationPointInterface { return {index: this.geIndex(), color: this.getColor()}; }

   constructor(private  valueRaw: string) {}

   validate(failMessage: string): boolean {
      var valid: boolean = true;
      var valueOBJ: any = JSON.parse(this.getValueRaw());
      var rmstekNumber: RmstekNumber;
      var rmstekColor: RmstekColor

      // must have a the index key
      if (!valueOBJ.hasOwnProperty('index')) {
         valid = false;
         console.log('DecorationPoint has no index key: '  + this.getValueRaw());
      }
      else {
         // the index key value must be a number
         rmstekNumber = new RmstekNumber(valueOBJ.index);
         if (!rmstekNumber.validate('DecorationPoint')) {
            valid = false;
            console.log('DecorationPoint index value is not a number: '  + this.getValueRaw());
         }
      }
      // must have a color key
      if (!valueOBJ.hasOwnProperty('color')) {
         valid = false;
         console.log('DecorationPoint has no color key: '  + this.getValueRaw());
      }
      else {
         // the color key value must be a valid color
         rmstekColor = new RmstekColor(valueOBJ.color);
         if (!rmstekColor.validate('DecorationPoint')) {
            valid = false;
            console.log('DecorationPoint color value is invalid: '  + this.getValueRaw());
         }
      }
      if (valid) {
         this.setIndex(rmstekNumber.getValue());
         this.setColor(rmstekColor.getValue());
      }
      return valid;
   }
}
