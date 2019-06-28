import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Md5 } from 'ts-md5/dist/md5';

import { SparkLineComponent } from './spark-line.component';

describe('SparkLineComponent', () => {
   let component: SparkLineComponent;
   let fixture: ComponentFixture<SparkLineComponent>;
   let compiledFixture: HTMLElement;
   let canvasEl: HTMLCanvasElement;
   let canvasCtx: CanvasRenderingContext2D;
   const SIMPLE_SPARK_LINE_FINGERPRINT = "0914e53b2bb3d5e38d22abb6c225c11d";
   const DECORATED_SPARK_LINE_FINGERPRINT = "d782f29e5609c93512c65e84e3b38d95";
   const SHADED_SPARK_LINE_FINGERPRINT = "4b52dd1233b0b0b11d6361baa9d45581";

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ SparkLineComponent ]
      })
      .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SparkLineComponent);
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
      expect(canvasEl.height).toBe(64);
   });
   describe('Simple line chart should', () => {
      beforeEach(() => {
            component.linePoints = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9]);
            component.decorationPoints = JSON.stringify([]);
            component.shadeColor = ``;
      });
      it('succeed drawing the with default parameters', () => {
          component.ngAfterViewInit();
          let imageData = canvasCtx.getImageData(0, 0, component.width, component.height)
          let figerPrint = Md5.hashStr(imageData.data.toString());
          expect(figerPrint).toBe(SIMPLE_SPARK_LINE_FINGERPRINT);
      });
      it('fail drawing with non-default parameters', () => {
          component.shadeColor = `green`;
          component.ngAfterViewInit();
          let imageData = canvasCtx.getImageData(0, 0, component.width, component.height)
          let figerPrint = Md5.hashStr(imageData.data.toString());
          expect(figerPrint).not.toBe(SIMPLE_SPARK_LINE_FINGERPRINT);
      });
    });
    describe('Decorated line chart should', () => {
      beforeEach(() => {
            component.linePoints = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9]);
            component.decorationPoints = JSON.stringify([{index: 0, color: 'red'}, {index: 11, color: 'black'}]);
            component.shadeColor = ``;
      });
      it('succeed drawing the with default parameters', () => {
          component.ngAfterViewInit();
          let imageData = canvasCtx.getImageData(0, 0, component.width, component.height)
          let figerPrint = Md5.hashStr(imageData.data.toString());
          expect(figerPrint).toBe(DECORATED_SPARK_LINE_FINGERPRINT);
      });
      it('fail drawing with non-default parameters', () => {
          component.shadeColor = `green`;
          component.ngAfterViewInit();
          let imageData = canvasCtx.getImageData(0, 0, component.width, component.height)
          let figerPrint = Md5.hashStr(imageData.data.toString());
          expect(figerPrint).not.toBe(DECORATED_SPARK_LINE_FINGERPRINT);
      });
    });
    describe('Decorated line chart should', () => {
      beforeEach(() => {
            component.linePoints = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9]);
            component.decorationPoints = JSON.stringify([{index: 0, color: 'red'}, {index: 11, color: 'black'}]);
            component.shadeColor = `LightBlue`;
      });
      it('succeed drawing the with default parameters', () => {
          component.ngAfterViewInit();
          let imageData = canvasCtx.getImageData(0, 0, component.width, component.height)
          let figerPrint = Md5.hashStr(imageData.data.toString());
          expect(figerPrint).toBe(SHADED_SPARK_LINE_FINGERPRINT);
      });
      it('fail drawing with non-default parameters', () => {
          component.shadeColor = `green`;
          component.ngAfterViewInit();
          let imageData = canvasCtx.getImageData(0, 0, component.width, component.height)
          let figerPrint = Md5.hashStr(imageData.data.toString());
          expect(figerPrint).not.toBe(SHADED_SPARK_LINE_FINGERPRINT);
      });
    });
});