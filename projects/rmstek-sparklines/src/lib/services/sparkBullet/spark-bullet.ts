import { SparklineInterface} from '../sparkline-interface'
import { FeatureMeasure } from './featureMeasure';
import { ComparativeMeasure } from './comparativeMeasure';
import { QualitativeRange } from './qualitativeRange';

export class SparkBullet implements SparklineInterface{
   // featureMeasure: FeatureMeasure;
   // getFeatureMeasure(): FeatureMeasure { return this.featureMeasure; }
   // setFeatureMeasurew(value: FeatureMeasure): void { this.featureMeasure = value; }
   // comparativeMeasure: ComparativeMeasure
   // getComparativeMeasureRaw(): ComparativeMeasure { return this.comparativeMeasure; }
   // setComparativeMeasureRaw(value: ComparativeMeasure): void { this.comparativeMeasure = value; }
   // qualitativeRanges: Array<QualitativeRange>;
   // getQualitativeRangeeMeasure(): Array<QualitativeRange> { return this.qualitativeRanges; }
   // setQualitativeRangeMeasurew(value: Array<QualitativeRange>): void { this.qualitativeRanges = value; }
   //
   featureMeasureRaw: string;
   getFeatureMeasureRaw(): string { return this.featureMeasureRaw; }
   setFeatureMeasureRaw(value: string): void { this.featureMeasureRaw = value; }
   comparativeMeasureRaw: string;
   getComparativeMeasurRaw(): string { return this.comparativeMeasureRaw; }
   setComparativeMeasurRaw(value: string): void { this.comparativeMeasureRaw = value; }
   qualitativeRangesRaw: string;
   getQualitativeRangesRaw(): string { return this.qualitativeRangesRaw; }
   setQualitativeRangesRaw(value: string): void { this.qualitativeRangesRaw = value; }
   //
   // valid: boolean = false;

   // Raw Data is collected in the constructor
   constructor(featureMeasureRaw: string, comparativeMeasureRaw: string, qualitativeRangesRaw: string) {
      this.setFeatureMeasureRaw(featureMeasureRaw);
      this.setComparativeMeasurRaw(comparativeMeasureRaw);
      this.setQualitativeRangesRaw(qualitativeRangesRaw);
   }
   // validate(): void {}
   // prepare(): void {}
   // scale(): void {}
   // draw(): void {}
   // buildToolTips(): void {}
   // setToolTips(): void {}
   //
   // validateFeatureMeasureRaw(featureMeasureRaw: string): boolean {
   //    var valid: boolean;
   //    return valid;
   // }
   // validateComparativeMeasureRaw(featureMeasureRaw: string): boolean {
   //    var valid: boolean;
   //    return valid;
   // }
   // validateQualitativeRangesRaw(featureMeasureRaw: string): boolean {
   //    var valid: boolean;
   //    return valid;
   // }

}
