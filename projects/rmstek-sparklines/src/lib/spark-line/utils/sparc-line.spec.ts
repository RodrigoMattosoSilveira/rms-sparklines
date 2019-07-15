import { TestBed } from '@angular/core/testing';

import { SparkLine } from './spark-Line';

describe(`SparkLine`, () => {
	var sparkLine: SparkLine;
   var decorationPointsRaw: string;
   var dotRadiusRaw: string;
   var heightRaw: string;
   var lineColorsRaw: string;
   var linePointsRaw: string;
   var lineWidthRaw: string;
   var shadeColorRaw: string;
   var widthRaw: string;

   describe(`should be`, () => {
      beforeEach(() => {
         decorationPointsRaw = `decorationPointsRaw`;
         dotRadiusRaw = `dotRadiusRaw`;
         heightRaw = `heightRaw`;
         lineColorsRaw = `lineColorsRaw`;
         linePointsRaw = `linePointsRaw`;
         lineWidthRaw = `lineWidthRaw`;
         shadeColorRaw = `shadeColorRaw`;
         widthRaw = `widthRaw`;
   		sparkLine = new SparkLine(decorationPointsRaw,
            dotRadiusRaw,
            heightRaw,
            lineColorsRaw,
            linePointsRaw,
            lineWidthRaw,
            shadeColorRaw,
            widthRaw
          );
   	});
      it(`created`, () => {
         expect(sparkLine).toBeTruthy();
      });
      it(`initialized correctlyh`, () => {
         expect(sparkLine.getDecorationPointsRaw()).toBeTruthy(`decorationPointsRaw`);
         expect(sparkLine.getDotRadiusRaw()).toBe(`dotRadiusRaw`);
         expect(sparkLine.getHeightRaw()).toBe(`heightRaw`);
         expect(sparkLine.getLineColorRaw()).toBe(`lineColorsRaw`);
         expect(sparkLine.getLinePointsRaw()).toBe(`linePointsRaw`);
         expect(sparkLine.getLineWidthRaw()).toBe(`lineWidthRaw`);
         expect(sparkLine.getShadeColorRaw()).toBe(`shadeColorRaw`);
         expect(sparkLine.getWidthRaw()).toBe(`widthRaw`);
      });
   });
});
