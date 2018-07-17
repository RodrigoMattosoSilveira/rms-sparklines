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
import { DrawMethods } from '../../util-lib/src/DrawMethods';
import { Decoration } from '../../util-lib/src/decoration';
import { CssColorString } from '../../util-lib/src/valid-colors';

export class RmsSparklineInline extends HTMLElement {
    private cssColorString: CssColorString = null;
    private linePointsArray: number[];
    private decorationPointsArray: Decoration[];
    private debug = false;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
      this.cssColorString = new CssColorString();
  }

  static get observedAttributes(): string[] {
    return [
        'classname',
        'decorationpoints',
        'dotradius',
        'linecolor',
        'linepoints',
        'linewidth',
        'height',
        'shadecolor',
        'width'
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
    get decorationpoints(): string {
        return this.getAttribute('decorationpoints') || '';
    }

    set decorationpoints(value: string) {
        if (value) {
            this.setAttribute('decorationpoints', value);
        } else {
            this.removeAttribute('decorationpoints');
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

    get linepoints(): string {
        return this.getAttribute('linepoints') || '';
    }

    set linepoints(value: string) {
        if (value) {
            this.setAttribute('linepoints', value);
        } else {
            this.removeAttribute('linepoints');
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

    get width(): number {
        if (this.hasAttribute('width')) {
            return Number(this.getAttribute('width')) === 0 ? 64 : Number(this.getAttribute('width'));
        } else {
            return 0;
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

  set width(value: number) {
    if (value) {
      this.setAttribute('width', String(value));
    } else {
      this.removeAttribute('width');
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
        if (this.className && this.className !== ``) { sparkline.classList.add(this.className); }
        
        const ctx: CanvasRenderingContext2D = sparkline.getContext('2d');
        
        // Draw the line
        DrawMethods.line(ctx,
        this.linePointsArray,
        this.width,
        this.linewidth,
        this.linecolor,
        this.height,
        this.shadecolor,
        this.dotradius,
        this.decorationPointsArray);
        
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
                :host {
                    display: inline-block;
                    verticalAlign: top;
                }
                
                :host([hidden]) {
                    display: none;
                }
                
                .content {
                }
                
            </style>
        `;
    }

    private get template(): TemplateResult {
        const sparkline: HTMLCanvasElement = this.draw();
        return html`
            ${this.styles}
            <div class="content">
                ${sparkline}
                <slot></slot>
            </div>
        `;
    }

  render() {

      // debuging
      // console.log(`RmsSparklineInline::render - decorationpoints: ` + this.decorationpoints);
      // console.log(`RmsSparklineInline::render - linepoints: ` + this.linepoints);
      // console.log(`RmsSparklineInline::render - linecolor: ` + this.linecolor);
      // console.log(`RmsSparklineInline::render - linewidth: ` + this.linewidth);
      // console.log(`RmsSparklineInline::render - height: ` + this.height);
      // console.log(`RmsSparklineInline::render - shadecolor: ` + this.shadecolor);
      // console.log(`RmsSparklineInline::render - width: ` + this.width);
      // console.log(`RmsSparklineInline::render\n`);

      // console.log("RmsSparklineInlineNew::render");
      if (!this.decorationpoints) { this.debug ? console.log(`RmsSparklineInline::render - No decorationpoints: `) : this.debug = false; return; }
      this.decorationPointsArray = JSON.parse(this.decorationpoints);
      if (this.decorationpoints && this.decorationPointsArray.length > 0) {
          // logic to ensure linepoints is filled before we kick of the line construction
          for (let i = 0; i < this.decorationPointsArray.length; i++) {
              if (this.decorationPointsArray[i].index > this.linepoints.length - 1) { return; }
              if (!this.cssColorString.isValid(this.decorationPointsArray[i].color)) { return; }
          }
      }
      if (!this.linepoints) {  this.debug ? console.log(`RmsSparklineInline::render - No linepoints: `) : this.debug = false; return; }
      this.linePointsArray = JSON.parse(this.linepoints);
      if (this.linePointsArray.length === 0) { this.debug ? console.log(`RmsSparklineInline::render - Empty linePointsArray: `) : this.debug = false; return; }
      if (!this.linecolor || !this.cssColorString.isValid(this.linecolor)) {  this.debug ? console.log(`RmsSparklineInline::render - Bad linecolor: `) : this.debug = false; return; }
      if (this.linewidth === 0 ) {  this.debug ? console.log(`RmsSparklineInline::render - Bad linewidth: `) : this.debug = false; return; }
      if (this.height === 0) {  this.debug ? console.log(`RmsSparklineInline::render - Bad height: `) : this.debug = false; return; }
      if (this.shadecolor && !this.cssColorString.isValid(this.shadecolor)) {  this.debug ? console.log(`RmsSparklineInline::render - Bad shadecolor: `) : this.debug = false; return; }
      if (this.width === 0) {  this.debug ? console.log(`RmsSparklineInline::render - Bad width: `) : this.debug = false; return; }

      // debuging
      // console.log(`RmsSparklineInline::render - decorationpoints` + this.decorationpoints);
      // console.log(`RmsSparklineInline::render - linepoints` + this.linepoints);
      // console.log(`RmsSparklineInline::render - linecolor` + this.linecolor);
      // console.log(`RmsSparklineInline::render - linewidth` + this.linewidth);
      // console.log(`RmsSparklineInline::render - height` + this.height);
      // console.log(`RmsSparklineInline::render - shadecolor` + this.shadecolor);
      // console.log(`RmsSparklineInline::render - width` + this.width);

    render(this.template, this.shadowRoot);
  }
}

window.customElements.define('rms-sparkline-inline', RmsSparklineInline);
