import { DecorationPoint } from './decoration-point';
import { RmstekColor } from '../../utils/rmstek-color';
import { RmstekNumber } from '../../utils/rmstek-number';
import { RmstekNumberArray } from '../../utils/rmstek-number-array';

export class DecorationPoints extends RmstekNumberArray {
   // decorationPointsRaw
   getDecorationPointsRaw(): string { return this.decorationPointsRaw; }
   setDecorationPointsRaw(value: string) { this.decorationPointsRaw = value; }
   valid: boolean;
   getValid(): boolean { return this.valid; }
   setValid(value: boolean) { this.valid = value; }

   constructor(private decorationPointsRaw: string) { super(decorationPointsRaw); }
   validate(message: string): boolean {
      var decorationPointsWork: Array<any>;
      var decorationPointWork: any;
      var decorationPoints: Array<DecorationPoint> = [];
      var decorationPointsRaw: string;
      // The index must be between zero and the Linepoints.length -1
      // The color must be valid
      this.setValid(true);
      decorationPointsRaw = this.getDecorationPointsRaw();
      if (decorationPointsRaw === null) {
         console.log(message + ` decorationPointsRaw is null: `);
         this.setValid(false);
      }
      else {
         decorationPointsWork = JSON.parse(decorationPointsRaw);
         for (let i=0; i < decorationPointsWork.length; i++) {
            let rmstekNumber: RmstekNumber;
            let rmstekColor: RmstekColor;
            let valid: boolean = true;
            
            decorationPointWork = decorationPointsWork[i];
            // Must have index key, and it must be a number
            if (!decorationPointWork.hasOwnProperty('number')) {
               valid = false;
               console.log(message + ` decorationPoint does not include number key: ` + JSON.stringify(decorationPointWork));
            }
            else {
               rmstekNumber = new RmstekNumber(decorationPointWork.number);
               valid = rmstekNumber.validate(message);
            }
            // must have color key, must be a valid color
            if (!decorationPointWork.hasOwnProperty('color')) {
               valid = false;
               console.log(message + ` decorationPoint does not include color key: ` + JSON.stringify(decorationPointWork));
            }
            else {
               rmstekColor = new RmstekColor(decorationPointWork.number);
               valid = valid && rmstekColor.validate(message);
            }
         }
      }
      return this.getValid();
   }
   scaleToCanvas() {}
   buildTooltips() {}
}
