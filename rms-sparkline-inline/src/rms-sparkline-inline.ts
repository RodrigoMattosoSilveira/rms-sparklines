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
import { SparklineLine } from '../../util-lib/src/sparkline-inline';
import { SparklineLineInterface } from '../../util-lib/src/sparkline-line-interface';
import { Decoration } from '../../util-lib/src/decoration';
import { CssColorString } from '../../util-lib/src/valid-colors';

export class RmsSparklineInline extends HTMLElement {
    private cssColorString: CssColorString = null;
    private linePointsArray: number[];
    private decorationPointsArray: Decoration[];
    private debug = false;
    private sparklineLine: SparklineLine = null;
    
    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.cssColorString = new CssColorString();
        this.sparklineLine = new SparklineLine();
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
            return Number(this.getAttribute('height'));
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
            return Number(this.getAttribute('linewidth'));
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
    
    get tooltip(): boolean {
        return this.hasAttribute('tooltip');
    }
    
    set tooltip(value: boolean) {
        if (value) {
            this.setAttribute('tooltip', '');
        } else {
            this.removeAttribute('tooltip');
        }
    }
    
    get width(): number {
        if (this.hasAttribute('width')) {
            return Number(this.getAttribute('width'));
        } else {
            return 0;
        }
    }

    set width(value: number) {
        if (value) {
            this.setAttribute('width', String(value));
        }  else {
            this.removeAttribute('width');
        }
    }

    /**
    * Draw an inline sparkline
    */
    draw (): HTMLCanvasElement {
        let attributes: SparklineLineInterface;
    
        const sparkline: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement;
        sparkline.width = this.width;
        sparkline.height = this.height;
        sparkline.style.display = 'inline-block';
        sparkline.style.verticalAlign = 'top';
        // sparkline.style.borderColor = 'black'; // Debug logic, keep it around
        // sparkline.style.borderWidth = '1px';
        // sparkline.style.borderStyle = 'solid';
        if (this.className && this.className !== ``) { sparkline.classList.add(this.className); }
        
        const ctx: CanvasRenderingContext2D = sparkline.getContext('2d');
        
        // Draw the line
        // DrawMethods.line(ctx,
        // this.linePointsArray,
        // this.width,
        // this.linewidth,
        // this.linecolor,
        // this.height,
        // this.shadecolor,
        // this.dotradius,
        // this.decorationPointsArray);
    
    
        attributes = {
            canvasEl: sparkline,
            ctx: ctx,
            className: this.className,
            decorationPoints: this.decorationPointsArray,
            dotRadius: this.dotradius,
            height: this.height,
            lineColor: this.linecolor,
            linePoints: this.linePointsArray,
            lineWidth: this.linewidth,
            shadeColor: this.shadecolor,
            toolTip: this.tooltip,
            width: this.width
        };
        this.sparklineLine.draw(attributes);
    
    
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
        let myCanvasEl: any;
        const __this = this;
        
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
        // rect = this.getBoundingClientRect();
        // console.log(`RmsSparklineInline::render rect.left: ` + rect.left + `, rect.top: ` + rect.top);
        
        render(this.template, this.shadowRoot);
        
        // Add mousemove / mouseout listeners
        myCanvasEl =  this.shadowRoot.children[1].children[0];
        myCanvasEl.addEventListener('mousemove', function(event: any) {
            // console.log(`RmsSparklineInlineNew::addEventListener`);
            
            // Note that when this function is called, this points to the target element!
            __this.sparklineLine.handleMouseMove(event, this);
        });
    
        myCanvasEl.addEventListener('mouseout', function() {
            // console.log(`RmsSparklineInlineNew::addEventListener`);
           SparklineLine.handleMouseOut();
        });
    }
}

window.customElements.define('rms-sparkline-inline', RmsSparklineInline);
