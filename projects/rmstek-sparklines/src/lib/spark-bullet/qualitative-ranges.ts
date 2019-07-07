import { CoordinateTip } from '../utils/coordinate-tip';
import { QualitativeRange } from './qualitative-range'

export class QualitativeRanges {
   qualitativeRanges: Array<QualitativeRange>;
   getQualitativeRanges(): Array<QualitativeRange> { return this.qualitativeRanges; }
   setQualitativeRanges(value: Array<QualitativeRange>): void { this.qualitativeRanges = value; }
   qualitativeRangesRaw: string;
   getQualitativeRangesRaw(): string { return this.qualitativeRangesRaw; }
   setQualitativeRangesRaw(value: string): void { this.qualitativeRangesRaw = value; }
   valid: boolean;
   getValid(): boolean { return this.valid; }
   setValid(value: boolean) { this.valid = value; }

   constructor(qualitativeRangesRaw: string) {
      this.setQualitativeRangesRaw (qualitativeRangesRaw);
   }
   validate(): boolean {
      var qualitativeRangesAny: any = JSON.parse(this.getQualitativeRangesRaw());
      var qualitativeRangesRaw: string;

      this.setValid(true);
      qualitativeRangesRaw = this.getQualitativeRangesRaw();
      if (qualitativeRangesRaw === null) {
         console.log(`QualitativeRanges:validate - qualitative ranges is null: ` + JSON.stringify(qualitativeRangesRaw));
         this.setValid(false);
      }
      else {
         qualitativeRangesAny = JSON.parse(qualitativeRangesRaw);
         if (qualitativeRangesAny.length == 0) {
             console.log(`QualitativeRanges:validate - qualitativeRanges array is empty`);
             this.setValid(false);
         }
         if (qualitativeRangesAny.length > 3) {
             console.log(`QualitativeRanges:validate - qualitativeRanges array has more than 3 qualitativeRanges`);
             this.setValid(false);
         }
         for (var i = 0; i < qualitativeRangesAny.length; i++) {
            let qualitativeRangeRaw: string = JSON.stringify(qualitativeRangesAny[i]);
            let qualitativeRange: QualitativeRange = new QualitativeRange(qualitativeRangeRaw)
            this.setValid(this.getValid() && qualitativeRange.validate());
         }
      }
      return this.getValid();
   }
   scaleToCanvas(): void {}
   sortQualitativeRangeHighLow(): Array<QualitativeRange> {
      // used to draw from the highest range to the lowest range
      var qrs: Array<QualitativeRange> = this.getQualitativeRanges();
      var sortedQrs: Array<QualitativeRange>;
      sortedQrs = qrs.sort(function (a: QualitativeRange, b: QualitativeRange) { return a.value<b.value ? 1 : a.value==b.value ? 0 : -1;});
      return sortedQrs;
   }
   sortQualitativeRangeLowHigh(): Array<QualitativeRange> {
      // used to show tooltips, we want to show the lowest range if the mouse is
      // between the left margin and its frontier with the second range that is
      // higher than the lower range
      var qrs: Array<QualitativeRange> = this.getQualitativeRanges();
      var sortedQrs: Array<QualitativeRange>;
      sortedQrs = qrs.sort(function (a: QualitativeRange, b: QualitativeRange) { return a.value<b.value ? -1 : a.value==b.value ? 0 : 1;});
      return sortedQrs;
   }
   computeTopValue(): number {
      let topValue = -1;
      var qualitativeRanges: Array<QualitativeRange> = this.getQualitativeRanges();
      for (var i = 0; i < qualitativeRanges.length; i++) {
         topValue =  qualitativeRanges[i].getValue() > topValue ? qualitativeRanges[i].getValue() : topValue;
      }
      return topValue;
   }
   buildCoordinateTip(): CoordinateTip {
      let coordinateTip: CoordinateTip;
      return coordinateTip;
   }
   draw(ctx: CanvasRenderingContext2D): void {
      for (let i = 0; i < this.qualitativeRanges.length; i++) {
         this.qualitativeRanges[i].draw(ctx);
      }
   }
}
