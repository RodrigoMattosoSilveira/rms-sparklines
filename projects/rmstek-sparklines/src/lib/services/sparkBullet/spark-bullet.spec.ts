import { TestBed } from '@angular/core/testing';

import { ComparativeMeasure } from './comparativeMeasure';
import { FeatureMeasure } from './featureMeasure';
import { QualitativeRange } from './qualitativeRange';

import { SparkBullet } from './spark-bullet';

describe(`SparkBullet`, () => {
	var sparkBullet: SparkBullet;

   var className: string;
   var comparativeMeasureRaw: string;
   var featureMeasureRaw: string;
   var height: number;
	var qualitativeRangesRaw: string;
   var width: number;

   it(`should be created`, () => {
      sparkBullet = new SparkBullet(``, ``, ``, 0, ``, 0);
      expect(sparkBullet).toBeTruthy();
   });
	describe(`constructor method`, () => {
    	beforeEach(() => {
         className = `a_class`;
         featureMeasureRaw = JSON.stringify({'value': 35, 'color': 'black'});;
         comparativeMeasureRaw = JSON.stringify({'value': 57, 'color': 'black', 'lineWidth': 3});;
         height = 32;
         qualitativeRangesRaw = JSON.stringify([{'value': 60, 'color': '#FF7F50'}, {'value': 50, 'color': '#FF6347'}, {'value': 35, 'color': '#FF4500'}]);
         width = 128;
         sparkBullet = new SparkBullet(className, comparativeMeasureRaw, featureMeasureRaw, height, qualitativeRangesRaw, width);
		});
      it(`sets className correctly`, () => {
         expect(sparkBullet.getClassName()).toEqual(className);
		});
      it(`sets comparativeMeasureRaw correctly`, () => {
         expect(sparkBullet.getComparativeMeasurRaw()).toEqual(comparativeMeasureRaw);
		});
		it(`sets featureMeasureRaw correctly`, () => {
         expect(sparkBullet.getFeatureMeasureRaw()).toEqual(featureMeasureRaw);
		});
      it(`sets height correctly`, () => {
         expect(sparkBullet.getHeight()).toEqual(height);
		});
      it(`sets qualitativeRangesRaw correctly`, () => {
         expect(sparkBullet.getQualitativeRangesRaw()).toEqual(qualitativeRangesRaw);
		});
      it(`sets width correctly`, () => {
         expect(sparkBullet.getWidth()).toEqual(width);
		});
	});
});
