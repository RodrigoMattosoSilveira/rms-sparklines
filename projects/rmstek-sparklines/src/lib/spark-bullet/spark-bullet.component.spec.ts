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
   const SPARK_BULLET_FINGERPRINT_HORIZONTAL_A = "ec3765046042f44e47e5bc58ebd9c836";

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
     canvasEl = fixture.nativeElement.querySelector('canvas');
     compiledFixture = fixture.debugElement.nativeElement
     canvasCtx = component.ctx;
  });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should be canvas', () => {
      expect(canvasEl).toBeTruthy();
      expect(canvasEl.tagName).toBe('CANVAS');
      expect(canvasEl.width).toBe(128);
      expect(canvasEl.height).toBe(32);
   });
   describe('bar chart should', () => {
     beforeEach(() => {
     });
     it('succeed drawing the with default parameters', () => {
         component.ngAfterViewInit();
         let imageData = canvasCtx.getImageData(0, 0, component.width, component.height)
         let figerPrint = Md5.hashStr(imageData.data.toString());
         expect(figerPrint).toBe(SPARK_BULLET_FINGERPRINT_HORIZONTAL_A);
      });
      it('fail drawing with non-default parameters', () => {
         component.featureMeasure = JSON.stringify({'value': 35, 'color': 'blue'});
         component.ngAfterViewInit();
         let imageData = canvasCtx.getImageData(0, 0, component.width, component.height)
         let figerPrint = Md5.hashStr(imageData.data.toString());
         expect(figerPrint).not.toBe(SPARK_BULLET_FINGERPRINT_HORIZONTAL_A);
      });
   });
});
