import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Md5 } from 'ts-md5/dist/md5';
import '../services/arrayExtensions'

import { SparkBoxplotComponent } from './spark-boxplot.component';

describe('SparkBoxplotComponent', () => {
   let component: SparkBoxplotComponent;
   let fixture: ComponentFixture<SparkBoxplotComponent>;
   let compiledFixture: HTMLElement;
   let canvasEl: HTMLCanvasElement;
   let canvasCtx: CanvasRenderingContext2D;
   const SPARK_BOXPLOT_FINGERPRINT = "a3784a6143e50b39d8ce3fe16f8c802d";

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ SparkBoxplotComponent ]
   })
   .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SparkBoxplotComponent);
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
         expect(figerPrint).toBe(SPARK_BOXPLOT_FINGERPRINT);
      });
      it('fail drawing with default parameters', () => {
         component.lowWhiskerColor = 'green';
         component.ngAfterViewInit();
         let imageData = canvasCtx.getImageData(0, 0, component.width, component.height)
         let figerPrint = Md5.hashStr(imageData.data.toString());
         expect(figerPrint).not.toBe(SPARK_BOXPLOT_FINGERPRINT);
      });
   });
});
