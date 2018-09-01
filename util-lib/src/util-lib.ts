import { html, render, TemplateResult } from 'lit-html';

export class UtilLib extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

    static get observedAttributes(): string[] {
        return ['name'];
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

  get name(): string {
    return this.getAttribute('name');
  }

  set name(value: string) {
    if (value) {
      this.setAttribute('name', value);
    } else {
      this.removeAttribute('name');
    }
  }

  private get styles(): TemplateResult {
    return html`
      <style>
        :host {
          display: block;
          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0 ,0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
        }

        :host([hidden]) {
          display: none;
        }

        .content {
          background-color: var(--util-lib-background-color, #FAFAFA);
          color: #212121;
          padding: 16px;
        }
      </style>
    `;
  }

  private get template(): TemplateResult {
    return html`
      ${this.styles}
      <div class="content">
        Welcome to &lt;util-lib&gt;

        <ul>
          <li>name: ${this.name === null ? 'N/A' : this.name}</li>
        </ul>

        <slot></slot>
      </div>
    `;
  }

  render() {
    render(this.template, this.shadowRoot);
  }
}

window.customElements.define('util-lib', UtilLib);
