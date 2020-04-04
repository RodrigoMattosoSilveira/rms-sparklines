import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Md5 } from 'ts-md5/dist/md5';

import { SparkLineComponent } from './spark-line.component';

describe('SparkLineComponent', async() => {
    let component: SparkLineComponent;
    let fixture: ComponentFixture<SparkLineComponent>;
    let compiledFixture: HTMLElement;
    let canvasEl: HTMLCanvasElement;
    let canvasCtx: CanvasRenderingContext2D;
    const SIMPLE_SPARK_LINE_FINGERPRINT = '80e9a4ed2a8258fc7629a70eec3e09bc';
    const DECORATED_SPARK_LINE_FINGERPRINT = '80e9a4ed2a8258fc7629a70eec3e09bc';
    const SHADED_SPARK_LINE_FINGERPRINT = '6c4f44888141a88fba086d72481728fa';

    beforeEach(async(async() => {
        TestBed.configureTestingModule({
            declarations: [ SparkLineComponent ]
        })
      .compileComponents();
      fixture = TestBed.createComponent(SparkLineComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      canvasEl = fixture.nativeElement.querySelector('canvas');
      compiledFixture = fixture.debugElement.nativeElement;
      canvasCtx = canvasEl.getContext('2d');
    }));

    it('should create', async() => {
        expect(component).toBeTruthy();
    });

    it('should be canvas', async() => {
        expect(canvasEl).toBeTruthy();
        expect(canvasEl.tagName).toBe('CANVAS');
        expect(canvasEl.width).toBe(128);
        expect(canvasEl.height).toBe(32);
    });
    describe('Simple line chart should', () => {
        beforeEach(async() => {
        });
        it('succeed drawing with default parameters', async() => {
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.canvasWidth, component.canvasHeight);
            const figerPrint = Md5.hashStr(imageData.data.toString());
            expect(figerPrint).toBe(SIMPLE_SPARK_LINE_FINGERPRINT);
        });
        it('fail drawing with non-default parameters', async() => {
            component.shadeColor = `green`;
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.canvasWidth, component.canvasHeight);
            const figerPrint = Md5.hashStr(imageData.data.toString());
            expect(figerPrint).not.toBe(SIMPLE_SPARK_LINE_FINGERPRINT);
        });
    });
    describe('Decorated line chart should', async() => {
        beforeEach(async() => {
            // component.linePoints = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9]);
            component.decorationPoints = JSON.stringify([{index: 0, color: 'red'}, {index: 11, color: 'black'}]);
            component.shadeColor = ``;
        });
        it('succeed drawing with default parameters', async() => {
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.canvasWidth, component.canvasHeight);
            const figerPrint = Md5.hashStr(imageData.data.toString());
            expect(figerPrint).toBe(DECORATED_SPARK_LINE_FINGERPRINT);
        });
        it('fail drawing with non-default parameters', async() => {
            component.shadeColor = `green`;
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.canvasWidth, component.canvasHeight);
            const figerPrint = Md5.hashStr(imageData.data.toString());
            expect(figerPrint).not.toBe(DECORATED_SPARK_LINE_FINGERPRINT);
            });
        });
    describe('Shadded line chart should', async() => {
        beforeEach(async(() => {
            component.decorationPoints = JSON.stringify([{index: 0, color: 'red'}, {index: 11, color: 'black'}]);
            component.shadeColor = `LightBlue`;
        }));
        it('succeed drawing the with default parameters', async() => {
            const SHADED_SPARK_LINE_FINGERPRINT_TRAVIS = '1d9cfce01c8b8127d8fd95a15d9d3c1a';
            let fingerMatch = false;
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.canvasWidth, component.canvasHeight);
            const fingerPrint = Md5.hashStr(imageData.data.toString());
            fingerMatch = fingerPrint == SHADED_SPARK_LINE_FINGERPRINT || fingerPrint == SHADED_SPARK_LINE_FINGERPRINT_TRAVIS;
            // expect(fingerPrint).toBe(SHADED_SPARK_LINE_FINGERPRINT);
            expect(fingerMatch).toBe(true);
        });
        it('fail drawing with non-default parameters', async() => {
            component.shadeColor = `green`;
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.canvasWidth, component.canvasHeight);
            const figerPrint = Md5.hashStr(imageData.data.toString());
            expect(figerPrint).not.toBe(SHADED_SPARK_LINE_FINGERPRINT);
          });
        });
    });
