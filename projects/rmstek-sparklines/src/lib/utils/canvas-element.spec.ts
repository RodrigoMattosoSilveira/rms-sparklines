import { CanvasElement } from './canvas-element';
import { ElementRef } from '@angular/core';

describe(`CanvasElement`, () => {
  var testObj: CanvasElement;
  var valueRaw: ElementRef;
  describe(`when created`, () => {
    beforeEach(() => {
      valueRaw = null;
      testObj = new CanvasElement(valueRaw);
    });
    it(`is valid`, () => {
      expect(testObj).toBeTruthy();
    });
    it(`is invalid when null`, () => {
      expect(testObj.validate(`CanvasElement`)).toBe(false);
    });
    it(`is valid when it is a CANVAS element wrapped in ElementRef`, () => {
      let canvasTag = document.createElement("CANVAS");
      let canvasElementRef = new ElementRef(canvasTag);
      testObj = new CanvasElement(canvasElementRef);
      expect(testObj.validate(`CanvasElement`)).toBe(true);
    });
    it(`is valid when it is not CANVAS element wrapped in ElementRef`, () => {
      let canvasTag = document.createElement("DIV");
      let canvasElementRef = new ElementRef(canvasTag);
      testObj = new CanvasElement(canvasElementRef);
      expect(testObj.validate(`CanvasElement`)).toBe(false);
    });
  });
});
