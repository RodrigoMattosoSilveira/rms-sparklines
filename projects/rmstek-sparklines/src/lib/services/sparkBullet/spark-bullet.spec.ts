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
			describe(`comparativeMeasureRaw`, () => {
				describe(`scales them correctly `, () => {
					it(`horizontally`, () => {
			         expect(false).toEqual(true);
					});
					it(`vertically`, () => {
			         expect(false).toEqual(true);
					});
				});
			});
			describe(`featureMeasureRaw`, () => {
				describe(`scaler them correctly `, () => {
					it(`horizontally`, () => {
			         expect(false).toEqual(true);
					});
					it(`vertically`, () => {
			         expect(false).toEqual(true);
					});
				});
			});
			describe(`height`, () => {
			});
			describe(`qualitativeRangesRaw`, () => {
				it(`calculates top value correctly`, () => {
		         expect(false).toEqual(true);
				});
				describe(`short them correctly `, () => {
					it(`ascendently`, () => {
			         expect(false).toEqual(true);
					});
					it(`descendently`, () => {
			         expect(false).toEqual(true);
					});
				});
				describe(`scaler them correctly `, () => {
					it(`horizontally`, () => {
			         expect(false).toEqual(true);
					});
					it(`vertically`, () => {
			         expect(false).toEqual(true);
					});
				});
			});
			describe(`width`, () => {
			});
		});
		describe(`an invalid`, () => {
			describe(`comparativeMeasureRaw it catches`, () => {
				var comparativeMeasureRawBad: string;
				it('a missing an attribute', () => {
					comparativeMeasureRawBad = JSON.stringify({'value': 57, 'color': 'black'});
					comparativeMeasure = new ComparativeMeasure(comparativeMeasureRawBad);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
	         it('an extra an attribute', () => {
					comparativeMeasureRawBad = JSON.stringify({'value': 57, 'color': 'black', 'lineWidth': 3, 'extraAttribute': 3});
					comparativeMeasure = new ComparativeMeasure(comparativeMeasureRawBad);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
	         it('an invalid attribute key', () => {
					comparativeMeasureRawBad = JSON.stringify({'value': 57, 'color': 'black', 'lineWidthhh': 3});
					comparativeMeasure = new ComparativeMeasure(comparativeMeasureRawBad);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
	         it('a non non numeric value', () => {
					comparativeMeasureRawBad = JSON.stringify({'value': '5A', 'color': 'black', 'lineWidth': 3});
					comparativeMeasure = new ComparativeMeasure(comparativeMeasureRawBad);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
	         it('an invalid color', () => {
					comparativeMeasureRawBad = JSON.stringify({'value': 57, 'color': '#80808G', 'lineWidth': 3});
					comparativeMeasure = new ComparativeMeasure(comparativeMeasureRawBad);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
			});
			describe(`featureMeasureRaw it catches`, () => {
				var featrueMeasureRawBad: string;
				it('a missing an attribute', () => {
					featrueMeasureRawBad = JSON.stringify({'value': 57});
					featureMeasure = new FeatureMeasure(featrueMeasureRawBad);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
	         it('an extra an attribute', () => {
					featrueMeasureRawBad = JSON.stringify({'value': 57, 'color': 'black', 'extra': 3});
					featureMeasure = new FeatureMeasure(featrueMeasureRawBad);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
	         it('an invalid attribute key', () => {
					featrueMeasureRawBad = JSON.stringify({'value': 57, 'colorrr': 'black'});
					featureMeasure = new FeatureMeasure(featrueMeasureRawBad);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
	         it('a non non numeric value', () => {
					featrueMeasureRawBad = JSON.stringify({'value': '5A', 'color': 'black'});
					featureMeasure = new FeatureMeasure(featrueMeasureRawBad);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
	         it('an invalid color', () => {
					featrueMeasureRawBad = JSON.stringify({'value': 57, 'color': '#80808G'});
					featureMeasure = new FeatureMeasure(featrueMeasureRawBad);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
			});
			describe(`height it catches`, () => {
				it('a non-numeric height', () => {
					heightRaw = `32`;
					sparkBullet = new SparkBullet(comparativeMeasureRaw, featureMeasureRaw, heightRaw, qualitativeRangesRaw, widthRaw);
	            expect(sparkBullet.validateHeightRaw()).toBe(false);
	         });
			});
			describe(`qualitativeRangesRaw it catches`, () => {
				var qualitativeRangesRawBad: string;
				it('a missing attribute', () => {
					qualitativeRangesRawBad = JSON.stringify([{'value': 35, 'color': '#808080'}, {'value': 50, 'color': '#808080', 'badKey': 'badKey'}, {'value': 60}]);
					qualitativeRanges = new QualitativeRanges(qualitativeRangesRawBad);
	            expect(qualitativeRanges.validate()).toBe(false);
	            expect(qualitativeRanges.validate()).toBe(false);
	         });
	         it('When containng an extra an attribute', () => {
					qualitativeRangesRawBad = JSON.stringify([{'value': 35, 'color': '#808080'}, {'value': 50, 'color': '#808080', 'badKey': 'badKey'}, {'value': 60, 'color': '#E0E0E0'}]);
					qualitativeRanges = new QualitativeRanges(qualitativeRangesRawBad);
	            expect(qualitativeRanges.validate()).toBe(false);
	         });
	         it('When having an invalid attribute key', () => {
					qualitativeRangesRawBad = JSON.stringify([{'value': 35, 'color': '#808080'}, {'value': 50, 'color': '#808080'}, {'values': 60, 'colors': '#E0E0E0'}]);
					qualitativeRanges = new QualitativeRanges(qualitativeRangesRawBad);
	            expect(qualitativeRanges.validate()).toBe(false);
	         });
	         it('When having an non numeric value', () => {
					qualitativeRangesRawBad = JSON.stringify([{'value': '3A', 'color': '#808080'}, {'value': 50, 'color': '#808080', 'badKey': 'badKey'}, {'values': 60, 'color': '#E0E0E0'}]);
					qualitativeRanges = new QualitativeRanges(qualitativeRangesRawBad);
	            expect(qualitativeRanges.validate()).toBe(false);
	         });
	         it('When having an invalid color', () => {
					qualitativeRangesRawBad = JSON.stringify([{'value': '35', 'color': '#80808X'}, {'value': 50, 'color': '#808080', 'badKey': 'badKey'}, {'values': 60, 'color': '#E0E0E0'}]);
					qualitativeRanges = new QualitativeRanges(qualitativeRangesRawBad);
	            expect(qualitativeRanges.validate()).toBe(false);
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
