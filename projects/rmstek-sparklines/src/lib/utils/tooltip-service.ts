import { Tooltip } from './tooltip';

export class TooltipService {
   canvasEl: HTMLCanvasElement;
   tooltips: Array<Tooltip>;
   tooltipId: string;
   getClassEl(): HTMLCanvasElement { return this.canvasEl; }
   setupCanvasEl(value: HTMLCanvasElement) { this.canvasEl = value; }
   // tooltips: Array<Tooltip>;
   getTooltips(): Array<Tooltip> { return this.tooltips; }
   setTooltips(value: Array<Tooltip>) { this.tooltips = value; }
   // tooltipId: string;
   getTooltipId(): string { return this.tooltipId; }
   setTooltipId(value: string) { this.tooltipId = value; }
   constructor(canvasEl: HTMLCanvasElement, tooltips: Array<Tooltip>, tooltipId: string) {
      const thisThis: any = this;

      this.setupCanvasEl(canvasEl);
      this.setTooltips(tooltips);
      this.setTooltipId(tooltipId);

      canvasEl.addEventListener('mousemove', (event: any) => {
         // console.log(`TooltipService::addEventListener`);
         thisThis.handleMouseMove(event);
      });

      canvasEl.addEventListener('mouseout', () => {
      // console.log(`TooltipService::addEventListener`);
         thisThis.handleMouseOut();
      });

   }
   handleMouseMove($event: MouseEvent) {
      const canvasEl = this.getClassEl();
      const tooltips: Array<Tooltip> = this.getTooltips();
      const tooltipId: string = this.getTooltipId();
      let tooltip: HTMLCanvasElement;
      let mySpan: HTMLSpanElement;
      const fontDefinition = '12px FUTURA';
      let body: any;
      let width: number;
      let height: number;
      let rect: any;
      let scrollLeft: number;
      let scrollTop: number;

      // Get the position of the canvas element relative to the document
      // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
      // https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
      rect = canvasEl.getBoundingClientRect();
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      rect = { left: rect.left + scrollLeft, top: rect.top + scrollTop  };

      const mouseX = $event.clientX - rect.left + window.pageXOffset || document.documentElement.scrollLeft;
      const mouseY = $event.clientY - rect.top + window.pageYOffset || document.documentElement.scrollTop;
      // console.log(`BarChart::handleMouseMove mouseX: ` + mouseX + `, mouseY: ` + mouseY);

      for (const toolTip of tooltips) {
           const tipX = toolTip.rect.getX();
           const tipWidth = toolTip.rect.getWidth();
           let tipHeight = toolTip.rect.getHeight();
           let tipY = toolTip.rect.getY();
           if (tipHeight < 0) {
               tipY += tipHeight;
               tipHeight *= -1;
           }

           // console.log(`mouseX: ` + mouseX + `, mouseY: ` + mouseY);
           // console.log(`tipX: ` + tipX + `, tipY: ` + tipY + `, tipWidth: ` + tipWidth + `, tipHeight: ` + tipHeight);

           if (tipX <=  mouseX && mouseX <= tipX + tipWidth &&
               tipY <=  mouseY && mouseY <= tipY + tipHeight) {

               // console.log(`We have a match`);

               // A trick to find the width / height of the canvas to host the tooltip
               mySpan = document.createElement('span') as HTMLSpanElement;
               mySpan.id = 'mySpanId';
               mySpan.style.font = fontDefinition;
               mySpan.style.textAlign = 'center';
               mySpan.innerHTML = '' + toolTip.tip;
               body = document.getElementsByTagName('body')[0];
               body.appendChild(mySpan);
               mySpan = document.getElementById('mySpanId');
               width = mySpan.getBoundingClientRect().width + 4;
               height = mySpan.getBoundingClientRect().height + 2;
               mySpan.parentElement.removeChild(mySpan);
               // console.log(`mySpanWidth: ` + width + `, mySpanHeight: ` + height);

               // Remove the existing tooltip, if present
               tooltip = document.getElementById(tooltipId) as HTMLCanvasElement;
               if (tooltip) {
                   // console.log(`BarChart::handleMouseMove deleting tooltip`);
                   tooltip.parentElement.removeChild(tooltip);
               }

               tooltip = document.createElement('CANVAS') as HTMLCanvasElement;
               tooltip.id = tooltipId;
               tooltip.width = width;
               tooltip.height = height;
               tooltip.style.position = 'absolute';
               tooltip.style.left = ($event.clientX + 5) + 'px';
               tooltip.style.top = ($event.clientY + 7) + 'px';
               // tooltip.style.left = '' + 100 + 'px';
               // tooltip.style.top = '' + 100 + 'px';
               tooltip.style.border = '1px solid';
               tooltip.style.zIndex = '20';
               tooltip.style.textAlign = 'center';

               const ctx = (tooltip as HTMLCanvasElement).getContext('2d');
               ctx.fillStyle = 'white';
               ctx.fillRect(0, 0, width, height);
               ctx.fill();
               ctx.fillStyle = 'red';
               ctx.font = fontDefinition;
               ctx.fillText('' + toolTip.tip, 1, height - 2);

               body = document.getElementsByTagName('body')[0];
               body.appendChild(tooltip);

               break; /// required to prevent Q1 : Q3 tooltip from showing
           }  else {
               // console.log(`this is not a match`);

               // Remove the existing tooltip, if present
               tooltip = document.getElementById(tooltipId) as HTMLCanvasElement;
               if (tooltip) {
                   // console.log(`BarChart::handleMouseMove deleting tooltip`);
                   tooltip.parentElement.removeChild(tooltip);
               }
           }
      }
   }
   handleMouseOut() {
      const tooltipId: string = this.getTooltipId();
      // Remove the existing tooltip, if present
      const tooltipEl = document.getElementById(tooltipId);
      if (tooltipEl) {
           // console.log(`BarChart::handleMouseOut deleting tooltip`);
           tooltipEl.parentElement.removeChild(tooltipEl);
      }
   }
}
