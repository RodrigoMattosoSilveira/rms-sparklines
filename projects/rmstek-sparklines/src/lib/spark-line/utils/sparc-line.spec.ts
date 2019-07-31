import { TestBed } from '@angular/core/testing';

import { SparkLine } from './spark-line';

describe(`SparkLine`, () => {
	var sparkLine: SparkLine;
	var canvasHeightRaw: string;
	var canvasWidthRaw: string;
   var decorationPointsRaw: string;
   var dotRadiusRaw: string;
   var lineColorsRaw: string;
   var linePointsRaw: string;
   var lineWidthRaw: string;
   var shadeColorRaw: string;

   describe(`should be`, () => {
      beforeEach(() => {
			canvasHeightRaw = `canvasHeightRaw`;
			canvasWidthRaw = `canvasWidthRaw`;
         decorationPointsRaw = `decorationPointsRaw`;
         dotRadiusRaw = `dotRadiusRaw`;
         lineColorsRaw = `lineColorsRaw`;
         linePointsRaw = `linePointsRaw`;
         lineWidthRaw = `lineWidthRaw`;
         shadeColorRaw = `shadeColorRaw`;
   		sparkLine = new SparkLine(canvasHeightRaw,
			 	canvasWidthRaw,
				decorationPointsRaw,
            dotRadiusRaw,
            lineColorsRaw,
            linePointsRaw,
            lineWidthRaw,
            shadeColorRaw
          );
   	});
      it(`created`, () => {
         expect(sparkLine).toBeTruthy();
      });
      it(`initialized correctly`, () => {
         expect(sparkLine.getDecorationPointsRaw()).toBeTruthy(`decorationPointsRaw`);
         expect(sparkLine.getDotRadiusRaw()).toBe(`dotRadiusRaw`);
         expect(sparkLine.getCanvasHeightRaw()).toBe(`canvasHeightRaw`);
         expect(sparkLine.getLineColorRaw()).toBe(`lineColorsRaw`);
         expect(sparkLine.getLinePointsRaw()).toBe(`linePointsRaw`);
         expect(sparkLine.getLineWidthRaw()).toBe(`lineWidthRaw`);
         expect(sparkLine.getShadeColorRaw()).toBe(`shadeColorRaw`);
         expect(sparkLine.getCanvasWidthRaw()).toBe(`canvasWidthRaw`);
      });
   });
});
