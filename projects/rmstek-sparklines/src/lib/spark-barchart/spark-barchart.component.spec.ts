import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Md5 } from 'ts-md5/dist/md5';

import { SparkBarchartComponent } from './spark-barchart.component';
import '../services/arrayExtensions';

describe('SparkBarchartComponent', () => {
    let component: SparkBarchartComponent;
    let fixture: ComponentFixture<SparkBarchartComponent>;
    let compiledFixture: HTMLElement;
    let canvasEl: HTMLCanvasElement;
    let canvasCtx: CanvasRenderingContext2D;
    const POSITIVE_SPARK_BARCHART_FINGERPRINT = '86cca0d26692a1d84172ec38a60fa224';
    const NEGATIVE_SPARK_BARCHART_FINGERPRINT = 'a6655396e2dc149d298f77a5cfd46e0c';
    const TRI_SPARK_BARCHART_FINGERPRINT = 'e206706980f9d282aa06eb514593497e';
    const DUAL_SPARK_BARCHART_FINGERPRINT = '32611f7fdc0762c426f340da6b41c6bf';

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
        compiledFixture = fixture.debugElement.nativeElement;
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
        expect(component.className).toBe('rmstek-spark-barchart');
        expect(component.fillColorMinus).toBe('red');
        expect(component.fillColorPlus).toBe('blue');
        expect(component.fillColorZero).toBe('green');
        expect(component.height).toBe(32);
        expect(component.minimumBarWidth).toBe(3);
        expect(component.width).toBe(128);
    });
    describe('Positive bar chart should', () => {
        it('succeed drawing the with default parameters', () => {
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.width, component.height);
            const figerPrint = Md5.hashStr(imageData.data.toString());
            expect(figerPrint).toBe(POSITIVE_SPARK_BARCHART_FINGERPRINT);
        });
        it('fail drawing with non-default parameters', () => {
            component.fillColorPlus = 'red';
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.width, component.height);
            const figerPrint = Md5.hashStr(imageData.data.toString());
            expect(figerPrint).not.toBe(POSITIVE_SPARK_BARCHART_FINGERPRINT);
        });
    });
    describe('Negative bar chart should', () => {
        beforeEach(() => {
            component.barHeights = JSON.stringify([-4, 3, -7, -8, -1, 1, 3, -2, -5, 3, -5, 8]);
            component.chartType = 'negative';
        });
        it('succeed drawing the with default parameters', () => {
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.width, component.height);
            const figerPrint = Md5.hashStr(imageData.data.toString());
            expect(figerPrint).toBe(NEGATIVE_SPARK_BARCHART_FINGERPRINT);
        });
        it('fail drawing with non-default parameters', () => {
            component.fillColorMinus = 'green';
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.width, component.height);
            const figerPrint = Md5.hashStr(imageData.data.toString());
            expect(figerPrint).not.toBe(NEGATIVE_SPARK_BARCHART_FINGERPRINT);
        });
    });
    describe('Tri bar chart should', () => {
        beforeEach(() => {
            component.barHeights = JSON.stringify([-4, 3, 0, -8, -1, 1, 3, 0, -5, 0, -5, 8]);
            component.chartType = 'tri';
        });
        it('succeed drawing the with default parameters', () => {
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.width, component.height);
            const figerPrint = Md5.hashStr(imageData.data.toString());
            expect(figerPrint).toBe(TRI_SPARK_BARCHART_FINGERPRINT );
        });
        it('fail drawing with non-default parameters', () => {
            component.fillColorMinus = 'green';
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.width, component.height);
            const figerPrint = Md5.hashStr(imageData.data.toString());
            expect(figerPrint).not.toBe(TRI_SPARK_BARCHART_FINGERPRINT );
        });
    });
    describe('Dual bar chart should', () => {
        beforeEach(() => {
            component.barHeights = JSON.stringify([-4, 3, -7, -8, -1, 1, 3, -2, -5, 3, -5, 8]);
            component.chartType = 'dual';
        });
        it('succeed drawing the with default parameters', () => {
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.width, component.height);
            const figerPrint = Md5.hashStr(imageData.data.toString());
            expect(figerPrint).toBe(DUAL_SPARK_BARCHART_FINGERPRINT);
        });
        it('fail drawing with non-default parameters', () => {
            component.fillColorMinus = 'green';
            component.ngAfterViewInit();
            const imageData = canvasCtx.getImageData(0, 0, component.width, component.height);
            const figerPrint = Md5.hashStr(imageData.data.toString());
            expect(figerPrint).not.toBe(DUAL_SPARK_BARCHART_FINGERPRINT);
        });
    });
});
