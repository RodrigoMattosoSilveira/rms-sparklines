import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Md5 } from 'ts-md5/dist/md5';

import { SparkBarchartComponent } from './spark-barchart.component';
import '../services/arrayExtensions'

describe('SparkBarchartComponent', () => {
   let component: SparkBarchartComponent;
   let fixture: ComponentFixture<SparkBarchartComponent>;
   let compiledFixture: HTMLElement;
   let canvasEl: HTMLCanvasElement;
   let canvasCtx: CanvasRenderingContext2D;
   const DEFFAULT_SPARK_BARCHART_FINGERPRINT = "5ebb9c92870dfb5cbece87a6e613d2e0";

   beforeEach(async(() => {
      TestBed.configureTestingModule({
      declarations: [ SparkBarchartComponent ]
      })
      .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SparkBarchartComponent);
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

   it('should have the right properties', () => {
      expect(component.barGap).toBe(6);
      expect(component.barHeights).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
      expect(component.chartType).toBe('positive');
      expect(component.className).toBe('rms-spark-barchart');
      expect(component.fillColorMinus).toBe('red');
      // expect(component.fillColorPlus).toBe('blue');
      expect(component.fillColorZero).toBe('green');
      expect(component.height).toBe(32);
      expect(component.minimumBarWidth).toBe(3);
      expect(component.width).toBe(128);
   });
   it('should succeed drawing the canonical bar chart', () => {
      component.ngAfterViewInit();
      let imageData = canvasCtx.getImageData(0, 0, component.width, component.height)
      let figerPrint = Md5.hashStr(imageData.data.toString());
      expect(figerPrint).toBe(DEFFAULT_SPARK_BARCHART_FINGERPRINT);
   });
   it('should fail drawing the canonical bar chart with a wrong color', () => {
      component.fillColorPlus = 'red'
      component.ngAfterViewInit();
      let imageData = canvasCtx.getImageData(0, 0, component.width, component.height)
      let figerPrint = Md5.hashStr(imageData.data.toString());
      expect(figerPrint).not.toBe(DEFFAULT_SPARK_BARCHART_FINGERPRINT);
   });
});
