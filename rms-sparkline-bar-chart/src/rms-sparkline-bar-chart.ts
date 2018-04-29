import { html, render, TemplateResult } from 'lit-html';
import { Rectangle } from '../../util/Rectangle'

export class RmsSparklineBarChart extends HTMLElement {
  public barPoints: number[] = [];
  private _barPoints: number[];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes(): string[] {
    return ['className', 'width', 'height', 'lineColor', 'lineWidth', 'fillColor', 'toolTip'];
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
        let value = (<any>this)[prop];
        delete (<any>this)[prop];
        (<any>this)[prop] = value;
      }
    });
  }

  get className(): string {
    return this.getAttribute('className') || 'no class provided';
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
      return Number(this.getAttribute('width')) == 0 ? 64 : Number(this.getAttribute('width'));
    } else {
      return 64;
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
      return Number(this.getAttribute('height')) == 0 ? 16 : Number(this.getAttribute('height'));
    } else {
      return 16;
    }
  }

  set height(value: number) {
    if (value) {
      this.setAttribute('height', String(value));
    } else {
      this.removeAttribute('height');
    }
  }

  get lineColor(): string {
    return this.getAttribute('lineColor') || 'lightgrey';
  }

  set lineColor(value: string) {
    if (value) {
      this.setAttribute('lineColor', value);
    } else {
      this.removeAttribute('lineColor');
    }
  }

  get lineWidth(): number {
    if (this.hasAttribute('lineWidth')) {
      return Number(this.getAttribute('lineWidth') || 1);
    } else {
      return 1;
    }
  }

  set lineWidth(value: number) {
    if (value) {
      this.setAttribute('lineWidth', String(value));
    } else {
      this.removeAttribute('lineWidth');
    }
  }

  get fillColor(): string {
    return this.getAttribute('fillColor') || 'lightblue';
  }

  set fillColor(value: string) {
    if (value) {
      this.setAttribute('fillColor', value);
    } else {
      this.removeAttribute('fillColor');
    }
  }

  get toolTip(): boolean {
    return this.hasAttribute('toolTip');
  }

  set toolTip(value: boolean) {
    if (value) {
      this.setAttribute('toolTip', '');
    } else {
      this.removeAttribute('toolTip');
    }
  }

	draw (): HTMLCanvasElement {
		let sparkline: HTMLCanvasElement = document.createElement('canvas');
		sparkline.width = this.width;
		sparkline.height = this.height;
		sparkline.style.display = 'inline-block';
		sparkline.style.verticalAlign = 'top';

		// this enables an empty canvas element to be created, helping unit tests.
		if (this.barPoints.length === 0) return sparkline;

		let ctx = sparkline.getContext("2d");
		// ctx.rect(2,2,10,10);
		// ctx.stroke();

		this._barPoints = [];
		for (let barPoint of this.barPoints) {
			this._barPoints.push(barPoint);
		}

		let barWidth =  Math.floor(this.width / this._barPoints.length);
		let barGap = 1;
		let requiredWidth = barWidth * this._barPoints.length + barGap * (this._barPoints.length - 1);
		// console.log('RmsSparklineBar::draw::original barPoints = ' + this._barPoints);
		// console.log('RmsSparklineBar::draw::original requiredWidth = ' + requiredWidth);
		while (requiredWidth > this.width) {
			// console.log('RmsSparklineBar::draw::required width larger than this.width');
			if (barWidth > 1) {
				// console.log('RmsSparklineBar::draw::shrink bar width to fit requiredWidth');
				barWidth--;
				requiredWidth = barWidth * this._barPoints.length + barGap * (this._barPoints.length - 1);
			} else {
				// console.log('RmsSparklineBar::draw::delete one barPoint to fit barGap');
				this._barPoints.splice(0,1);
				requiredWidth = barWidth * this._barPoints.length + barGap * (this._barPoints.length - 1);
			}
			// console.log('RmsSparklineBar::draw:: barPoints = ' + this._barPoints);
			// console.log('RmsSparklineBar::draw::recalculated requiredWidth = ' + requiredWidth);
		}

		/**
		 * compute the number of pixels between two consecutive values in the y-axis
		 */
		let max = 0;
		for (let entry of this._barPoints) {
			if (entry > max) max = entry;
		}
		let yStep = this.height  / max;

		// build the drawRectangles array
		let drawRectangles: Rectangle[] = [];
		for (let i:number = 0; i <  this._barPoints.length; i++) {
			let _x =(barWidth + barGap)*i;
			let _y = yStep*this._barPoints[i];
			let rectangle = new Rectangle((barWidth + barGap)*i,yStep*this._barPoints[i], barWidth, yStep*this._barPoints[i]);
			drawRectangles.push(rectangle)
		}

		// Translate the botton left coordinates to top left coordinates
		let canvasRectangles: Rectangle[] = [];
		for (let drawRectangle of drawRectangles) {
			let _x = drawRectangle.getX();
			let _y = this.height - drawRectangle.getY();
			let _width = drawRectangle.getWidth();
			let _height = drawRectangle.getHeight();
			let rectangle = new Rectangle(_x,_y, _width, _height);
			canvasRectangles.push(rectangle);
		}

		// Draw the rectangles
		for (let rect of canvasRectangles) {
			ctx.fillStyle = this.fillColor;
			ctx.fillRect(rect.getX(), rect.getY(), rect.getWidth(), rect.getHeight());
		}

		/**
		 * used to aid in unit testing; the results published to the console are compared with the results produced by
		 * the unit test!
		 */
		// console.log(sparkline.toDataURL());

		return sparkline;
	}

  private get styles(): TemplateResult {
    return html`
      <style>
       </style>
    `;
  }

  private get template(): TemplateResult {
    let sparkline: HTMLCanvasElement =  this.draw ()
	  return html`
       ${this.styles}
       ${sparkline}
     `;
  }

  render() {
    render(this.template, this.shadowRoot);
  }
}
window.customElements.define('rms-sparkline-bar-chart', RmsSparklineBarChart);
