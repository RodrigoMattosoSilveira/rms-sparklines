import { html, render, TemplateResult } from 'lit-html';
import { CanvasMath } from '../../util/CanvasMath'
import { Point } from '../../util/Point'
import {DrawMethods} from '../../util/DrawMethods';

export class RmsSparklineInline extends HTMLElement {
  public linePoints: number[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes(): string[] {
    return ['classname', 'width', 'height', 'linecolor', 'linewidth', 'startcolor', 'endcolor', 'maxcolor', 'mincolor', 'dotradius', 'tooltip', 'shade', 'shadecolor'];
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
        let value = (<any>this)[prop];
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

  get linecolor(): string {
    return this.getAttribute('linecolor') || 'lightgrey';
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
		  return Number(this.getAttribute('linewidth')) == 0 ? 1 : Number(this.getAttribute('linewidth'));
	  } else {
		  return 1;
	  }
  }

  set linewidth(value: number) {
    if (value) {
      this.setAttribute('linewidth', String(value));
    } else {
      this.removeAttribute('linewidth');
    }
  }

  get startcolor(): string {
    return this.getAttribute('startcolor') || 'red';
  }

  set startcolor(value: string) {
    if (value) {
      this.setAttribute('startcolor', value);
    } else {
      this.removeAttribute('startcolor');
    }
  }

  get endcolor(): string {
    return this.getAttribute('endcolor') || 'red';
  }

  set endcolor(value: string) {
    if (value) {
      this.setAttribute('endcolor', value);
    } else {
      this.removeAttribute('endcolor');
    }
  }

  get maxcolor(): string {
    return this.getAttribute('maxcolor') || 'teal';
  }

  set maxcolor(value: string) {
    if (value) {
      this.setAttribute('maxcolor', value);
    } else {
      this.removeAttribute('maxcolor');
    }
  }

  get mincolor(): string {
    return this.getAttribute('mincolor') || 'teal';
  }

  set mincolor(value: string) {
    if (value) {
      this.setAttribute('mincolor', value);
    } else {
      this.removeAttribute('mincolor');
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

	get shade(): boolean {
		return this.hasAttribute('shade');
	}

	set shade(value: boolean) {
		if (value) {
			this.setAttribute('shade', '');
		} else {
			this.removeAttribute('shade');
		}
	}

	get shadecolor(): string {
		return this.getAttribute('shadecolor') || 'lightblue';
	}

	set shadecolor(value: string) {
		if (value) {
			this.setAttribute('shadecolor', value);
		} else {
			this.removeAttribute('shadecolor');
		}
	}

	/**
	 * Draw an inline sparkline
	 */
	draw (): HTMLCanvasElement {

		let sparkline: HTMLCanvasElement = document.createElement('canvas');
		sparkline.width = this.width;
		sparkline.height = this.height;
		sparkline.style.display = 'inline-block';
		sparkline.style.verticalAlign = 'top';

		// this enables an empty canvas element to be created, helping unit tests.
		if (this.linePoints.length === 0) return sparkline;

		let ctx: CanvasRenderingContext2D = sparkline.getContext('2d');

		// Draw the line
        DrawMethods.line(ctx,
            this.linePoints,
            this.width,
            this.linewidth,
            this.linecolor,
            this.height,
            this.shade,
            this.shadecolor,
            this.dotradius,
            this.startcolor,
            this.endcolor,
            this.maxcolor,
            this.mincolor);

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
	  let sparkline: HTMLCanvasElement = this.draw();
	  return html`${sparkline}`;
    // return html`
    //   ${sparkline}
    //   ${this.styles}
    //   <div class="content">
    //     Welcome to &lt;rms-sparkline-inline-new&gt;
	//
    //     <ul>
    //       <li>className: ${this.classname === null ? 'N/A' : this.classname}</li>
    //       <li>width: ${this.width === null ? 'N/A' : this.width}</li>
    //       <li>height: ${this.height === null ? 'N/A' : this.height}</li>
    //       <li>lineColor: ${this.linecolor === null ? 'N/A' : this.linecolor}</li>
    //       <li>lineWidth: ${this.linewidth === null ? 'N/A' : this.linewidth}</li>
    //       <li>startColor: ${this.startcolor === null ? 'N/A' : this.startcolor}</li>
    //       <li>endColor: ${this.endcolor === null ? 'N/A' : this.endcolor}</li>
    //       <li>maxColor: ${this.maxcolor === null ? 'N/A' : this.maxcolor}</li>
    //       <li>minColor: ${this.mincolor === null ? 'N/A' : this.mincolor}</li>
    //       <li>dotradius: ${this.dotradius === null ? 'N/A' : this.dotradius}</li>
    //       <li>toolTip: ${this.tooltip === null ? 'N/A' : this.tooltip}</li>
    //       <li>shade: ${this.shade === null ? 'N/A' : this.shade}</li>
    //      <li>shadeColor: ${this.shadecolor === null ? 'N/A' : this.shadecolor}</li>
    //    </ul>
	//
    //     <slot></slot>
    //   </div>
    // `;
  }

  render() {
    // console.log("RmsSparklineInlineNew::render");
    render(this.template, this.shadowRoot);
  }
}

window.customElements.define('rms-sparkline-inline', RmsSparklineInline);

