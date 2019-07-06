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
   className: string;
   getClassName(): string { return this.className; }
   setClassName(value: string): void { this.className = value; }
   comparativeMeasureRaw: string;
   getComparativeMeasurRaw(): string { return this.comparativeMeasureRaw; }
   setComparativeMeasurRaw(value: string): void { this.comparativeMeasureRaw = value; }
   featureMeasureRaw: string;
   getFeatureMeasureRaw(): string { return this.featureMeasureRaw; }
   setFeatureMeasureRaw(value: string): void { this.featureMeasureRaw = value; }
   height: number;
   getHeight(): number { return this.height; }
   setHeight(value: number): void { this.height = value; }
   qualitativeRangesRaw: string;
   getQualitativeRangesRaw(): string { return this.qualitativeRangesRaw; }
   setQualitativeRangesRaw(value: string): void { this.qualitativeRangesRaw = value; }
   Width: number;
   getWidth(): number { return this.Width; }
   setWidth(value: number): void { this.Width = value; }
   //
   // valid: boolean = false;

   // Raw Data is collected in the constructor
   constructor(className: string,
      comparativeMeasureRaw: string,
      featureMeasureRaw: string,
      height: number,
      qualitativeRangesRaw: string,
      width: number) {
      this.setClassName(className);
      this.setComparativeMeasurRaw(comparativeMeasureRaw);
      this.setFeatureMeasureRaw(featureMeasureRaw);
      this.setHeight(height);
      this.setQualitativeRangesRaw(qualitativeRangesRaw);
      this.setWidth(width);
   }
   validate(): void {}
   prepare(): void {}
   scale(): void {}
   draw(): void {}
   buildToolTips(): void {}
   setToolTips(): void {}
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
