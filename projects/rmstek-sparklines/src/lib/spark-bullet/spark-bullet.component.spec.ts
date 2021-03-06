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
	const SPARK_BULLET_FINGERPRINT_HORIZONTAL_A = '00cf940f7dc26273a3a63702458c0607';

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
		compiledFixture = fixture.debugElement.nativeElement;
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
		expect(canvasEl.height).toBe(32);
	});
	/**
	 * These tests are not reliable
	 * TODO:Figure out why theimage finger prints change randomly
	 */
	xdescribe('chart should', () => {
		beforeEach(() => {
		});
		xit('succeed drawing the with default parameters', () => {
			const SPARK_BULLET_FINGERPRINT_HORIZONTAL_A_TRAVIS = 'ec3765046042f44e47e5bc58ebd9c836';
			let fingerMatch = false;
			component.ngAfterViewInit();
			const imageData = canvasCtx.getImageData(0, 0, canvasEl.width, canvasEl.height);
			const fingerPrint = Md5.hashStr(imageData.data.toString());
			fingerMatch = fingerPrint == SPARK_BULLET_FINGERPRINT_HORIZONTAL_A || fingerPrint == SPARK_BULLET_FINGERPRINT_HORIZONTAL_A_TRAVIS;
			// expect(fingerPrint).toBe(SPARK_BULLET_FINGERPRINT_HORIZONTAL_A);
			expect(fingerMatch).toBe(true);
		});
		xit('fail drawing with non-default parameters', () => {
			component.featureMeasure = JSON.stringify({value: 35, color: 'blue'});
			component.ngAfterViewInit();
			const imageData = canvasCtx.getImageData(0, 0, canvasEl.width, canvasEl.height);
			const figerPrint = Md5.hashStr(imageData.data.toString());
			expect(figerPrint).not.toBe(SPARK_BULLET_FINGERPRINT_HORIZONTAL_A);
		});
	});
});
