// Copyright2018 Rodrigo Silveira
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import { html, render, TemplateResult } from 'lit-html';
import {DrawMethods} from '../../util/DrawMethods';
import {Decoration} from '../dist/util/Decoration';

export class RmsSparklineInline extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes(): string[] {
    return [
        'linepoints',
        'classname',
        'width',
        'height',
        'linecolor',
        'linewidth',
        'dotradius',
        'shadecolor',
        'decorationpoints'
    ];
  }

  connectedCallback() {
    this.upgradeProperties();
    // console.log("RmsSparklineInlineNew::connectedCallback");
    this.render();
  }

  disconnectedCallback() {
  }

    attributeChangedCallback(_name: string, _oldValue: any, _newValue: any) {
        // console.log("RmsSparklineInlineNew::attributeChangedCallback_name = " + _name);
        this.render();
    }

    private upgradeProperties() {
        // Support lazy properties https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
        (<any>this).constructor['observedAttributes'].forEach((prop: string) => {
        if (this.hasOwnProperty(prop)) {
            const value = (<any>this)[prop];
            delete (<any>this)[prop];
            (<any>this)[prop] = value;
            }
        });
    }
    
    get linepoints(): number[] {
        return  JSON.parse(this.getAttribute('linepoints')) || JSON.stringify([]);
    }
    
    set linepoints(value: number[]) {
        if (value) {
            this.setAttribute('linepoints', JSON.stringify(value));
        } else {
            this.removeAttribute('linepoints');
        }
    }

    get classname(): string {
        return this.getAttribute('classname') || '';
    }

    set classname(value: string) {
        if (value) {
            this.setAttribute('classname', value);
        } else {
            this.removeAttribute('classname');
        }
    }

    get width(): number {
        if (this.hasAttribute('width')) {
            return Number(this.getAttribute('width')) === 0 ? 64 : Number(this.getAttribute('width'));
        } else {
            return 0;
        }
    }

  set width(value: number) {
    if (value) {
      this.setAttribute('width', String(value));
    } else {
      this.removeAttribute('width');
    }
  }

    get height(): number {
        if (this.hasAttribute('height')) {
            return Number(this.getAttribute('height')) === 0 ? 16 : Number(this.getAttribute('height'));
        } else {
            return 0;
        }
    }

    set height(value: number) {
        if (value) {
            this.setAttribute('height', String(value));
        } else {
            this.removeAttribute('height');
        }
    }

    get linecolor(): string {
        return this.getAttribute('linecolor') || '';
    }

    set linecolor(value: string) {
        if (value) {
            this.setAttribute('linecolor', value);
        } else {
            this.removeAttribute('linecolor');
        }
    }

    get linewidth(): number {
        if (this.hasAttribute('linewidth')) {
            return Number(this.getAttribute('linewidth')) === 0 ? 1 : Number(this.getAttribute('linewidth'));
        } else {
            return 0;
        }
    }

    set linewidth(value: number) {
        if (value) {
            this.setAttribute('linewidth', String(value));
        } else {
            this.removeAttribute('linewidth');
        }
    }

    get dotradius(): number {
        if (this.hasAttribute('dotradius')) {
            return Number(this.getAttribute('dotradius'));
        } else {
            return 0;
        }
    }

    set dotradius(value: number) {
        if (value) {
            this.setAttribute('dotradius', String(value));
        } else {
            this.removeAttribute('dotradius');
        }
    }

    get shadecolor(): string {
        return this.getAttribute('shadecolor');
    }

    set shadecolor(value: string) {
        if (value) {
            this.setAttribute('shadecolor', value);
        } else {
         this.removeAttribute('shadecolor');
        }
    }
    get decorationpoints(): Decoration [] {
        return  JSON.parse(this.getAttribute('decorationpoints')) || JSON.parse(JSON.stringify([]));
    }
    
    set decorationpoints(value: Decoration []) {
        if (value) {
            this.setAttribute('decorationpoints', JSON.stringify(value));
        } else {
            this.removeAttribute('decorationpoints');
        }
    }
 
    /**
    * Draw an inline sparkline
    */
    draw (): HTMLCanvasElement {
    
        const sparkline: HTMLCanvasElement = document.createElement('canvas');
        sparkline.width = this.width;
        sparkline.height = this.height;
        sparkline.style.display = 'inline-block';
        sparkline.style.verticalAlign = 'top';
        
        const ctx: CanvasRenderingContext2D = sparkline.getContext('2d');
        
        // Draw the line
        DrawMethods.line(ctx,
        this.linepoints,
        this.width,
        this.linewidth,
        this.linecolor,
        this.height,
        this.shadecolor,
        this.dotradius,
        this.decorationpoints);
        
        /**
        * used to aid in unit testing; the results published to the console are compared with the results produced by
        * the unit test!
        */
        // console.log('dotradius: ' + this.dotradius);
        // console.log(sparkline.toDataURL());
        // console.log(ctx.getImageData(0, 0, this.width, this.height))
        
        return sparkline;
    }

    private get styles(): TemplateResult {
        return html`
            <style>
            </style>
        `;
    }

    private get template(): TemplateResult {
        const sparkline: HTMLCanvasElement = this.draw();
        return html`
            ${this.styles}
            ${sparkline}
        `;
    }

  render() {
    // console.log("RmsSparklineInlineNew::render");
      if (!this.linepoints) { return; }
      if (this.linepoints.length === 0) { return; }
      if (this.linewidth === 0 ) {return; }
      if (this.linecolor === '') { return; }
      if (this.width === 0) { return; }
      if (this.height === 0) { return; }
      if (this.decorationpoints && this.decorationpoints.length > 0) {
          for (let i = 0; i < this.decorationpoints.length; i++) {
              // todo: a hack to solve a problem when running inside vaadin-grid
              if (this.decorationpoints[i].index > this.linepoints.length - 1) { return; }
          }
      }
      
    render(this.template, this.shadowRoot);
  }
}

window.customElements.define('rms-sparkline-inline', RmsSparklineInline);

