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
   const SPARK_BULLET_FINGERPRINT = "";

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
      expect(canvasEl.height).toBe(64);
   });
});
