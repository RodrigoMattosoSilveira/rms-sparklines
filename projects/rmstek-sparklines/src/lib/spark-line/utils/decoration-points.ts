import { DecorationPoint } from './decoration-point';

export class DecorationPoints {
   valid: boolean;
   getValid(): boolean { return this.valid; }
   setValid(value: boolean) { this.valid = value; }
   value: Array<DecorationPoint> = [];
   getValue(): Array<DecorationPoint> { return this.value; }
   setValue(value: Array<DecorationPoint>) { this.value = value; }
   // valueRaw: string;
   getValueRaw(): string { return this.valueRaw; }
   setValueRaw(value: string) { this.valueRaw = value; }

   constructor(private valueRaw: string) {}
   validate(message: string): boolean {
      var decorationPointsWork: Array<any>;
      var decorationPointsRaw: string;
      var decorationPoint: DecorationPoint;

      this.setValid(true);
      decorationPointsRaw = this.getValueRaw();
      if (decorationPointsRaw === null) {
         console.log(message + ` decorationPointsRaw is null: `);
         this.setValid(false);
      }
      else {
         decorationPointsWork = JSON.parse(decorationPointsRaw);
         for (let i=0; i < decorationPointsWork.length; i++) {
            decorationPoint = new DecorationPoint(decorationPointsWork[i]);
            if (!decorationPoint.validate(`DecorationPoints`)) {
               this.setValid(false);
               console.log(`DecorationPoints - Invalid decoration point: ` + decorationPoint.getValueRaw());
            }
            else {
               this.getValue().push(decorationPoint);
            }
         }
      }
      return this.getValid();
   }
   scaleToCanvas() {}
   buildTooltips() {}
}
