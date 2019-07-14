import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Md5 } from 'ts-md5/dist/md5';
import '../services/arrayExtensions'

import { SparkBulletComponent } from './spark-bullet.component';

describe('SparkBulletComponent', () => {
   let component: SparkBulletComponent;
   let fixture: ComponentFixture<SparkBulletComponent>;
   let compiledFixture: HTMLElement;
   let canvasEl: HTMLCanvasElement;
   let canvasCtx: CanvasRenderingContext2D;
   const SPARK_BULLET_FINGERPRINT_HORIZONTAL_A = "321a7ddf835030527ea013da0b54649a";

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ SparkBulletComponent ]
      })
      .compileComponents();
   }));

  beforeEach(() => {
     fixture = TestBed.createComponent(SparkBulletComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
     compiledFixture = fixture.debugElement.nativeElement
     canvasEl = fixture.nativeElement.querySelector('canvas');
     canvasCtx = canvasEl.getContext('2d');
  });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should be canvas', () => {
      expect(canvasEl).toBeTruthy();
      expect(canvasEl.tagName).toBe('CANVAS');
      expect(canvasEl.width).toBe(128);
      expect(canvasEl.height).toBe(64);
   });
   describe('chart should', () => {
     beforeEach(() => {
     });
     it('succeed drawing the with default parameters', () => {
         component.ngAfterViewInit();
         let imageData = canvasCtx.getImageData(0, 0, canvasEl.width, canvasEl.height)
         let figerPrint = Md5.hashStr(imageData.data.toString());
         expect(figerPrint).toBe(SPARK_BULLET_FINGERPRINT_HORIZONTAL_A);
      });
      it('fail drawing with non-default parameters', () => {
         component.featureMeasure = JSON.stringify({'value': 35, 'color': 'blue'});
         component.ngAfterViewInit();
         let imageData = canvasCtx.getImageData(0, 0, canvasEl.width, canvasEl.height)
         let figerPrint = Md5.hashStr(imageData.data.toString());
         expect(figerPrint).not.toBe(SPARK_BULLET_FINGERPRINT_HORIZONTAL_A);
      });
   });
});
