// Copyright 2018 Rodrigo Silveira
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
import { BoxPlot } from '../../util-lib/src/box-plot';

export class RmsSparklineBoxplot extends HTMLElement {
    public populationArray: number[] = [];
    VALID_CHART_TYPES: string[] = ['simple'];
    private cssColorString: CssColorString = new CssColorString();
    private debugging = false;

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
    
    get axisColor(): string {
        return this.getAttribute('axisColor');
    }
    
    set axisColor(value: string) {
        if (value) {
            this.setAttribute('axisColor', value);
        } else {
            this.removeAttribute('axisColor');
        }
    }
    
    get axisLineWidth(): number {
        if (this.hasAttribute('axisLineWidth')) {
            return Number(this.getAttribute('axisLineWidth'));
        } else {
            return 0;
        }
    }
    set axisLineWidth(value: number) {
        if (value) {
            this.setAttribute('axisLineWidth', String(value));
        } else {
            this.removeAttribute('axisLineWidth');
        }
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
    
    get highWhiskerColor(): string {
        return this.getAttribute('highWhiskerColor');
    }
    
    set highWhiskerColor(value: string) {
        if (value) {
            this.setAttribute('highWhiskerColor', value);
        } else {
            this.removeAttribute('highWhiskerColor');
        }
    }
    
    get highWhiskerLineWidth(): number {
        if (this.hasAttribute('highWhiskerLineWidth')) {
            return Number(this.getAttribute('highWhiskerLineWidth'));
        } else {
            return 0;
        }
    }
    set highWhiskerLineWidth(value: number) {
        if (value) {
            this.setAttribute('highWhiskerLineWidth', String(value));
        } else {
            this.removeAttribute('highWhiskerLineWidth');
        }
    }
    
    get interQuartileRangeColor(): string {
        return this.getAttribute('interQuartileRangeColor');
    }
    
    set interQuartileRangeColor(value: string) {
        if (value) {
            this.setAttribute('interQuartileRangeColor', value);
        } else {
            this.removeAttribute('interQuartileRangeColor');
        }
    }
    
    get interQuartileRangeLineWidth(): number {
        if (this.hasAttribute('interQuartileRangeLineWidth')) {
            return Number(this.getAttribute('interQuartileRangeLineWidth'));
        } else {
            return 0;
        }
    }
    set interQuartileRangeLineWidth(value: number) {
        if (value) {
            this.setAttribute('interQuartileRangeLineWidth', String(value));
        } else {
            this.removeAttribute('interQuartileRangeLineWidth');
        }
    }
    
    get lowWhiskerColor(): string {
        return this.getAttribute('lowWhiskerColor');
    }
    
    set lowWhiskerColor(value: string) {
        if (value) {
            this.setAttribute('lowWhiskerColor', value);
        } else {
            this.removeAttribute('lowWhiskerColor');
        }
    }
    
    get lowWhiskerLineWidth(): number {
        if (this.hasAttribute('lowWhiskerLineWidth')) {
            return Number(this.getAttribute('lowWhiskerLineWidth'));
        } else {
            return 0;
        }
    }
    set lowWhiskerLineWidth(value: number) {
        if (value) {
            this.setAttribute('lowWhiskerLineWidth', String(value));
        } else {
            this.removeAttribute('lowWhiskerLineWidth');
        }
    }
    
    get medianColor(): string {
        return this.getAttribute('medianColor');
    }
    
    set medianColor(value: string) {
        if (value) {
            this.setAttribute('medianColor', value);
        } else {
            this.removeAttribute('medianColor');
        }
    }
    
    get medianLineWidth(): number {
        if (this.hasAttribute('medianLineWidth')) {
            return Number(this.getAttribute('medianLineWidth'));
        } else {
            return 0;
        }
    }
    set medianLineWidth(value: number) {
        if (value) {
            this.setAttribute('medianLineWidth', String(value));
        } else {
            this.removeAttribute('medianLineWidth');
        }
    }
    
    get population(): string {
        return this.getAttribute('population');
    }
    set population(value: string) {
        if (value) {
            this.setAttribute('population', value);
        } else {
            this.removeAttribute('population');
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
        
        const boxChart = new BoxPlot(
            canvasEl,
            this.chartType,
            this.populationArray,
            this. axisLineWidth,
            this.axisColor,
            this.lowWhiskerLineWidth,
            this.lowWhiskerColor,
            this.highWhiskerLineWidth,
            this.highWhiskerColor,
            this.interQuartileRangeLineWidth,
            this.interQuartileRangeColor,
            this.medianLineWidth,
            this.medianColor);
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
        if (!this.population) {
            // console.log('no population');
            return;
        }
        this.populationArray = JSON.parse(this.population);
        if (this.populationArray.length === 0) {
            // console.log('zero length population');
            return;
        }
        
        if (this.VALID_CHART_TYPES.findIndex(checkChartType) === -1) {
            // console.log('invalid chart');
            return;
        }
        function checkChartType(_charttype: string): boolean {
            return _charttype === __this.chartType;
        }
        if (this.axisLineWidth === 0) {
            // console.log('invalid axisLineWidth');
            return;
        }
        if (!this.cssColorString.isValid(this.axisColor)) {
            // console.log('invalid axisColor');
            return;
        }
        
        if (this.highWhiskerLineWidth === 0) {
            // console.log('invalid highWhiskerLineWidth');
            return;
        }
        if (!this.cssColorString.isValid(this.highWhiskerColor)) {
            // console.log('invalid highWhiskerColor');
            return;
        }
    
        if (this.lowWhiskerLineWidth === 0) {
            // console.log('invalid lowWhiskerLineWidth');
            return;
        }
        if (!this.cssColorString.isValid(this.lowWhiskerColor)) {
            // console.log('invalid lowWhiskerColor');
            return;
        }
    
        if (this.interQuartileRangeLineWidth === 0) { return; }
        if (!this.cssColorString.isValid(this.interQuartileRangeColor)) {
            // console.log('invalid interQuartileRangeColor');
            return;
        }
    
        if (this.medianLineWidth === 0) {
            console.log('no medianLineWidth');
            return;
        }
        if (!this.cssColorString.isValid(this.medianColor)) {
            // console.log('invalid medianColor');
            return;
        }
    
        if (this.width === 0) {
            // console.log('invalid width');
            return;
        }
        if (this.height === 0) {
            // console.log('invalid height');
            return;
        }
        
        render(this.template, this.shadowRoot);
    }
}

window.customElements.define('rms-sparkline-boxplot', RmsSparklineBoxplot);
