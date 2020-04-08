import { SparklineInterface} from '../../utils/sparkline-interface';
import { BarChartType } from './bar-chart-type';
import { BarGap } from './bar-gap';
import { BarHeights } from './bar-heights';
import { CanvasHeight } from '../../utils/canvas-height';
import { CanvasWidth } from '../../utils/canvas-width';
import { CssClassName } from '../../utils/css-class-name';
import { FillColorMinus} from './fill-color-minus';
import { FillColorPlus} from './fill-color-plus';
import { FillColorZero} from './fill-color-zero';
import { MinimumBarWidth } from './minimum-bar-width';

export class SparkBarchart implements SparklineInterface {
  private barChartType: BarChartType;
  private barGap: BarGap;
  private barHeights: BarHeights;
  private canvasHeight: CanvasHeight;
  private canvasWidth: CanvasWidth;
  private className: CssClassName;
  private fillColorMinus: FillColorMinus;
  private fillColorPlus: FillColorPlus;
  private fillColorZero: FillColorZero;
  private minimumBarWidth: MinimumBarWidth;

  constructor(
      private barChartTypeRaw: string,
      private barGapRaw: string,
      private barHeightsRaw: string,
      private canvasHeightRaw: string,
      private canvasWidthRaw: string,
      private classNameRaw: string,
      private fillColorMinusRaw: string,
      private fillColorPlusRaw: string,
      private fillColorZeroRaw: string,
      private minimumBarWidthRaw: string
  ) {}

  /**
   Vaildate the arguments and set them up for processing;
   */
  validate(): boolean {
    let valid = true;

    this.barChartType = new BarChartType(this.barChartTypeRaw);
    valid = valid &&   this.barChartType.validate();

    this.barHeights = new BarHeights(this.barHeightsRaw);
    valid = valid && this.barHeights.validate(`BarHeights`);

    this.barGap = new BarGap(this.barGapRaw);
    valid = valid && this.barGap.validate(`BarGap`);

    this.canvasHeight = new CanvasHeight(this.canvasHeightRaw);
    valid = valid && this.canvasHeight.validate(`CanvasHeight`);

    this.canvasWidth = new CanvasWidth(this.canvasWidthRaw);
    valid = valid &&   this.canvasWidth.validate(`CanvasWidth`);

    this.className = new CssClassName(this.classNameRaw);
    valid = valid &&   this.className.validate(`CssClassName`);

    this.fillColorMinus = new FillColorMinus(this.fillColorMinusRaw);
    valid = valid &&   this.fillColorMinus.validate(`FillColorMinus`);

    this.fillColorPlus = new FillColorMinus(this.fillColorPlusRaw);
    valid = valid &&   this.fillColorPlus.validate(`FillColorPlus`);

    this.fillColorZero = new FillColorMinus(this.fillColorZeroRaw);
    valid = valid &&   this.fillColorZero.validate(`fillColorZero`);

    this.minimumBarWidth = new MinimumBarWidth(this.minimumBarWidthRaw);
    valid = valid &&   this.minimumBarWidth.validate(`MinimumBarWidth`);

    return valid;
  }

  /**
   Use the arguments to build the sparkline in world coordinates
   */
  prepare(canvasEl?: HTMLCanvasElement): void {};

  /**
   Scale the sparkline's world coordinsates to canvas coordinates
   */
  scale(canvasEl: HTMLCanvasElement): void {};

  /**
   Draw the sparkline
   */
  draw(canvasEl: HTMLCanvasElement): void {};

  /**
   Set up the tooltip handling
   */
  showToolTips(canvasEl: HTMLCanvasElement): void {};
}
