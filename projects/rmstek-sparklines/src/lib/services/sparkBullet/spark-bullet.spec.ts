import { TestBed } from '@angular/core/testing';

import { ComparativeMeasure } from './comparative-measure';
import { FeatureMeasure } from './feature-measure';
import { QualitativeRange } from './qualitative-range';
import { QualitativeRanges } from './qualitative-ranges';

import { SparkBullet } from './spark-bullet';

describe(`SparkBullet`, () => {
	var sparkBullet: SparkBullet;

   var comparativeMeasure: ComparativeMeasure;
	var comparativeMeasureRaw: string;
   var featureMeasureRaw: string;
	var featureMeasure: FeatureMeasure;
   var height: number;
	var heightRaw: string;
	var qualitativeRanges: QualitativeRanges;
	var qualitativeRangesRaw: string;
   var width: number;
	var widthRaw: string;

	beforeEach(() => {
		featureMeasureRaw = JSON.stringify({'value': 35, 'color': 'black'});;
		comparativeMeasureRaw = JSON.stringify({'value': 57, 'color': 'black', 'lineWidth': 3});;
		heightRaw = `32`;
		qualitativeRangesRaw = JSON.stringify([{'value': 60, 'color': '#FF7F50'}, {'value': 50, 'color': '#FF6347'}, {'value': 35, 'color': '#FF4500'}]);
		widthRaw= `128`;
		sparkBullet = new SparkBullet(comparativeMeasureRaw, featureMeasureRaw, heightRaw, qualitativeRangesRaw, widthRaw);
	});

   it(`should be created`, () => {
      sparkBullet = new SparkBullet(``, ``, '', ``, ``);
      expect(sparkBullet).toBeTruthy();
   });
	describe(`constructor method`, () => {
		beforeEach(() => {
			sparkBullet = new SparkBullet(comparativeMeasureRaw, featureMeasureRaw, heightRaw, qualitativeRangesRaw, widthRaw);
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
	describe(`when validating`, () => {
		describe(`a valid`, () => {
			beforeEach(() => {
				sparkBullet = new SparkBullet(comparativeMeasureRaw, featureMeasureRaw, heightRaw, qualitativeRangesRaw, widthRaw);
			});
			describe(`height`, () => {
			});
			describe(`width`, () => {
			});
		});
		describe(`an invalid`, () => {
			describe(`height it catches`, () => {
				it('a non-numeric height', () => {
					heightRaw = `32`;
					sparkBullet = new SparkBullet(comparativeMeasureRaw, featureMeasureRaw, heightRaw, qualitativeRangesRaw, widthRaw);
	            expect(sparkBullet.validateHeightRaw()).toBe(false);
	         });
			});
			describe(`width it catches`, () => {
				it('a non-numeric value', () => {
					widthRaw = `32`;
					sparkBullet = new SparkBullet(comparativeMeasureRaw, featureMeasureRaw, heightRaw, qualitativeRangesRaw, widthRaw);
	            expect(sparkBullet.validateWidthtRaw()).toBe(false);
	         });
			});
		});
	});
});
