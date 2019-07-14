import { SparklineInterface} from '../../utils/sparkline-interface'
import { FeatureMeasure } from './feature-measure';
import { ComparativeMeasure } from './comparative-measure';
import { HelperMethods } from '../../utils/helper-methods';
import { QualitativeRanges } from './qualitative-ranges';
import { Tooltip } from '../../utils/tooltip';
import { TooltipService } from '../../utils/tooltip-service';



export class SparkBullet implements SparklineInterface{
   // raw arguments
   comparativeMeasureRaw: string;
   getComparativeMeasurRaw(): string { return this.comparativeMeasureRaw; }
   setComparativeMeasurRaw(value: string): void { this.comparativeMeasureRaw = value; }
   featureMeasureRaw: string;
   getFeatureMeasureRaw(): string { return this.featureMeasureRaw; }
   setFeatureMeasureRaw(value: string): void { this.featureMeasureRaw = value; }
   heightRaw: string;
   getHeightRaw(): string { return this.heightRaw; }
   setHeightRaw(value: string): void { this.heightRaw = value; }
   qualitativeRangesRaw: string;
   getQualitativeRangesRaw(): string { return this.qualitativeRangesRaw; }
   setQualitativeRangesRaw(value: string): void { this.qualitativeRangesRaw = value; }
   widthRaw: string;
   getWidthRaw(): string { return this.widthRaw; }
   setWidthRaw(value: string): void { this.widthRaw = value; }
   // validated objects
   className: string;
   getClassName(): string { return this.className; }
   setClassName(value: string): void { this.className = value; }
   featureMeasure: FeatureMeasure;
   getFeatureMeasure(): FeatureMeasure { return this.featureMeasure; }
   setFeatureMeasure(value: FeatureMeasure): void { this.featureMeasure = value; }
   comparativeMeasure: ComparativeMeasure
   getComparativeMeasure(): ComparativeMeasure { return this.comparativeMeasure; }
   setComparativeMeasure(value: ComparativeMeasure): void { this.comparativeMeasure = value; }
   height: number;
   getHeight(): number { return this.height; }
   setHeight(value: number): void { this.height = value; }
   qualitativeRanges: QualitativeRanges;
   getQualitativeRanges(): QualitativeRanges { return this.qualitativeRanges; }
   setQualitativeRanges(value: QualitativeRanges): void { this.qualitativeRanges = value; }
   tooltipId = `rms-spark-bulletchart-tooltip`;
   tooltips: Array<Tooltip>;
   getTooltips(): Array<Tooltip> { return this.tooltips; }
   setTooltips(value: Array<Tooltip>): void { this.tooltips = value; }
   topValue: number;
   getTopValue(): number { return this.topValue; }
   setTopValue(value: number): void { this.topValue = value; }
   valid: boolean;
   getValid(): boolean { return this.valid; }
   setValid(value: boolean) { this.valid = value; }
   width: number;
   getWidth(): number { return this.width; }
   setWidth(value: number): void { this.width = value; }

