import { html, render, TemplateResult } from 'lit-html';
import {DrawMethods} from '../../util/DrawMethods';

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
        'tooltip',
        'shade',
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
        let value = (<any>this)[prop];
        delete (<any>this)[prop];
        (<any>this)[prop] = value;
      }
    });
  }
    
    get linepoints(): string {
        return this.getAttribute('linepoints') || JSON.stringify([]);
    }
    
    set linepoints(value: string) {
        if (value) {
            this.setAttribute('linepoints', value);
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
    
    get decorationpoints(): string {
        return this.getAttribute('decorationpoints') || JSON.stringify([]);
    }
    
    set decorationpoints(value: string) {
        if (value) {
            this.setAttribute('decorationpoints', value);
        } else {
            this.removeAttribute('decorationpoints');
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

		let ctx: CanvasRenderingContext2D = sparkline.getContext('2d');

		// Draw the line
        DrawMethods.line_1(ctx,
            this.linepoints,
            this.width,
            this.linewidth,
            this.linecolor,
            this.height,
            this.shade,
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
	  let sparkline: HTMLCanvasElement = this.draw();
	  return html`${sparkline}`;
  }

  render() {
    // console.log("RmsSparklineInlineNew::render");
    render(this.template, this.shadowRoot);
  }
}

window.customElements.define('rms-sparkline-inline', RmsSparklineInline);

