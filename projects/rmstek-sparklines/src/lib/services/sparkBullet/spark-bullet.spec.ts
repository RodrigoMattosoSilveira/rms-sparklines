import { TestBed } from '@angular/core/testing';

import { ComparativeMeasure } from './comparativeMeasure';
import { FeatureMeasure } from './featureMeasure';
import { QualitativeRange } from './qualitativeRange';

import { SparkBullet } from './spark-bullet';

describe('SparkBullet', () => {
   var sparkBullet: SparkBullet = null;
   beforeEach(() => {
      TestBed.configureTestingModule({ providers: [SparkBullet]})
      sparkBullet = TestBed.get(new SparkBullet(``, ``, ``));
   });
   it('should be created', () => {
      expect(sparkBullet).toBeTruthy();
   });

});
