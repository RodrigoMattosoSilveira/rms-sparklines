import { TestBed } from '@angular/core/testing';

import { SparkLine } from './spark-Line';

describe(`SparkLine`, () => {
	var sparkLine: SparkLine;

	var comparativeMeasureRaw: string;
   var featureMeasureRaw: string;
   var height: number;
	var heightRaw: string;
	var qualitativeRangesRaw: string;
   var width: number;
	var widthRaw: string;

	beforeEach(() => {
		sparkLine = new SparkLine();
	});

   it(`should be created`, () => {
      expect(sparkLine).toBeTruthy();
   });
});
