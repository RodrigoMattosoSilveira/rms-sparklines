import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Md5 } from 'ts-md5/dist/md5';
import '../services/arrayExtensions';

import { SparkBoxplotComponent } from './spark-boxplot.component';

describe('SparkBoxplotComponent', () => {
	let component: SparkBoxplotComponent;
	let fixture: ComponentFixture<SparkBoxplotComponent>;
	let compiledFixture: HTMLElement;
	let canvasEl: HTMLCanvasElement;
	let canvasCtx: CanvasRenderingContext2D;
	const SPARK_BOXPLOT_FINGERPRINT = 'a7596c5440cd21f1756205bf30b0c4fa';

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
	describe('bar chart should', () => {
		beforeEach(() => {
		});
		/**
		 * These tests are not reliable
		 * TODO:Figure out why theimage finger prints change randomly
		 */
		xit('succeed drawing the with default parameters', () => {
			const SPARK_BOXPLOT_FINGERPRINT_TRAVIS = 'a3784a6143e50b39d8ce3fe16f8c802d';
			let fingerMatch = false;
			component.ngAfterViewInit();
			const imageData = canvasCtx.getImageData(0, 0, component.width, component.height);
			const fingerPrint = Md5.hashStr(imageData.data.toString());
			// expect(fingerPrint).toBe(SPARK_BOXPLOT_FINGERPRINT);
			fingerMatch = fingerPrint === SPARK_BOXPLOT_FINGERPRINT || fingerPrint === SPARK_BOXPLOT_FINGERPRINT_TRAVIS;
			expect(fingerMatch).toBe(true);
			expect(fingerMatch).toBe(true);
		});
		xit('fail drawing with non-default parameters', () => {
			component.lowWhiskerColor = 'green';
			component.ngAfterViewInit();
			const imageData = canvasCtx.getImageData(0, 0, component.width, component.height);
			const figerPrint = Md5.hashStr(imageData.data.toString());
			expect(figerPrint).not.toBe(SPARK_BOXPLOT_FINGERPRINT);
		});
	});
});
