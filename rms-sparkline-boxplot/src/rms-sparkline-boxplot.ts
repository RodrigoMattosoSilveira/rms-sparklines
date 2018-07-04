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
import {CssColorString} from '../../util-lib/src/valid-colors';

export class RmsSparklineBoxplot extends HTMLElement {
    public population: number[] = [];
    VALID_CHART_TYPES: string[] = ['simple'];
    private cssColorString: CssColorString = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes(): string[] {
    return [
        'axisColor',
        'axisLineWidth',
        'chartType',
        'className',
        'height',
        'highWhiskerColor',
        'highWhiskerLineWidth',
        'interQuartileRangeColor',
        'interQuartileRangeLineWidth',
        'lowWhiskerColor',
        'lowWhiskerLineWidth',
        'medianColor',
        'medianLineWidth',
        'population',
        'width'
    ];
  }
    
    connectedCallback() {
        this.upgradeProperties();
        this.render();
    }
    
    disconnectedCallback() {
    }
    
    attributeChangedCallback(_name: string, _oldValue: any, _newValue: any) {
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

    get chartType(): string {
        return this.getAttribute('chartType');
    }
    
    set chartType(value: string) {
        if (value) {
            this.setAttribute('chartType', value);
        } else {
            this.removeAttribute('chartType');
        }
    }
    
    get className(): string {
        return this.getAttribute('className');
    }
    
    set className(value: string) {
        if (value) {
            this.setAttribute('className', value);
        } else {
            this.removeAttribute('className');
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
        } else {
            this.removeAttribute('width');
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
    
    private get styles(): TemplateResult {
        return html`
            <style>
            </style>
        `;
    }
    
    private get template(): TemplateResult {
        
        const canvasEl = document.createElement('canvas');
        canvasEl.width = this.width;
        canvasEl.height = this.height;
        canvasEl.style.display = 'inline-block';
        canvasEl.style.verticalAlign = 'top';
        if (this.className && this.className !== ``) { canvasEl.classList.add(this.className); }
        
        const boxChart = new BoxChart(canvasEl, this.chartType, this.barHeights, this.minimumBarWidth, this.barGap, this.fillColorMinus, this.fillColorZero, this.fillColorPlus);
        boxChart.draw();
        
        return html`
            ${this.styles}
            ${canvasEl}
        `;
    }

    render() {
        // ensure attribute coherence
        //
        const __this = this;
        if (!this.population) { return; }
        if (this.population.length === 0) { return; }
        if (this.VALID_CHART_TYPES.findIndex(checkChartType) === -1) { return; }
        function checkChartType(_charttype: string): boolean {
            return _charttype === __this.chartType;
        }
        if (!this.cssColorString.isValid(this.fillColorMinus)) { return; }
        if (!this.cssColorString.isValid(this.fillColorZero)) { return; }
        if (!this.cssColorString.isValid(this.fillColorPlus)) { return; }
        if (this.width === 0) { return; }
        if (this.height === 0) { return; }
        
        render(this.template, this.shadowRoot);
    }
}

window.customElements.define('rms-sparkline-boxplot', RmsSparklineBoxplot);