   // Raw Data is collected in the constructor
   constructor(comparativeMeasureRaw: string,
      featureMeasureRaw: string,
      heightRaw: string,
      qualitativeRangesRaw: string,
      widthRaw: string) {
      this.setComparativeMeasurRaw(comparativeMeasureRaw);
      this.setFeatureMeasureRaw(featureMeasureRaw);
      this.setHeightRaw(heightRaw);
      this.setQualitativeRangesRaw(qualitativeRangesRaw);
      this.setWidthRaw(widthRaw);
   }
   //
   // interface methods
   //
   validate(): boolean {
      this.setValid(true);
      this.valid = this.valid && this.validateComparativeMeasureRaw(this.comparativeMeasureRaw);
      this.valid = this.valid && this.validateFeatureMeasureRaw(this.featureMeasureRaw);
      this.valid = this.valid && this.validateHeightRaw();
      this.valid = this.valid && this.validateQualitativeRangesRaw();
      this.valid = this.valid && this.validateWidthtRaw();
      return this.valid;
   }
   prepare(): void {
      this.computeTopValue();
   }
   scale(canvasEl: HTMLCanvasElement): void {
      let orientation = HelperMethods.computeOrientation(canvasEl);
      let topValue: number = this.getTopValue();
      this.getQualitativeRanges().scaleToCanvas(canvasEl);
      this.getComparativeMeasure().scaleToCanvas(canvasEl, orientation, topValue);
      this.getFeatureMeasure().scaleToCanvas(canvasEl, orientation, topValue);
   }
   draw(canvasEl: HTMLCanvasElement): void {
      const ctx: CanvasRenderingContext2D = canvasEl.getContext('2d');
      this.getQualitativeRanges().draw(ctx);
      this.getComparativeMeasure().draw(ctx);
      this.getFeatureMeasure().draw(ctx);
   }
   showToolTips(canvasEl: HTMLCanvasElement): void {
      var tooltipService: TooltipService;

      this.buildToolTips(canvasEl);
      tooltipService = new TooltipService(canvasEl, this.getTooltips(), this.tooltipId)


      canvasEl.addEventListener('mousemove', function(event: any) {
         // console.log(`RmsSparklineInlineNew::addEventListener`);

         // Note that when this function is called, this points to the target element!
         // console.log(`SparkLineComponent:ngAfterViewInit - handling mousemove`);
         tooltipService.handleMouseMove(event);
      });

      canvasEl.addEventListener('mouseout', function() {
      // console.log(`RmsSparklineInlineNew::addEventListener`);
         tooltipService.handleMouseOut();
      });
   }
   //
   // Validation supporting methods
   //
   validateComparativeMeasureRaw(comparativeMeasureRaw: string): boolean {
      var comparativeMeasure: ComparativeMeasure = new  ComparativeMeasure(comparativeMeasureRaw);
      var valid: boolean = comparativeMeasure.validate();
      if (valid) {
         this.setComparativeMeasure(comparativeMeasure);
      }
      return valid;
   }
   validateFeatureMeasureRaw(featureMeasureRaw: string): boolean {
      var featureMeasure: FeatureMeasure = new  FeatureMeasure(featureMeasureRaw);
      var valid: boolean = featureMeasure.validate();
      if (valid) {
         this.setFeatureMeasure(featureMeasure);
      }
      return valid;
   }
   validateHeightRaw(): boolean {
      var valid: boolean = true;
      var heightRaw = this.getHeightRaw();
      let number = Number(this.getHeightRaw());
      if(isNaN(number)) {
         console.log(`SparkBullet:validate - height value is not a number: ` + JSON.stringify(heightRaw));
          valid = false;
      }
      else {
         this.setHeight(number);  // force it into a number if it is a valid numeric string
      }
      return valid;
   }
   validateQualitativeRangesRaw(): boolean {
      var qualitativeRanges: QualitativeRanges = new  QualitativeRanges(this.qualitativeRangesRaw);
      var valid: boolean = qualitativeRanges.validate();
      if (valid) {
         this.setQualitativeRanges(qualitativeRanges);
      }
      return valid;
   }
   validateWidthtRaw(): boolean {
      var valid: boolean = true;
      var widthRaw = this.getWidthRaw();
      let number = Number(this.getWidthRaw());
      if(isNaN(number)) {
         console.log(`SparkBullet:validate - width value is not a number: ` + JSON.stringify(widthRaw));
          valid = false;
      }
      else {
         this.setWidth(number);  // force it into a number if it is a valid numeric string
      }
      return valid;
   }
   // preparation methods
   computeTopValue() {
      this.setTopValue(this.getQualitativeRanges().computeTopValue());
   }
   //
   // tooltip methods
   //
   buildToolTips(canvasEl: HTMLCanvasElement): void {
      var tooltips: Array<Tooltip> = [];
      var qualityRangesTootips: Array<Tooltip>;
      const orientation: string = HelperMethods.computeOrientation(canvasEl);

      tooltips.push( this.getComparativeMeasure().buildtooltips(orientation));
      tooltips.push( this.getFeatureMeasure().buildtooltips());
      qualityRangesTootips = this.getQualitativeRanges().buildtooltips();
      for (let i = 0; i < qualityRangesTootips.length; i++) {
         tooltips.push(qualityRangesTootips[i]);
      }
      
      this.setTooltips(tooltips);

   }
}
