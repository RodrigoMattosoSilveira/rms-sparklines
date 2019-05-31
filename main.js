(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/library/fesm5/library.js":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/RodrigoMattosoSilveira/rms-sparklines/dist/library/fesm5/library.js ***!
  \**********************************************************************************************/
/*! exports provided: LibraryService, LibraryModule, SparkBarchartComponent, SparkBoxplotComponent, SparkLineComponent, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryService", function() { return LibraryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryModule", function() { return LibraryModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkBarchartComponent", function() { return SparkBarchartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkBoxplotComponent", function() { return SparkBoxplotComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkLineComponent", function() { return SparkLineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BarchartService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return BoxplotService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return LineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ "../../node_modules/mathjs/index.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mathjs__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibraryService = /** @class */ (function () {
    function LibraryService() {
    }
    LibraryService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LibraryService.ctorParameters = function () { return []; };
    /** @nocollapse */ LibraryService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function LibraryService_Factory() { return new LibraryService(); }, token: LibraryService, providedIn: "root" });
    return LibraryService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BarchartService = /** @class */ (function () {
    function BarchartService() {
    }
    /**
     * @param {?} sparklineCanvas
     * @param {?} lineColor
     * @return {?}
     */
    BarchartService.prototype.draw = /**
     * @param {?} sparklineCanvas
     * @param {?} lineColor
     * @return {?}
     */
    function (sparklineCanvas, lineColor) {
        /** @type {?} */
        var ctx = sparklineCanvas.nativeElement.getContext('2d');
        // Draw
        ctx.fillStyle = lineColor;
        ctx.fillRect(20, 20, 150, 100);
    };
    BarchartService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BarchartService.ctorParameters = function () { return []; };
    /** @nocollapse */ BarchartService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function BarchartService_Factory() { return new BarchartService(); }, token: BarchartService, providedIn: "root" });
    return BarchartService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SparkBarchartComponent = /** @class */ (function () {
    function SparkBarchartComponent(barchartService) {
        this.barchartService = barchartService;
    }
    // see https://blog.angular-university.io/angular-viewchild/
    // for recommendation to use ngAfterViewInit instead of ngOnInit
    // see https://blog.angular-university.io/angular-viewchild/
    // for recommendation to use ngAfterViewInit instead of ngOnInit
    /**
     * @return {?}
     */
    SparkBarchartComponent.prototype.ngAfterViewInit = 
    // see https://blog.angular-university.io/angular-viewchild/
    // for recommendation to use ngAfterViewInit instead of ngOnInit
    /**
     * @return {?}
     */
    function () {
        this.barchartService.draw(this.sparklineCanvas, this.lineColor);
    };
    SparkBarchartComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'rms-spark-barchart',
                    template: "<canvas #sparklineCanvas width=\"128\" height=\"64\"></canvas>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SparkBarchartComponent.ctorParameters = function () { return [
        { type: BarchartService }
    ]; };
    SparkBarchartComponent.propDecorators = {
        lineColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['spark_color',] }],
        sparklineCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['sparklineCanvas',] }]
    };
    return SparkBarchartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BoxplotService = /** @class */ (function () {
    function BoxplotService() {
    }
    /**
     * @param {?} sparklineCanvas
     * @param {?} lineColor
     * @return {?}
     */
    BoxplotService.prototype.draw = /**
     * @param {?} sparklineCanvas
     * @param {?} lineColor
     * @return {?}
     */
    function (sparklineCanvas, lineColor) {
        /** @type {?} */
        var ctx = sparklineCanvas.nativeElement.getContext('2d');
        // Draw
        ctx.fillStyle = lineColor;
        ctx.fillRect(20, 20, 150, 100);
    };
    BoxplotService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BoxplotService.ctorParameters = function () { return []; };
    /** @nocollapse */ BoxplotService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function BoxplotService_Factory() { return new BoxplotService(); }, token: BoxplotService, providedIn: "root" });
    return BoxplotService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SparkBoxplotComponent = /** @class */ (function () {
    function SparkBoxplotComponent(boxplotService) {
        this.boxplotService = boxplotService;
    }
    // see https://blog.angular-university.io/angular-viewchild/
    // for recommendation to use ngAfterViewInit instead of ngOnInit
    // see https://blog.angular-university.io/angular-viewchild/
    // for recommendation to use ngAfterViewInit instead of ngOnInit
    /**
     * @return {?}
     */
    SparkBoxplotComponent.prototype.ngAfterViewInit = 
    // see https://blog.angular-university.io/angular-viewchild/
    // for recommendation to use ngAfterViewInit instead of ngOnInit
    /**
     * @return {?}
     */
    function () {
        this.boxplotService.draw(this.sparklineCanvas, this.lineColor);
    };
    SparkBoxplotComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'rms-spark-boxplot',
                    template: "<canvas #sparklineCanvas width=\"128\" height=\"64\"></canvas>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SparkBoxplotComponent.ctorParameters = function () { return [
        { type: BoxplotService }
    ]; };
    SparkBoxplotComponent.propDecorators = {
        lineColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['spark_color',] }],
        sparklineCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['sparklineCanvas',] }]
    };
    return SparkBoxplotComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LineService = /** @class */ (function () {
    function LineService() {
        // Local attributes
        this.attributes = {};
        this.coordinatesViewport = [];
        this.coordinatesCanvas = [];
        this.coordinatesTips = [];
        this.decorationPointsArray = [];
    }
    /**
     * @param {?} sparklineCanvas
     * @param {?} lineColor
     * @return {?}
     */
    LineService.prototype.draw = /**
     * @param {?} sparklineCanvas
     * @param {?} lineColor
     * @return {?}
     */
    function (sparklineCanvas, lineColor) {
        /** @type {?} */
        var ctx = sparklineCanvas.nativeElement.getContext('2d');
        // Draw
        ctx.fillStyle = lineColor;
        ctx.fillRect(20, 20, 150, 100);
    };
    /**
     * @return {?}
     */
    LineService.handleMouseOut = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tooltip = document.getElementById('rms-sparkline-inline-tooltip');
        if (tooltip) {
            // console.log(`SparklineLine::handleMouseMove deleting tooltip`);
            tooltip.parentElement.removeChild(tooltip);
        }
    };
    /**
     * @param {?} className
     * @param {?} decorationPoints
     * @param {?} dotRadius
     * @param {?} height
     * @param {?} lineColor
     * @param {?} linePoints
     * @param {?} lineWidth
     * @param {?} shadeColor
     * @param {?} sparklineCanvas
     * @param {?} width
     * @return {?}
     */
    LineService.prototype.draw1 = /**
     * @param {?} className
     * @param {?} decorationPoints
     * @param {?} dotRadius
     * @param {?} height
     * @param {?} lineColor
     * @param {?} linePoints
     * @param {?} lineWidth
     * @param {?} shadeColor
     * @param {?} sparklineCanvas
     * @param {?} width
     * @return {?}
     */
    function (className, decorationPoints, dotRadius, height, lineColor, linePoints, lineWidth, shadeColor, sparklineCanvas, width) {
        // Save attributes
        this.attributes['className'] = className;
        this.attributes['decorationPoints'] = decorationPoints;
        this.attributes['dotRadius'] = dotRadius;
        this.attributes['height'] = height;
        this.attributes['lineColor'] = lineColor;
        this.attributes['linePoints'] = linePoints;
        this.attributes['lineWidth'] = lineWidth;
        this.attributes['shadeColor'] = shadeColor;
        this.attributes['sparklineCanvas'] = sparklineCanvas;
        this.attributes['width'] = width;
        console.log("LineService::draw ctx: " + this.attributes.ctx);
        console.log("LineService::draw className: " + this.attributes.className);
        console.log("LineService::draw decorationPoints: " + JSON.stringify(this.attributes.decorationPoints));
        console.log("LineService::draw dotRadius: " + this.attributes.dotRadius);
        console.log("LineService::draw height: " + this.attributes.height);
        console.log("LineService::draw lineColor: " + this.attributes.lineColor);
        console.log("LineService::draw linePoints: " + JSON.stringify(this.attributes.linePoints));
        console.log("LineService::draw lineWidth: " + this.attributes.lineWidth);
        console.log("LineService::draw shadeColor: " + this.attributes.shadeColor);
        console.log("LineService::draw toolTip: " + this.attributes.toolTip);
        console.log("LineService::draw width: " + this.attributes.width);
        /** @type {?} */
        var ctx = sparklineCanvas.nativeElement.getContext('2d');
        /**
         * Build coordinatesWorld
         *
         * Note thatwe add the 0 point the start, and the zero point at the end.
         * This is required for the proper drawing of the shade if necessary. These point
         * are removed before the actual line is drawn
         */
        this.measurementsArray = this.attributes.linePoints.slice(0);
        this.coordinatesWorld = [];
        for (var i = 0; i < this.measurementsArray.length; i++) {
            this.coordinatesWorld.push([i, this.measurementsArray[i], 1]);
            // console.log(`coordinatesWorld(` + i +`): ` + JSON.stringify(this.coordinatesWorld[i]));
        }
        // console.log(`coordinatesWorld: ` + JSON.stringify(this.coordinatesWorld));
        /**
         * Build coordinatesViewPort
         * The sparkline is drawn on the canvas viewport, a subset of the canvas
         * drawing area, with padding between the two to make room for drawing
         * decoration shapes, when necessary.
         */
        this.coordinatesViewport = [];
        /** @type {?} */
        var sX = (this.attributes.width - this.attributes.dotRadius * 2) / this.measurementsArray.length;
        /** @type {?} */
        var sY = (this.attributes.height - this.attributes.dotRadius * 2) / Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.measurementsArray));
        /** @type {?} */
        var worldToViewport = [[sX, 0, 0], [0, sY, 0], [0, 0, 1]];
        for (var i = 0; i < this.measurementsArray.length; i++) {
            // From world to viewport
            /** @type {?} */
            var temp1 = Object(mathjs__WEBPACK_IMPORTED_MODULE_2__["multiply"])(this.coordinatesWorld[i], worldToViewport);
            // console.log(`coordinatesViewport temp1(` + i +`): ` + JSON.stringify(temp1));
            this.coordinatesViewport.push(temp1);
        }
        // console.log(`coordinatesViewport: ` + JSON.stringify(this.coordinatesViewport));
        /**
         * Build coordinatesCanvas
         * The world coordinates origin is at the bottom left, whereas the canvas and
         * canvasViewport coordinates origin is at the top left, requiring the
         * translation from bottom left to top left origin.
         *
         * Since canvas drawing always uses the canvas coordinates and the
         * canvasViewport amounts to a padding around the canvas, a translation is
         * required to move the canvasViewport coordinates:
         */
        this.coordinatesCanvas = [];
        /** @type {?} */
        var dX = this.attributes.dotRadius;
        /** @type {?} */
        var myHeight = this.attributes.height - this.attributes.dotRadius;
        /** @type {?} */
        var bottomLeftToTopLeft = [[1, 0, 0], [0, 1, 0], [dX, 0, 1]];
        for (var i = 0; i < this.measurementsArray.length; i++) {
            // Tricky calculation ... we want the delta to move the current coordinate
            // const dY = myHeight - 2 * this.coordinatesViewport[i][1];
            // console.log(`coordinatesCanvas dY(` + i +`): ` + myHeight - 2 * this.coordinatesViewport[i][1]);
            bottomLeftToTopLeft[2][1] = myHeight - 2 * this.coordinatesViewport[i][1];
            // console.log(`coordinatesCanvas bottomLeftToTopLeft(` + i +`): ` + JSON.stringify(bottomLeftToTopLeft));
            this.coordinatesCanvas.push(Object(mathjs__WEBPACK_IMPORTED_MODULE_2__["multiply"])(this.coordinatesViewport[i], bottomLeftToTopLeft));
        }
        // console.log(`coordinatesViewport: ` + JSON.stringify(this.coordinatesViewport));
        /**
         * Now we draw the sparkline, in the following order
         * - Shaded ared
         * - line
         * - decorations
         */
        ctx.clearRect(0, 0, this.attributes.width, this.attributes.height);
        // console.log(`shadeColor: ` + this.attributes.shadeColor);
        if (this.attributes.shadeColor) {
            // Fill up the area
            ctx.beginPath();
            ctx.fillStyle = this.attributes.shadeColor;
            ctx.moveTo(this.coordinatesCanvas[0][0], this.attributes.height);
            for (var i = 0; i < this.measurementsArray.length; i++) {
                ctx.lineTo(this.coordinatesCanvas[i][0], this.coordinatesCanvas[i][1]);
                // console.log(`drawing(` + i +`): ` + JSON.stringify(this.coordinatesCanvas[i]));
            }
            ctx.lineTo(this.coordinatesCanvas[this.measurementsArray.length - 1][0], this.attributes.height);
            ctx.fill();
        }
        // Draw the path, on top of the shade area
        // https://www.w3schools.com/graphics/canvas_coordinates.asp
        ctx.beginPath();
        ctx.lineWidth = this.attributes.lineWidth;
        ctx.strokeStyle = this.attributes.lineColor;
        ctx.moveTo(this.coordinatesCanvas[0][0], this.coordinatesCanvas[0][1]);
        for (var i = 1; i < this.measurementsArray.length; i++) {
            ctx.lineTo(this.coordinatesCanvas[i][0], this.coordinatesCanvas[i][1]);
            // console.log(`drawing(` + i +`): ` + JSON.stringify(this.coordinatesCanvas[i]));
        }
        ctx.stroke();
        /**
         * Draw decorations
         */
        this.decorationPointsArray = this.attributes.decorationPoints.slice(0);
        if (this.attributes.dotRadius > 0 && this.decorationPointsArray.length > 0) {
            // console.log('decorationPoints = ' + JSON.stringify(this.attributes.decorationPoints));
            for (var i = 0; i < this.decorationPointsArray.length; i++) {
                // todo: a hack to solve a problem when running inside vaadin-grid
                if (this.decorationPointsArray[i]['index'] > this.measurementsArray.length - 1) ;
                else {
                    ctx.beginPath();
                    /** @type {?} */
                    var index = this.decorationPointsArray[i]['index'];
                    ctx.arc(this.coordinatesCanvas[index][0], this.coordinatesCanvas[index][1], this.attributes.dotRadius, 0, Math.PI * 2);
                    ctx.fillStyle = this.decorationPointsArray[i]['color'];
                    ctx.fill();
                }
            }
        }
        /**
         * Add tooltip support.
         * Build coordinateScreen
         */
        // const rect: any = this.attributes.canvasEl.getBoundingClientRect();
        // console.log(`SparklineLine::canvasEl rect.left: ` + rect.left + `, rect.top: ` + rect.top);
        //
        // this.canvasScreenOffsetX = rect.left + window.pageXOffset || document.documentElement.scrollLeft;
        // this.canvasScreenOffsetY = rect.top + window.pageYOffset || document.documentElement.scrollTop;
        // console.log(`canvasScreenOffsetX: ` + this.canvasScreenOffsetX);
        // console.log(`canvasScreenOffsetY: ` + this.canvasScreenOffsetY);
        this.coordinatesTips = [];
        for (var i = 0; i < this.measurementsArray.length; i++) {
            this.coordinatesTips.push({
                x: this.coordinatesCanvas[i][0],
                y: this.coordinatesCanvas[i][1],
                r: 5,
                rXr: 25,
                color: 'red',
                tip: this.measurementsArray[i]
            });
            // console.log(`coordinatesTips(` + i +`): ` + JSON.stringify(this.coordinatesTips[i]));
        }
    };
    /**
     * Sparkline Inline Mouse Move Handler
     * @param $event
     * @param canvasEl
     */
    /**
     * Sparkline Inline Mouse Move Handler
     * @param {?} $event
     * @param {?} canvasEl
     * @return {?}
     */
    LineService.prototype.handleMouseMove = /**
     * Sparkline Inline Mouse Move Handler
     * @param {?} $event
     * @param {?} canvasEl
     * @return {?}
     */
    function ($event, canvasEl) {
        /** @type {?} */
        var body;
        /** @type {?} */
        var mySpan;
        /** @type {?} */
        var fontDefinition = '12px FUTURA';
        /** @type {?} */
        var width;
        /** @type {?} */
        var height;
        /** @type {?} */
        var scrollLeft;
        /** @type {?} */
        var scrollTop;
        /** @type {?} */
        var rect;
        /** @type {?} */
        var mouseX;
        /** @type {?} */
        var mouseY;
        /** @type {?} */
        var tooltip;
        // console.log(`\n`);
        // Get the position of the canvas element relative to the document
        // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
        rect = canvasEl.getBoundingClientRect();
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        rect = { left: rect.left + scrollLeft, top: rect.top + scrollTop };
        // Get the mouse coordinates relative to the canvas
        mouseX = $event.clientX - rect.left;
        mouseY = $event.clientY - rect.top;
        // Debug code
        // let msg: string;
        // msg = '';
        // msg += `rect.left: ` + rect.left.toFixed(2);
        // msg += `, rect.top: ` + rect.top.toFixed(2);
        // msg += `, rect.width: ` + rect.width.toFixed(2);
        // msg += `, rect.height: ` + rect.height.toFixed(2);
        // console.log(msg);
        // msg = '';
        // msg += `$event.clientX: ` + $event.clientX.toFixed(2);
        // msg += `, $event.clientY: ` + $event.clientY.toFixed(2);
        // console.log(msg);
        // msg = '';
        // msg += `dot.x: ` + this.coordinatesTips[0].x.toFixed(2);
        // msg += `, dot.y: ` + this.coordinatesTips[0].y.toFixed(2);
        // console.log(msg);
        // msg = '';
        // msg += `mouseX: ` + mouseX.toFixed(2);
        // msg += `, mouseY: ` + mouseY.toFixed(2);
        // console.log(msg);
        for (var i = 0; i < this.measurementsArray.length; i++) {
            /** @type {?} */
            var dot = this.coordinatesTips[i];
            /** @type {?} */
            var dx = mouseX - dot.x;
            /** @type {?} */
            var dy = mouseY - dot.y;
            // console.log(`SparklineLine::handleMouseMove dx: ` + Math.floor(dx) + `, dy: ` + Math.floor(dy) + `, dot.rXr: ` + dot.rXr);
            if (dx * dx + dy * dy < dot.rXr) {
                // console.log(`SparklineLine::handleMouseMove found a match`);
                // A trick to find the width of the canvas to host the tooltip
                mySpan = document.createElement('span');
                mySpan.id = 'mySpanId';
                mySpan.style.font = fontDefinition;
                mySpan.style.textAlign = 'center';
                mySpan.innerHTML = '' + this.measurementsArray[i];
                body = document.getElementsByTagName('body')[0];
                body.appendChild(mySpan);
                mySpan = document.getElementById('mySpanId');
                width = mySpan.getBoundingClientRect().width + 2;
                height = mySpan.getBoundingClientRect().height + 2;
                mySpan.parentElement.removeChild(mySpan);
                // console.log(`mySpan: ` + width);
                // Remove tooltip if already there
                tooltip = document.getElementById('rms-sparkline-inline-tooltip');
                if (tooltip) {
                    // console.log(`SparklineLine::handleMouseMove deleting tooltip`);
                    tooltip.parentElement.removeChild(tooltip);
                }
                // Add a new tooltip
                this.canvasTip = document.createElement('CANVAS');
                this.canvasTip.id = 'rms-sparkline-inline-tooltip';
                this.canvasTip.width = width;
                this.canvasTip.height = height;
                this.canvasTip.style.position = 'absolute';
                this.canvasTip.style.left = ($event.clientX + 5) + 'px';
                this.canvasTip.style.top = ($event.clientY + 7) + 'px';
                this.canvasTip.style.border = '1px solid';
                this.canvasTip.style.border = '1px solid';
                this.canvasTip.style.zIndex = '20';
                this.canvasTip.style.textAlign = 'center';
                /** @type {?} */
                var ctx = ((/** @type {?} */ (this.canvasTip))).getContext('2d');
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, width, height);
                ctx.fill();
                ctx.fillStyle = 'red';
                ctx.font = fontDefinition;
                ctx.fillText('' + this.measurementsArray[i], 1, height - 2);
                body = document.getElementsByTagName('body')[0];
                body.appendChild(this.canvasTip);
                break; // the first match gets the tooltip
            }
            else {
                // Remove tooltip if still there
                tooltip = document.getElementById('rms-sparkline-inline-tooltip');
                if (tooltip) {
                    // console.log(`SparklineLine::handleMouseMove deleting tooltip`);
                    tooltip.parentElement.removeChild(tooltip);
                }
            }
        }
    };
    LineService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LineService.ctorParameters = function () { return []; };
    /** @nocollapse */ LineService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function LineService_Factory() { return new LineService(); }, token: LineService, providedIn: "root" });
    return LineService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SparkLineComponent = /** @class */ (function () {
    function SparkLineComponent(lineService) {
        this.lineService = lineService;
    }
    // see https://blog.angular-university.io/angular-viewchild/
    // for recommendation to use ngAfterViewInit instead of ngOnInit
    // see https://blog.angular-university.io/angular-viewchild/
    // for recommendation to use ngAfterViewInit instead of ngOnInit
    /**
     * @return {?}
     */
    SparkLineComponent.prototype.ngAfterViewInit = 
    // see https://blog.angular-university.io/angular-viewchild/
    // for recommendation to use ngAfterViewInit instead of ngOnInit
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var decorationPoints = JSON.parse(this.decorationPointsString);
        /** @type {?} */
        var linePoints = JSON.parse(this.linePointsString);
        // this.lineService.draw(this.sparklineCanvas, this.lineColor);
        console.log('SparkLineComponent.ngAfterViewInit: about to call the line drawing');
        this.lineService.draw1(this.className, decorationPoints, this.dotRadius, this.height, this.lineColor, linePoints, this.lineWidth, this.shadeColor, this.sparklineCanvas, this.width);
    };
    SparkLineComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'rms-spark-line',
                    template: "<canvas #sparklineCanvas width=\"128\" height=\"64\"></canvas>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SparkLineComponent.ctorParameters = function () { return [
        { type: LineService }
    ]; };
    SparkLineComponent.propDecorators = {
        className: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        decorationPointsString: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['decorationPoints',] }],
        dotRadius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        lineColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        linePointsString: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['linePoints',] }],
        lineWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        shadeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        sparklineCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['sparklineCanvas',] }]
    };
    return SparkLineComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        SparkBarchartComponent,
                        SparkBoxplotComponent,
                        SparkLineComponent,
                    ],
                    imports: [],
                    exports: [
                        SparkBarchartComponent,
                        SparkBoxplotComponent,
                        SparkLineComponent,
                    ]
                },] }
    ];
    return LibraryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=library.js.map

/***/ }),

/***/ "../../dist/library/library.ngfactory.js":
/*!**************************************************************************************************!*\
  !*** /home/travis/build/RodrigoMattosoSilveira/rms-sparklines/dist/library/library.ngfactory.js ***!
  \**************************************************************************************************/
/*! exports provided: LibraryModuleNgFactory, RenderType_SparkBarchartComponent, View_SparkBarchartComponent_0, View_SparkBarchartComponent_Host_0, SparkBarchartComponentNgFactory, RenderType_SparkBoxplotComponent, View_SparkBoxplotComponent_0, View_SparkBoxplotComponent_Host_0, SparkBoxplotComponentNgFactory, RenderType_SparkLineComponent, View_SparkLineComponent_0, View_SparkLineComponent_Host_0, SparkLineComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryModuleNgFactory", function() { return LibraryModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SparkBarchartComponent", function() { return RenderType_SparkBarchartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SparkBarchartComponent_0", function() { return View_SparkBarchartComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SparkBarchartComponent_Host_0", function() { return View_SparkBarchartComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkBarchartComponentNgFactory", function() { return SparkBarchartComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SparkBoxplotComponent", function() { return RenderType_SparkBoxplotComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SparkBoxplotComponent_0", function() { return View_SparkBoxplotComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SparkBoxplotComponent_Host_0", function() { return View_SparkBoxplotComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkBoxplotComponentNgFactory", function() { return SparkBoxplotComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SparkLineComponent", function() { return RenderType_SparkLineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SparkLineComponent_0", function() { return View_SparkLineComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SparkLineComponent_Host_0", function() { return View_SparkLineComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkLineComponentNgFactory", function() { return SparkLineComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! library */ "../../dist/library/fesm5/library.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var LibraryModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](library__WEBPACK_IMPORTED_MODULE_1__["LibraryModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, library__WEBPACK_IMPORTED_MODULE_1__["LibraryModule"], library__WEBPACK_IMPORTED_MODULE_1__["LibraryModule"], [])]); });

var styles_SparkBarchartComponent = [""];
var RenderType_SparkBarchartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_SparkBarchartComponent, data: {} });

function View_SparkBarchartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { sparklineCanvas: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [[1, 0], ["sparklineCanvas", 1]], null, 0, "canvas", [["height", "64"], ["width", "128"]], null, null, null, null, null))], null, null); }
function View_SparkBarchartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "rms-spark-barchart", [], null, null, null, View_SparkBarchartComponent_0, RenderType_SparkBarchartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4243456, null, 0, library__WEBPACK_IMPORTED_MODULE_1__["SparkBarchartComponent"], [library__WEBPACK_IMPORTED_MODULE_1__["ɵa"]], null, null)], null, null); }
var SparkBarchartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("rms-spark-barchart", library__WEBPACK_IMPORTED_MODULE_1__["SparkBarchartComponent"], View_SparkBarchartComponent_Host_0, { lineColor: "spark_color" }, {}, []);

var styles_SparkBoxplotComponent = [""];
var RenderType_SparkBoxplotComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_SparkBoxplotComponent, data: {} });

function View_SparkBoxplotComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { sparklineCanvas: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [[1, 0], ["sparklineCanvas", 1]], null, 0, "canvas", [["height", "64"], ["width", "128"]], null, null, null, null, null))], null, null); }
function View_SparkBoxplotComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "rms-spark-boxplot", [], null, null, null, View_SparkBoxplotComponent_0, RenderType_SparkBoxplotComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4243456, null, 0, library__WEBPACK_IMPORTED_MODULE_1__["SparkBoxplotComponent"], [library__WEBPACK_IMPORTED_MODULE_1__["ɵb"]], null, null)], null, null); }
var SparkBoxplotComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("rms-spark-boxplot", library__WEBPACK_IMPORTED_MODULE_1__["SparkBoxplotComponent"], View_SparkBoxplotComponent_Host_0, { lineColor: "spark_color" }, {}, []);

var styles_SparkLineComponent = [""];
var RenderType_SparkLineComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_SparkLineComponent, data: {} });

function View_SparkLineComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { sparklineCanvas: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [[1, 0], ["sparklineCanvas", 1]], null, 0, "canvas", [["height", "64"], ["width", "128"]], null, null, null, null, null))], null, null); }
function View_SparkLineComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "rms-spark-line", [], null, null, null, View_SparkLineComponent_0, RenderType_SparkLineComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4243456, null, 0, library__WEBPACK_IMPORTED_MODULE_1__["SparkLineComponent"], [library__WEBPACK_IMPORTED_MODULE_1__["ɵc"]], null, null)], null, null); }
var SparkLineComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("rms-spark-line", library__WEBPACK_IMPORTED_MODULE_1__["SparkLineComponent"], View_SparkLineComponent_Host_0, { className: "className", decorationPointsString: "decorationPoints", dotRadius: "dotRadius", height: "height", lineColor: "lineColor", linePointsString: "linePoints", lineWidth: "lineWidth", shadeColor: "shadeColor", width: "width" }, {}, []);



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _barchart_barchart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barchart/barchart.component */ "./src/app/barchart/barchart.component.ts");
/* harmony import */ var _boxplot_boxplot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boxplot/boxplot.component */ "./src/app/boxplot/boxplot.component.ts");
/* harmony import */ var _inline_inline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline/inline.component */ "./src/app/inline/inline.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");





var appRoutes = [
    { path: 'home', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"] },
    { path: 'barchart', component: _barchart_barchart_component__WEBPACK_IMPORTED_MODULE_1__["BarchartComponent"] },
    { path: 'boxplot', component: _boxplot_boxplot_component__WEBPACK_IMPORTED_MODULE_2__["BoxplotComponent"] },
    { path: 'inline', component: _inline_inline_component__WEBPACK_IMPORTED_MODULE_3__["InlineComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9saXZpbmctc3R5bGUtZ3VpZGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/list/typings/index.ngfactory */ "../../node_modules/@angular/material/list/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "../../node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */ "../../node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/sidenav/typings/index.ngfactory */ "../../node_modules/@angular/material/sidenav/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, { _icon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 1, 5, "h4", [["class", "mat-line"], ["mat-line", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, [[4, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatLine"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "a", [["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, 0, ["", ""]))], function (_ck, _v) { var currVal_8 = _v.context.$implicit.routeLink; _ck(_v, 9, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._icon); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).tabIndex || 0)); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled || null); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled.toString(); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._animationMode === "NoopAnimations"); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).target; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).href; _ck(_v, 7, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _v.context.$implicit.name; _ck(_v, 10, 0, currVal_9); }); }
function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]], { color: [0, "color"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _toolbarRows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 1, 13, "mat-toolbar-row", [["class", "mat-toolbar-row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, [[1, 4]], 0, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "a", [["class", "toolbar-home-link"], ["href", ""], ["id", "myTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SPARKLINES"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["style", "font-size: 60%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, [" v", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "span", [["class", "example-fill-remaining-space"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "img", [["alt", "Rodrigo Silveira"], ["class", "rms-mat-card-avatar"], ["src", "../assets/images/Rodrigo_Cropped.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "a", [["href", "https://www.linkedin.com/in/rodrigomattososilveira/"], ["mat-button", ""], ["target", "_blank"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Rodrigo Silveira"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 15, "mat-drawer-container", [["class", "sidenav-container mat-drawer-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatDrawerContainer_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatDrawerContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatDrawerContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]], [2, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ViewportRuler"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _drawers: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _content: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 7, "mat-drawer", [["class", "mat-drawer"], ["mode", "side"], ["opened", ""], ["tabIndex", "-1"]], [[40, "@transform", 0], [1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) { var ad = true; if (("component:@transform.start" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._animationStarted.next($event) !== false);
        ad = (pd_0 && ad);
    } if (("component:@transform.done" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._animationEnd.next($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatDrawer_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatDrawer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 3325952, [[2, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatDrawer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]], { mode: [0, "mode"], opened: [1, "opened"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sparklines"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 3, "mat-list", [["class", "mat-list mat-list-base"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 1, 3, "mat-drawer-content", [["class", "mat-drawer-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatDrawerContent_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatDrawerContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 1294336, [[3, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatDrawerContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatDrawerContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 16777216, null, 0, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "primary"; _ck(_v, 1, 0, currVal_2); _ck(_v, 18, 0); var currVal_15 = "side"; var currVal_16 = ""; _ck(_v, 22, 0, currVal_15, currVal_16); var currVal_17 = _co.sparklines; _ck(_v, 28, 0, currVal_17); _ck(_v, 30, 0); _ck(_v, 32, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length > 0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length === 0); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _co.version; _ck(_v, 9, 0, currVal_3); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).tabIndex || 0)); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).disabled || null); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).disabled.toString(); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._animationMode === "NoopAnimations"); _ck(_v, 14, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._backdropOverride; _ck(_v, 17, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._animationState; var currVal_10 = null; var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).position === "end"); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).mode === "over"); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).mode === "push"); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).mode === "side"); _ck(_v, 21, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._container._contentMargins.left; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._container._contentMargins.right; _ck(_v, 29, 0, currVal_18, currVal_19); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'living-style-guide';
        this.version = "0.3.0";
        this.sparklines = [
            {
                name: 'Bar Chart',
                icon: '',
                routeLink: 'barchart'
            },
            {
                name: 'Boxplot Chart',
                icon: '',
                routeLink: 'boxplot'
            },
            {
                name: 'Inline',
                icon: '',
                routeLink: 'inline'
            },
        ];
    }
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "../../node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/datepicker/typings/index.ngfactory */ "../../node_modules/@angular/material/datepicker/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "../../node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */ "../../node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _landing_page_landing_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing-page/landing-page.component.ngfactory */ "./src/app/landing-page/landing-page.component.ngfactory.js");
/* harmony import */ var _barchart_barchart_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./barchart/barchart.component.ngfactory */ "./src/app/barchart/barchart.component.ngfactory.js");
/* harmony import */ var _boxplot_boxplot_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./boxplot/boxplot.component.ngfactory */ "./src/app/boxplot/boxplot.component.ngfactory.js");
/* harmony import */ var _inline_inline_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inline/inline.component.ngfactory */ "./src/app/inline/inline.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "../../node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/observers */ "../../node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/stepper */ "../../node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/animations/browser */ "../../node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/http */ "../../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./utils/services/living-style-guide.service */ "./src/app/utils/services/living-style-guide.service.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/button-toggle */ "../../node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/accordion */ "../../node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/expansion */ "../../node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/grid-list */ "../../node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/cdk/text-field */ "../../node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/slider */ "../../node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/cdk/stepper */ "../../node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _utils_angular_material_module_angular_material_module_module__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./utils/angular-material-module/angular-material-module.module */ "./src/app/utils/angular-material-module/angular-material-module.module.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _barchart_barchart_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./barchart/barchart.component */ "./src/app/barchart/barchart.component.ts");
/* harmony import */ var _boxplot_boxplot_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./boxplot/boxplot.component */ "./src/app/boxplot/boxplot.component.ts");
/* harmony import */ var _inline_inline_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./inline/inline.component */ "./src/app/inline/inline.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var library__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! library */ "../../dist/library/fesm5/library.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/esm5/keycodes.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











































































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatCalendarHeaderNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["TooltipComponentNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["SimpleSnackBarNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ɵEmptyOutletComponentNgFactory"], _landing_page_landing_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["LandingPageComponentNgFactory"], _barchart_barchart_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["BarchartComponentNgFactory"], _boxplot_boxplot_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["BoxplotComponentNgFactory"], _inline_inline_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["InlineComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["ɵd24"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortHeaderIntl"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperIntl"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MAT_STEPPER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_29__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_29__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_29__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_29__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_h"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_30__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_30__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_30__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_30__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_30__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_30__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_32__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_34__["BrowserXhr"], _angular_http__WEBPACK_IMPORTED_MODULE_34__["BrowserXhr"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_34__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_34__["BaseResponseOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_http__WEBPACK_IMPORTED_MODULE_34__["XSRFStrategy"], _angular_http__WEBPACK_IMPORTED_MODULE_34__["ɵangular_packages_http_http_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_34__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_34__["XHRBackend"], [_angular_http__WEBPACK_IMPORTED_MODULE_34__["BrowserXhr"], _angular_http__WEBPACK_IMPORTED_MODULE_34__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_34__["XSRFStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_34__["RequestOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_34__["BaseRequestOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_http__WEBPACK_IMPORTED_MODULE_34__["Http"], _angular_http__WEBPACK_IMPORTED_MODULE_34__["ɵangular_packages_http_http_b"], [_angular_http__WEBPACK_IMPORTED_MODULE_34__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_34__["RequestOptions"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_35__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_markdown__WEBPACK_IMPORTED_MODULE_36__["MarkdownService"], ngx_markdown__WEBPACK_IMPORTED_MODULE_36__["MarkdownService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], [2, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClient"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["DomSanitizer"], ngx_markdown__WEBPACK_IMPORTED_MODULE_36__["MarkedOptions"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_37__["LivingStyleGuideService"], _utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_37__["LivingStyleGuideService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_38__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_38__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_40__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_40__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_41__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_41__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_42__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_42__["MatButtonToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_43__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_43__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_45__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_45__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_46__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_46__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_47__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_47__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_48__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_48__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_49__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_49__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_51__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_51__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_52__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_52__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_53__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_53__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_54__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_54__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_55__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_55__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_56__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_56__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_57__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_57__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_58__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_58__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_59__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_59__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slider__WEBPACK_IMPORTED_MODULE_60__["MatSliderModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_60__["MatSliderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_61__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_61__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_62__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_62__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_63__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_63__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_64__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_64__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_65__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_65__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_66__["CdkStepperModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_66__["CdkStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _utils_angular_material_module_angular_material_module_module__WEBPACK_IMPORTED_MODULE_67__["AngularMaterialModuleModule"], _utils_angular_material_module_angular_material_module_module__WEBPACK_IMPORTED_MODULE_67__["AngularMaterialModuleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_i"](p0_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_platform_browser_platform_browser_j"](p1_0)]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_h"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_29__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_CONFIGURATION"], { enableTracing: false }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTES"], function () { return [[{ path: "home", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_68__["LandingPageComponent"] }, { path: "barchart", component: _barchart_barchart_component__WEBPACK_IMPORTED_MODULE_69__["BarchartComponent"] }, { path: "boxplot", component: _boxplot_boxplot_component__WEBPACK_IMPORTED_MODULE_70__["BoxplotComponent"] }, { path: "inline", component: _inline_inline_component__WEBPACK_IMPORTED_MODULE_71__["InlineComponent"] }, { path: "", redirectTo: "home", pathMatch: "full" }, { path: "**", redirectTo: "home", pathMatch: "full" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_29__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_72__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_72__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, library__WEBPACK_IMPORTED_MODULE_73__["LibraryModule"], library__WEBPACK_IMPORTED_MODULE_73__["LibraryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_http__WEBPACK_IMPORTED_MODULE_34__["HttpModule"], _angular_http__WEBPACK_IMPORTED_MODULE_34__["HttpModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_markdown__WEBPACK_IMPORTED_MODULE_36__["MarkdownModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_36__["MarkdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_45__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_74__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_markdown__WEBPACK_IMPORTED_MODULE_36__["MarkedOptions"], _app_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"], [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
var ɵ0 = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());




/***/ }),

/***/ "./src/app/barchart/barchart.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/barchart/barchart.component.css.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9saXZpbmctc3R5bGUtZ3VpZGUvc3JjL2FwcC9iYXJjaGFydC9iYXJjaGFydC5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/barchart/barchart.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/barchart/barchart.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_BarchartComponent, View_BarchartComponent_0, View_BarchartComponent_Host_0, BarchartComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BarchartComponent", function() { return RenderType_BarchartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BarchartComponent_0", function() { return View_BarchartComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BarchartComponent_Host_0", function() { return View_BarchartComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartComponentNgFactory", function() { return BarchartComponentNgFactory; });
/* harmony import */ var _barchart_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barchart.component.css.shim.ngstyle */ "./src/app/barchart/barchart.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../dist/library/library.ngfactory */ "../../dist/library/library.ngfactory.js");
/* harmony import */ var library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library */ "../../dist/library/fesm5/library.js");
/* harmony import */ var _barchart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./barchart.component */ "./src/app/barchart/barchart.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_BarchartComponent = [_barchart_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BarchartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BarchartComponent, data: {} });

function View_BarchartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rms-spark-barchart", [], null, null, null, _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SparkBarchartComponent_0"], _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SparkBarchartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, library__WEBPACK_IMPORTED_MODULE_3__["SparkBarchartComponent"], [library__WEBPACK_IMPORTED_MODULE_3__["ɵa"]], { lineColor: [0, "lineColor"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.app_color; _ck(_v, 1, 0, currVal_0); }, null); }
function View_BarchartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-barchart", [], null, null, null, View_BarchartComponent_0, RenderType_BarchartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _barchart_component__WEBPACK_IMPORTED_MODULE_4__["BarchartComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BarchartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-barchart", _barchart_component__WEBPACK_IMPORTED_MODULE_4__["BarchartComponent"], View_BarchartComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/barchart/barchart.component.ts":
/*!************************************************!*\
  !*** ./src/app/barchart/barchart.component.ts ***!
  \************************************************/
/*! exports provided: BarchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartComponent", function() { return BarchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var BarchartComponent = /** @class */ (function () {
    function BarchartComponent() {
        this.app_color = 'red';
    }
    BarchartComponent.prototype.ngOnInit = function () {
    };
    return BarchartComponent;
}());



/***/ }),

/***/ "./src/app/boxplot/boxplot-simple/boxplot-simple.component.css.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/boxplot/boxplot-simple/boxplot-simple.component.css.shim.ngstyle.js ***!
  \*************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9saXZpbmctc3R5bGUtZ3VpZGUvc3JjL2FwcC9ib3hwbG90L2JveHBsb3Qtc2ltcGxlL2JveHBsb3Qtc2ltcGxlLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/boxplot/boxplot-simple/boxplot-simple.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/boxplot/boxplot-simple/boxplot-simple.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_BoxplotSimpleComponent, View_BoxplotSimpleComponent_0, View_BoxplotSimpleComponent_Host_0, BoxplotSimpleComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BoxplotSimpleComponent", function() { return RenderType_BoxplotSimpleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BoxplotSimpleComponent_0", function() { return View_BoxplotSimpleComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BoxplotSimpleComponent_Host_0", function() { return View_BoxplotSimpleComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxplotSimpleComponentNgFactory", function() { return BoxplotSimpleComponentNgFactory; });
/* harmony import */ var _boxplot_simple_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxplot-simple.component.css.shim.ngstyle */ "./src/app/boxplot/boxplot-simple/boxplot-simple.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "../../node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../dist/library/library.ngfactory */ "../../dist/library/library.ngfactory.js");
/* harmony import */ var library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! library */ "../../dist/library/fesm5/library.js");
/* harmony import */ var _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/ngx-markdown/ngx-markdown.ngfactory */ "../../node_modules/ngx-markdown/ngx-markdown.ngfactory.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _boxplot_simple_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boxplot-simple.component */ "./src/app/boxplot/boxplot-simple/boxplot-simple.component.ts");
/* harmony import */ var _utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/services/living-style-guide.service */ "./src/app/utils/services/living-style-guide.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_BoxplotSimpleComponent = [_boxplot_simple_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BoxplotSimpleComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BoxplotSimpleComponent, data: {} });

function View_BoxplotSimpleComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "mat-card", [["class", "example-card mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 7, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title-rms mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sparkline type: Box Plot"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Chart type: Simple"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 9, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "rms-spark-boxplot", [], null, null, null, _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SparkBoxplotComponent_0"], _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SparkBoxplotComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4243456, null, 0, library__WEBPACK_IMPORTED_MODULE_5__["SparkBoxplotComponent"], [library__WEBPACK_IMPORTED_MODULE_5__["ɵb"]], { lineColor: [0, "lineColor"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Highlights"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "markdown", [], null, null, null, _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MarkdownComponent_0"], _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MarkdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 4767744, null, 0, ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            Move mouse alongside lines to see their values\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 6, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Source References"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "markdown", [], null, null, null, _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MarkdownComponent_0"], _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MarkdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 4767744, null, 0, ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, 0, ["\n            - [Component](", ")\n            - [Usage](", ")\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.app_color; _ck(_v, 14, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).align === "end"); _ck(_v, 20, 0, currVal_1); var currVal_2 = _co.branchURL_lib; var currVal_3 = _co.branchURL_lsg; _ck(_v, 26, 0, currVal_2, currVal_3); }); }
function View_BoxplotSimpleComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-boxplot-simple", [], null, null, null, View_BoxplotSimpleComponent_0, RenderType_BoxplotSimpleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _boxplot_simple_component__WEBPACK_IMPORTED_MODULE_8__["BoxplotSimpleComponent"], [_utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__["LivingStyleGuideService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BoxplotSimpleComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-boxplot-simple", _boxplot_simple_component__WEBPACK_IMPORTED_MODULE_8__["BoxplotSimpleComponent"], View_BoxplotSimpleComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/boxplot/boxplot-simple/boxplot-simple.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/boxplot/boxplot-simple/boxplot-simple.component.ts ***!
  \********************************************************************/
/*! exports provided: BoxplotSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxplotSimpleComponent", function() { return BoxplotSimpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/services/living-style-guide.service */ "./src/app/utils/services/living-style-guide.service.ts");


var BoxplotSimpleComponent = /** @class */ (function () {
    function BoxplotSimpleComponent(livingStyleGuideService) {
        this.livingStyleGuideService = livingStyleGuideService;
        this.app_color = 'blue';
        this.leaf_lib = 'projects/library/src/lib/spark-boxplot';
        this.leaf_lsg = 'projects/living-style-guide/src/app/boxplot/boxplot-simple';
        this.branchURL_lib = "";
        this.branchURL_lsg = "";
    }
    BoxplotSimpleComponent.prototype.ngOnInit = function () {
        this.branchURL_lib = this.livingStyleGuideService.branchURL(this.leaf_lib);
        this.branchURL_lsg = this.livingStyleGuideService.branchURL(this.leaf_lsg);
    };
    return BoxplotSimpleComponent;
}());



/***/ }),

/***/ "./src/app/boxplot/boxplot.component.css.shim.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/boxplot/boxplot.component.css.shim.ngstyle.js ***!
  \***************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9saXZpbmctc3R5bGUtZ3VpZGUvc3JjL2FwcC9ib3hwbG90L2JveHBsb3QuY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "./src/app/boxplot/boxplot.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/boxplot/boxplot.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_BoxplotComponent, View_BoxplotComponent_0, View_BoxplotComponent_Host_0, BoxplotComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BoxplotComponent", function() { return RenderType_BoxplotComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BoxplotComponent_0", function() { return View_BoxplotComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BoxplotComponent_Host_0", function() { return View_BoxplotComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxplotComponentNgFactory", function() { return BoxplotComponentNgFactory; });
/* harmony import */ var _boxplot_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxplot.component.css.shim.ngstyle */ "./src/app/boxplot/boxplot.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/tabs/typings/index.ngfactory */ "../../node_modules/@angular/material/tabs/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/grid-list/typings/index.ngfactory */ "../../node_modules/@angular/material/grid-list/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "../../node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _boxplot_simple_boxplot_simple_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./boxplot-simple/boxplot-simple.component.ngfactory */ "./src/app/boxplot/boxplot-simple/boxplot-simple.component.ngfactory.js");
/* harmony import */ var _boxplot_simple_boxplot_simple_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boxplot-simple/boxplot-simple.component */ "./src/app/boxplot/boxplot-simple/boxplot-simple.component.ts");
/* harmony import */ var _utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/services/living-style-guide.service */ "./src/app/utils/services/living-style-guide.service.ts");
/* harmony import */ var _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../node_modules/ngx-markdown/ngx-markdown.ngfactory */ "../../node_modules/ngx-markdown/ngx-markdown.ngfactory.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _boxplot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./boxplot.component */ "./src/app/boxplot/boxplot.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_BoxplotComponent = [_boxplot_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BoxplotComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BoxplotComponent, data: {} });

function View_BoxplotComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "mat-tab-group", [["animationDuration", "0ms"], ["class", "mat-tab-group"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTabGroup_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTabGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 3325952, null, 1, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MAT_TABS_CONFIG"]]], { animationDuration: [0, "animationDuration"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 16777216, null, null, 11, "mat-tab", [["label", "Examples"]], null, null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTab_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { textLabel: [0, "textLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 7, "mat-grid-list", [["class", "mat-grid-list"], ["cols", "3"], ["rowHeight", "400"]], null, null, null, _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatGridList_0"], _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatGridList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2211840, null, 1, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]]], { cols: [0, "cols"], rowHeight: [1, "rowHeight"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _tiles: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["ɵa8"], null, [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 3, "mat-grid-tile", [["class", "mat-grid-tile"]], null, null, null, _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatGridTile_0"], _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatGridTile"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 49152, [[4, 4]], 0, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["ɵa8"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 1, "app-boxplot-simple", [], null, null, null, _boxplot_simple_boxplot_simple_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_BoxplotSimpleComponent_0"], _boxplot_simple_boxplot_simple_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_BoxplotSimpleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, _boxplot_simple_boxplot_simple_component__WEBPACK_IMPORTED_MODULE_8__["BoxplotSimpleComponent"], [_utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__["LivingStyleGuideService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 16777216, null, null, 6, "mat-tab", [["label", "README"]], null, null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTab_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { textLabel: [0, "textLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 2, "markdown", [], null, null, null, _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MarkdownComponent_0"], _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MarkdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 4767744, null, 0, ngx_markdown__WEBPACK_IMPORTED_MODULE_11__["MarkdownComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_markdown__WEBPACK_IMPORTED_MODULE_11__["MarkdownService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            Description\n            ----\n            The `rms-spark-boxplot` Angular component renders distinct box plot chart types, as per the `chartType` attribute:\n            1. `simple`: The [box plot](http://www.physics.csbsju.edu/stats/box2.html) (a.k.a. box and whisker diagram) is a standardized way of displaying the distribution of data based on the five number summary: minimum, first quartile, median, third quartile, and maximum. The IQR, inter quartile range, is the set of population individuals between the first and third quartile.\n\n            #### Properties\n            * `axisColor: string`: The color to render the x-axis.\n            * `axisLineWidth: number`: The width to render the x-axis.\n            * `chartType: string`: The chart type, one of ['simple']\n            * `className: string`: A classe names to be added to the canvas element. Default is no classes.\n            * `height: number`: The height of the sparkline box in pixels.\n            * `highWhiskerColor: string`: The color to render the eastern whisker.\n            * `highWhiskerLineWidth: number`: The width to render the eastern whisker.\n            * `interQuartileRangeColor: string`: The color to render the IQR.\n            * `interQuartileRangeLineWidth: number`: The width to render the IQR.\n            * `interQuartileRangeFillColor: string`: The color to fill the IQR.\n            * `lowWhiskerColor: string`: The color to render the western whisker.\n            * `lowWhiskerLineWidth: number`: The width to render the western whisker.\n            * `medianWhiskerColor: string`: The color to render the median.\n            * `medianWhiskerLineWidth: number`: The width to render the median.\n            * `population: string`: The population for which the boxplot is being built.\n            * `width: number`: The width of the sparkline box in pixels.\n\n            #### barHeights\n            A JSON.stringfy'd string of a simple sequence of values representing the population for which to render the box plot:\n            ````typescript\n                population: string = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 5, 8 , 9, 7, 1]);\n            ````\n\n            #### Methods\n            none\n\n            #### Events Received\n            none\n\n            #### Events Emitted\n            none\n\n            ### Development\n\n            ### Usage\n            Below is example of a barchar sparkline. In this example, sparkline is being declared as a child of an Angular component, with its attribute values being set at the Angular's component controller.\n\n            ````html\n                 <rms-spark-boxplot\n                     [axisColor] = 'axisColor'\n                     [axisLineWidth] = 'axisLineWidth'\n                     [chartType] = 'chartType'\n                     [className] = 'className'\n                     [height] = 'height'\n                     [highWhiskerColor]  = 'highWhiskerColor'\n                     [highWhiskerLineWidth] = 'highWhiskerLineWidth'\n                     [interQuartileRangeColor] = 'interQuartileRangeColor'\n                     [interQuartileRangeLineWidth] = 'interQuartileRangeLineWidth'\n                     [interQuartileRangeFillColor] = 'interQuartileRangeFillColor'\n                     [lowWhiskerColor] = 'lowWhiskerColor'\n                     [lowWhiskerLineWidth] = 'lowWhiskerLineWidth'\n                     [medianColor] = 'medianColor'\n                     [medianLineWidth] = 'medianLineWidth'\n                     [population] = 'population'\n                     [width] = 'width'\n                 >\n                </rms-spark-boxplot>\n            ````\n\n            See the style guide application source code, [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide) for usage details.\n\n            # Last but not least\n            ````html\n             _   _                   _____\n            | | | | __ ___   _____  |  ___|   _ _ __\n            | |_| |/ _` \\ \\ / / _ \\ | |_ | | | | '_ \\\n            |  _  | (_| |\\ V /  __/ |  _|| |_| | | | |\n            |_| |_|\\__,_| \\_/ \\___| |_|   \\__,_|_| |_|\n            ````\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 16777216, null, null, 4, "mat-tab", [["label", "TBD"]], null, null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTab_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { textLabel: [0, "textLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 7, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["TBD"]))], function (_ck, _v) { var currVal_2 = "0ms"; _ck(_v, 1, 0, currVal_2); var currVal_3 = "Examples"; _ck(_v, 4, 0, currVal_3); var currVal_4 = "3"; var currVal_5 = "400"; _ck(_v, 8, 0, currVal_4, currVal_5); _ck(_v, 14, 0); var currVal_6 = "README"; _ck(_v, 16, 0, currVal_6); var currVal_7 = "TBD"; _ck(_v, 23, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dynamicHeight; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).headerPosition === "below"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_BoxplotComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-boxplot", [], null, null, null, View_BoxplotComponent_0, RenderType_BoxplotComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _boxplot_component__WEBPACK_IMPORTED_MODULE_12__["BoxplotComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BoxplotComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-boxplot", _boxplot_component__WEBPACK_IMPORTED_MODULE_12__["BoxplotComponent"], View_BoxplotComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/boxplot/boxplot.component.ts":
/*!**********************************************!*\
  !*** ./src/app/boxplot/boxplot.component.ts ***!
  \**********************************************/
/*! exports provided: BoxplotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxplotComponent", function() { return BoxplotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var BoxplotComponent = /** @class */ (function () {
    function BoxplotComponent() {
    }
    BoxplotComponent.prototype.ngOnInit = function () {
    };
    return BoxplotComponent;
}());



/***/ }),

/***/ "./src/app/inline/inline.component.css.shim.ngstyle.js":
/*!*************************************************************!*\
  !*** ./src/app/inline/inline.component.css.shim.ngstyle.js ***!
  \*************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9saXZpbmctc3R5bGUtZ3VpZGUvc3JjL2FwcC9pbmxpbmUvaW5saW5lLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/inline/inline.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/inline/inline.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_InlineComponent, View_InlineComponent_0, View_InlineComponent_Host_0, InlineComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_InlineComponent", function() { return RenderType_InlineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InlineComponent_0", function() { return View_InlineComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InlineComponent_Host_0", function() { return View_InlineComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineComponentNgFactory", function() { return InlineComponentNgFactory; });
/* harmony import */ var _inline_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inline.component.css.shim.ngstyle */ "./src/app/inline/inline.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/tabs/typings/index.ngfactory */ "../../node_modules/@angular/material/tabs/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/grid-list/typings/index.ngfactory */ "../../node_modules/@angular/material/grid-list/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "../../node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _spark_line_simple_spark_line_simple_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spark-line-simple/spark-line-simple.component.ngfactory */ "./src/app/inline/spark-line-simple/spark-line-simple.component.ngfactory.js");
/* harmony import */ var _spark_line_simple_spark_line_simple_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spark-line-simple/spark-line-simple.component */ "./src/app/inline/spark-line-simple/spark-line-simple.component.ts");
/* harmony import */ var _utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/services/living-style-guide.service */ "./src/app/utils/services/living-style-guide.service.ts");
/* harmony import */ var _spark_line_decoration_spark_line_decoration_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spark-line-decoration/spark-line-decoration.component.ngfactory */ "./src/app/inline/spark-line-decoration/spark-line-decoration.component.ngfactory.js");
/* harmony import */ var _spark_line_decoration_spark_line_decoration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spark-line-decoration/spark-line-decoration.component */ "./src/app/inline/spark-line-decoration/spark-line-decoration.component.ts");
/* harmony import */ var _spark_line_shade_spark_line_shade_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spark-line-shade/spark-line-shade.component.ngfactory */ "./src/app/inline/spark-line-shade/spark-line-shade.component.ngfactory.js");
/* harmony import */ var _spark_line_shade_spark_line_shade_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./spark-line-shade/spark-line-shade.component */ "./src/app/inline/spark-line-shade/spark-line-shade.component.ts");
/* harmony import */ var _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../node_modules/ngx-markdown/ngx-markdown.ngfactory */ "../../node_modules/ngx-markdown/ngx-markdown.ngfactory.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _inline_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inline.component */ "./src/app/inline/inline.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_InlineComponent = [_inline_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_InlineComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_InlineComponent, data: {} });

function View_InlineComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 34, "mat-tab-group", [["animationDuration", "0ms"], ["class", "mat-tab-group"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTabGroup_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTabGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 3325952, null, 1, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MAT_TABS_CONFIG"]]], { animationDuration: [0, "animationDuration"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 16777216, null, null, 19, "mat-tab", [["label", "Examples"]], null, null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTab_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { textLabel: [0, "textLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 15, "mat-grid-list", [["class", "mat-grid-list"], ["cols", "3"], ["rowHeight", "400"]], null, null, null, _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatGridList_0"], _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatGridList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 2211840, null, 1, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]]], { cols: [0, "cols"], rowHeight: [1, "rowHeight"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _tiles: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["ɵa8"], null, [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 3, "mat-grid-tile", [["class", "mat-grid-tile"]], null, null, null, _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatGridTile_0"], _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatGridTile"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 49152, [[4, 4]], 0, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["ɵa8"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 1, "app-spark-line-simple", [], null, null, null, _spark_line_simple_spark_line_simple_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_SparkLineSimpleComponent_0"], _spark_line_simple_spark_line_simple_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_SparkLineSimpleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, _spark_line_simple_spark_line_simple_component__WEBPACK_IMPORTED_MODULE_8__["SparkLineSimpleComponent"], [_utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__["LivingStyleGuideService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 3, "mat-grid-tile", [["class", "mat-grid-tile"]], null, null, null, _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatGridTile_0"], _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatGridTile"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 49152, [[4, 4]], 0, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["ɵa8"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 1, "app-spark-line-decoration", [], null, null, null, _spark_line_decoration_spark_line_decoration_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_SparkLineDecorationComponent_0"], _spark_line_decoration_spark_line_decoration_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_SparkLineDecorationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 114688, null, 0, _spark_line_decoration_spark_line_decoration_component__WEBPACK_IMPORTED_MODULE_11__["SparkLineDecorationComponent"], [_utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__["LivingStyleGuideService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 3, "mat-grid-tile", [["class", "mat-grid-tile"]], null, null, null, _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatGridTile_0"], _node_modules_angular_material_grid_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatGridTile"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 49152, [[4, 4]], 0, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["ɵa8"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 1, "app-spark-line-shade", [], null, null, null, _spark_line_shade_spark_line_shade_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_SparkLineShadeComponent_0"], _spark_line_shade_spark_line_shade_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_SparkLineShadeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 114688, null, 0, _spark_line_shade_spark_line_shade_component__WEBPACK_IMPORTED_MODULE_13__["SparkLineShadeComponent"], [_utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__["LivingStyleGuideService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 16777216, null, null, 6, "mat-tab", [["label", "README"]], null, null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTab_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { textLabel: [0, "textLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 2, "markdown", [], null, null, null, _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MarkdownComponent_0"], _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MarkdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 4767744, null, 0, ngx_markdown__WEBPACK_IMPORTED_MODULE_15__["MarkdownComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_markdown__WEBPACK_IMPORTED_MODULE_15__["MarkdownService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n        Description\n        ----\n        The `<rms-spark-line>` Angular custom component renders a simple sparkline including the following elements:\n        * a line\n        * optional decorating points, drawn along the line, e.g. min / max / start / end / alert. etc.\n        * an optional dropdown shade\n\n        The `<rms-spark-line>` Angular custom component renders the following  sparkline variations:\n        1. `simple`: A simple line, all points positive\n        1. `decorated`:  A simple line, all points positive, with decoration points alongside the line.\n        1. `shade`: Dual charts' bars heights are negative, zero, or positive, with a positive height bars drawn northward and negative ones southward.\n\n        ### Usage\n\n        Below is example of a sparkline inline drawn without a shade and with decorationpoints.\n        ````html\n          <rms-sparkline-inline>\n              [className]=\"className\"\n              [decorationPoints]=\"decorationPoints\"\n              [dotRadius]=\"dotRadius\"\n              [lineColor]=\"lineColor\"\n              [linePoints]=\"linePoints\"\n              [lineWidth]=\"lineWidth\"\n              [height]=\"height\"\n              [shadeColor]=\"shadeColor\"\n              [width]=\"width\"\n          >\n          </rms-sparkline-inline>\n        ````\n\n        ### Properties\n        * `className: string`: The classe names to be added to the canvas element. Default is no classes;\n        * `decorationPoints: string` An array of objects describing decoration points,  e.g. min / max / start / end / alert. etc. See below for formating details;\n        * `dotRadius: Number`: The size of the decoration dots;\n        * `lineColor: string`: The color of the sparkline; any valid CSS color;\n        * `linePoints: string`: An array of numbers representing the sparkline data source. Default is empty array. See below for formating details;\n        * `lineWidth: number`: A number giving the stroke of the line in pixels. Default is 1;\n        * `width: number`: The width of the sparkline box in pixels;\n        * `shadeColor: string`: The color of to shade the area underneath the sparkline;\n        * `height: number`: The height of the sparkline box in pixels;\n\n        #### linePoints\n        A JOSN.stringfy'd string of a simple sequence of values representing f(x), with x being equally spaced units across the horizontal axis, as for instance:\n        ````typescript\n          linePoints: string = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 5, 8 , 9, 7, 1]);\n        ````\n\n        Assuming the default width, 64 pixels, fifteen segments would will be drawn, four pixels wide. There are two decorations this example, one red dot indexed to be drawn over the line point of index 0 and one black dot indexed to be drawn over the line point of index 15. Considering the linepoints example above, these decorations would represent the sparkline's start and end points.\n\n        #### decorationPoints\n        A JOSN.stringfy'd string array of objectss describing the decoration points, as for instance the first point of the line and the last point of the line:\n        ````typescript\n        	decorationPoints: string = decorationPoints = JSON.stringify(\n            [\n                {index: 0, color: 'red'},\n                {index: 11, color: 'black}'\n            ]);\n        ````\n\n        ### Methods\n        none\n\n        ### Events Received\n        none\n\n        ### Events Emitted\n        none\n\n        # Last but not least\n        ````html\n        _   _                   _____\n        | | | | __ ___   _____  |  ___|   _ _ __\n        | |_| |/ _` \\ \\ / / _ \\ | |_ | | | | '_ \\\n        |  _  | (_| |\\ V /  __/ |  _|| |_| | | | |\n        |_| |_|\\__,_| \\_/ \\___| |_|   \\__,_|_| |_|\n        ````\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 16777216, null, null, 4, "mat-tab", [["label", "TBD"]], null, null, null, _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTab_0"], _node_modules_angular_material_tabs_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { textLabel: [0, "textLabel"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 7, { templateLabel: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { _explicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["TBD"]))], function (_ck, _v) { var currVal_2 = "0ms"; _ck(_v, 1, 0, currVal_2); var currVal_3 = "Examples"; _ck(_v, 4, 0, currVal_3); var currVal_4 = "3"; var currVal_5 = "400"; _ck(_v, 8, 0, currVal_4, currVal_5); _ck(_v, 14, 0); _ck(_v, 18, 0); _ck(_v, 22, 0); var currVal_6 = "README"; _ck(_v, 24, 0, currVal_6); var currVal_7 = "TBD"; _ck(_v, 31, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dynamicHeight; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).headerPosition === "below"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_InlineComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-inline", [], null, null, null, View_InlineComponent_0, RenderType_InlineComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _inline_component__WEBPACK_IMPORTED_MODULE_16__["InlineComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var InlineComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-inline", _inline_component__WEBPACK_IMPORTED_MODULE_16__["InlineComponent"], View_InlineComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/inline/inline.component.ts":
/*!********************************************!*\
  !*** ./src/app/inline/inline.component.ts ***!
  \********************************************/
/*! exports provided: InlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineComponent", function() { return InlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var InlineComponent = /** @class */ (function () {
    function InlineComponent() {
        this.app_color = 'yellow';
    }
    InlineComponent.prototype.ngOnInit = function () {
    };
    return InlineComponent;
}());



/***/ }),

/***/ "./src/app/inline/spark-line-decoration/spark-line-decoration.component.css.shim.ngstyle.js":
/*!**************************************************************************************************!*\
  !*** ./src/app/inline/spark-line-decoration/spark-line-decoration.component.css.shim.ngstyle.js ***!
  \**************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9saXZpbmctc3R5bGUtZ3VpZGUvc3JjL2FwcC9pbmxpbmUvc3BhcmstbGluZS1kZWNvcmF0aW9uL3NwYXJrLWxpbmUtZGVjb3JhdGlvbi5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/inline/spark-line-decoration/spark-line-decoration.component.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/inline/spark-line-decoration/spark-line-decoration.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_SparkLineDecorationComponent, View_SparkLineDecorationComponent_0, View_SparkLineDecorationComponent_Host_0, SparkLineDecorationComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SparkLineDecorationComponent", function() { return RenderType_SparkLineDecorationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SparkLineDecorationComponent_0", function() { return View_SparkLineDecorationComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SparkLineDecorationComponent_Host_0", function() { return View_SparkLineDecorationComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkLineDecorationComponentNgFactory", function() { return SparkLineDecorationComponentNgFactory; });
/* harmony import */ var _spark_line_decoration_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spark-line-decoration.component.css.shim.ngstyle */ "./src/app/inline/spark-line-decoration/spark-line-decoration.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "../../node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../dist/library/library.ngfactory */ "../../dist/library/library.ngfactory.js");
/* harmony import */ var library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! library */ "../../dist/library/fesm5/library.js");
/* harmony import */ var _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/ngx-markdown/ngx-markdown.ngfactory */ "../../node_modules/ngx-markdown/ngx-markdown.ngfactory.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _spark_line_decoration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spark-line-decoration.component */ "./src/app/inline/spark-line-decoration/spark-line-decoration.component.ts");
/* harmony import */ var _utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/services/living-style-guide.service */ "./src/app/utils/services/living-style-guide.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_SparkLineDecorationComponent = [_spark_line_decoration_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SparkLineDecorationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SparkLineDecorationComponent, data: {} });

function View_SparkLineDecorationComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "mat-card", [["class", "example-card mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 7, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title-rms mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sparkline type: Line"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Chart type: Decorated"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 9, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "rms-spark-line", [], null, null, null, _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SparkLineComponent_0"], _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SparkLineComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4243456, null, 0, library__WEBPACK_IMPORTED_MODULE_5__["SparkLineComponent"], [library__WEBPACK_IMPORTED_MODULE_5__["ɵc"]], { className: [0, "className"], decorationPointsString: [1, "decorationPointsString"], dotRadius: [2, "dotRadius"], height: [3, "height"], lineColor: [4, "lineColor"], linePointsString: [5, "linePointsString"], lineWidth: [6, "lineWidth"], shadeColor: [7, "shadeColor"], width: [8, "width"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Highlights"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "markdown", [], null, null, null, _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MarkdownComponent_0"], _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MarkdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 4767744, null, 0, ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            Move mouse alongside lines to see their values\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 6, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Source References"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "markdown", [], null, null, null, _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MarkdownComponent_0"], _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MarkdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 4767744, null, 0, ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, 0, ["\n            - [Component](", ")\n            - [Usage](", ")\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.className; var currVal_1 = _co.decorationPoints; var currVal_2 = _co.dotRadius; var currVal_3 = _co.height; var currVal_4 = _co.lineColor; var currVal_5 = _co.linePoints; var currVal_6 = _co.lineWidth; var currVal_7 = _co.shadeColor; var currVal_8 = _co.width; _ck(_v, 14, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).align === "end"); _ck(_v, 20, 0, currVal_9); var currVal_10 = _co.branchURL_lib; var currVal_11 = _co.branchURL_lsg; _ck(_v, 26, 0, currVal_10, currVal_11); }); }
function View_SparkLineDecorationComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-spark-line-decoration", [], null, null, null, View_SparkLineDecorationComponent_0, RenderType_SparkLineDecorationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _spark_line_decoration_component__WEBPACK_IMPORTED_MODULE_8__["SparkLineDecorationComponent"], [_utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__["LivingStyleGuideService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SparkLineDecorationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-spark-line-decoration", _spark_line_decoration_component__WEBPACK_IMPORTED_MODULE_8__["SparkLineDecorationComponent"], View_SparkLineDecorationComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/inline/spark-line-decoration/spark-line-decoration.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/inline/spark-line-decoration/spark-line-decoration.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SparkLineDecorationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkLineDecorationComponent", function() { return SparkLineDecorationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/services/living-style-guide.service */ "./src/app/utils/services/living-style-guide.service.ts");


var SparkLineDecorationComponent = /** @class */ (function () {
    function SparkLineDecorationComponent(livingStyleGuideService) {
        this.livingStyleGuideService = livingStyleGuideService;
        // Class(es) to be added to the canvas element.
        this.className = '';
        // Decoration points objects
        this.decorationPoints = JSON.stringify([{ index: 0, color: 'red' }, { index: 11, color: 'black' }]);
        // A number giving the size of the dots used to mark important values.
        this.dotRadius = 1.5;
        // A number giving the height of the sparkline box in pixels. By default, uses the height of the Canvas element.
        this.height = 32;
        // A string giving the color of the sparkline. Any valid CSS color.
        this.lineColor = 'DarkGrey';
        // The sparkline data source
        this.linePoints = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9]);
        // A number giving the stroke of the line in pixels.
        this.lineWidth = 1.5;
        // A string giving the color of the dot marking the highest value. Any valid CSS color.
        this.shadeColor = '';
        // A number giving the width of the sparkline box in pixels.
        this.width = 128;
        this.leaf_lib = 'projects/library/src/lib/spark-line';
        this.leaf_lsg = 'projects/living-style-guide/src/app/inline/spark-line-decoration';
        this.branchURL_lib = "";
        this.branchURL_lsg = "";
    }
    SparkLineDecorationComponent.prototype.ngOnInit = function () {
        this.branchURL_lib = this.livingStyleGuideService.branchURL(this.leaf_lib);
        this.branchURL_lsg = this.livingStyleGuideService.branchURL(this.leaf_lsg);
    };
    return SparkLineDecorationComponent;
}());



/***/ }),

/***/ "./src/app/inline/spark-line-shade/spark-line-shade.component.css.shim.ngstyle.js":
/*!****************************************************************************************!*\
  !*** ./src/app/inline/spark-line-shade/spark-line-shade.component.css.shim.ngstyle.js ***!
  \****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9saXZpbmctc3R5bGUtZ3VpZGUvc3JjL2FwcC9pbmxpbmUvc3BhcmstbGluZS1zaGFkZS9zcGFyay1saW5lLXNoYWRlLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/inline/spark-line-shade/spark-line-shade.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/inline/spark-line-shade/spark-line-shade.component.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_SparkLineShadeComponent, View_SparkLineShadeComponent_0, View_SparkLineShadeComponent_Host_0, SparkLineShadeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SparkLineShadeComponent", function() { return RenderType_SparkLineShadeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SparkLineShadeComponent_0", function() { return View_SparkLineShadeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SparkLineShadeComponent_Host_0", function() { return View_SparkLineShadeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkLineShadeComponentNgFactory", function() { return SparkLineShadeComponentNgFactory; });
/* harmony import */ var _spark_line_shade_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spark-line-shade.component.css.shim.ngstyle */ "./src/app/inline/spark-line-shade/spark-line-shade.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "../../node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../dist/library/library.ngfactory */ "../../dist/library/library.ngfactory.js");
/* harmony import */ var library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! library */ "../../dist/library/fesm5/library.js");
/* harmony import */ var _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/ngx-markdown/ngx-markdown.ngfactory */ "../../node_modules/ngx-markdown/ngx-markdown.ngfactory.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _spark_line_shade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spark-line-shade.component */ "./src/app/inline/spark-line-shade/spark-line-shade.component.ts");
/* harmony import */ var _utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/services/living-style-guide.service */ "./src/app/utils/services/living-style-guide.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_SparkLineShadeComponent = [_spark_line_shade_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SparkLineShadeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SparkLineShadeComponent, data: {} });

function View_SparkLineShadeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "mat-card", [["class", "example-card mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 7, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title-rms mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sparkline type: Line"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Chart type: Shaded"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 9, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "rms-spark-line", [], null, null, null, _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SparkLineComponent_0"], _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SparkLineComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4243456, null, 0, library__WEBPACK_IMPORTED_MODULE_5__["SparkLineComponent"], [library__WEBPACK_IMPORTED_MODULE_5__["ɵc"]], { className: [0, "className"], decorationPointsString: [1, "decorationPointsString"], dotRadius: [2, "dotRadius"], height: [3, "height"], lineColor: [4, "lineColor"], linePointsString: [5, "linePointsString"], lineWidth: [6, "lineWidth"], shadeColor: [7, "shadeColor"], width: [8, "width"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Highlights"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "markdown", [], null, null, null, _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MarkdownComponent_0"], _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MarkdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 4767744, null, 0, ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            Move mouse alongside lines to see their values\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 6, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Source References"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "markdown", [], null, null, null, _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MarkdownComponent_0"], _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MarkdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 4767744, null, 0, ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, 0, ["\n            - [Component](", ")\n            - [Usage](", ")\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.className; var currVal_1 = _co.decorationPoints; var currVal_2 = _co.dotRadius; var currVal_3 = _co.height; var currVal_4 = _co.lineColor; var currVal_5 = _co.linePoints; var currVal_6 = _co.lineWidth; var currVal_7 = _co.shadeColor; var currVal_8 = _co.width; _ck(_v, 14, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).align === "end"); _ck(_v, 20, 0, currVal_9); var currVal_10 = _co.branchURL_lib; var currVal_11 = _co.branchURL_lsg; _ck(_v, 26, 0, currVal_10, currVal_11); }); }
function View_SparkLineShadeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-spark-line-shade", [], null, null, null, View_SparkLineShadeComponent_0, RenderType_SparkLineShadeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _spark_line_shade_component__WEBPACK_IMPORTED_MODULE_8__["SparkLineShadeComponent"], [_utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__["LivingStyleGuideService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SparkLineShadeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-spark-line-shade", _spark_line_shade_component__WEBPACK_IMPORTED_MODULE_8__["SparkLineShadeComponent"], View_SparkLineShadeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/inline/spark-line-shade/spark-line-shade.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/inline/spark-line-shade/spark-line-shade.component.ts ***!
  \***********************************************************************/
/*! exports provided: SparkLineShadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkLineShadeComponent", function() { return SparkLineShadeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/services/living-style-guide.service */ "./src/app/utils/services/living-style-guide.service.ts");


var SparkLineShadeComponent = /** @class */ (function () {
    function SparkLineShadeComponent(livingStyleGuideService) {
        this.livingStyleGuideService = livingStyleGuideService;
        // Class(es) to be added to the canvas element.
        this.className = '';
        // Decoration points objects
        this.decorationPoints = JSON.stringify([{ index: 0, color: 'red' }, { index: 11, color: 'black' }]);
        // A number giving the size of the dots used to mark important values.
        this.dotRadius = 1.5;
        // A number giving the height of the sparkline box in pixels. By default, uses the height of the Canvas element.
        this.height = 32;
        // A string giving the color of the sparkline. Any valid CSS color.
        this.lineColor = 'DarkGrey';
        // The sparkline data source
        this.linePoints = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9]);
        // A number giving the stroke of the line in pixels.
        this.lineWidth = 1.5;
        // A string giving the color of the dot marking the highest value. Any valid CSS color.
        this.shadeColor = "LightBlue";
        // A number giving the width of the sparkline box in pixels.
        this.width = 128;
        this.leaf_lib = 'pprojects/library/src/lib/spark-line';
        this.leaf_lsg = 'projects/living-style-guide/src/app/inline/spark-line-shade';
        this.branchURL_lib = "";
        this.branchURL_lsg = "";
    }
    SparkLineShadeComponent.prototype.ngOnInit = function () {
        this.branchURL_lib = this.livingStyleGuideService.branchURL(this.leaf_lib);
        this.branchURL_lsg = this.livingStyleGuideService.branchURL(this.leaf_lsg);
    };
    return SparkLineShadeComponent;
}());



/***/ }),

/***/ "./src/app/inline/spark-line-simple/spark-line-simple.component.css.shim.ngstyle.js":
/*!******************************************************************************************!*\
  !*** ./src/app/inline/spark-line-simple/spark-line-simple.component.css.shim.ngstyle.js ***!
  \******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9saXZpbmctc3R5bGUtZ3VpZGUvc3JjL2FwcC9pbmxpbmUvc3BhcmstbGluZS1zaW1wbGUvc3BhcmstbGluZS1zaW1wbGUuY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "./src/app/inline/spark-line-simple/spark-line-simple.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/inline/spark-line-simple/spark-line-simple.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_SparkLineSimpleComponent, View_SparkLineSimpleComponent_0, View_SparkLineSimpleComponent_Host_0, SparkLineSimpleComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SparkLineSimpleComponent", function() { return RenderType_SparkLineSimpleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SparkLineSimpleComponent_0", function() { return View_SparkLineSimpleComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SparkLineSimpleComponent_Host_0", function() { return View_SparkLineSimpleComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkLineSimpleComponentNgFactory", function() { return SparkLineSimpleComponentNgFactory; });
/* harmony import */ var _spark_line_simple_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spark-line-simple.component.css.shim.ngstyle */ "./src/app/inline/spark-line-simple/spark-line-simple.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "../../node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../dist/library/library.ngfactory */ "../../dist/library/library.ngfactory.js");
/* harmony import */ var library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! library */ "../../dist/library/fesm5/library.js");
/* harmony import */ var _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/ngx-markdown/ngx-markdown.ngfactory */ "../../node_modules/ngx-markdown/ngx-markdown.ngfactory.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _spark_line_simple_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spark-line-simple.component */ "./src/app/inline/spark-line-simple/spark-line-simple.component.ts");
/* harmony import */ var _utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/services/living-style-guide.service */ "./src/app/utils/services/living-style-guide.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_SparkLineSimpleComponent = [_spark_line_simple_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SparkLineSimpleComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SparkLineSimpleComponent, data: {} });

function View_SparkLineSimpleComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "mat-card", [["class", "example-card mat-card"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 7, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title-rms mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sparkline type: Line"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Chart type: Simple"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 9, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "rms-spark-line", [], null, null, null, _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SparkLineComponent_0"], _dist_library_library_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SparkLineComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4243456, null, 0, library__WEBPACK_IMPORTED_MODULE_5__["SparkLineComponent"], [library__WEBPACK_IMPORTED_MODULE_5__["ɵc"]], { className: [0, "className"], decorationPointsString: [1, "decorationPointsString"], dotRadius: [2, "dotRadius"], height: [3, "height"], lineColor: [4, "lineColor"], linePointsString: [5, "linePointsString"], lineWidth: [6, "lineWidth"], shadeColor: [7, "shadeColor"], width: [8, "width"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Highlights"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "markdown", [], null, null, null, _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MarkdownComponent_0"], _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MarkdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 4767744, null, 0, ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            Move mouse alongside lines to see their values\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 6, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Source References"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "markdown", [], null, null, null, _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MarkdownComponent_0"], _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MarkdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 4767744, null, 0, ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, 0, ["\n            - [Component](", ")\n            - [Usage](", ")\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.className; var currVal_1 = _co.decorationPoints; var currVal_2 = _co.dotRadius; var currVal_3 = _co.height; var currVal_4 = _co.lineColor; var currVal_5 = _co.linePoints; var currVal_6 = _co.lineWidth; var currVal_7 = _co.shadeColor; var currVal_8 = _co.width; _ck(_v, 14, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).align === "end"); _ck(_v, 20, 0, currVal_9); var currVal_10 = _co.branchURL_lib; var currVal_11 = _co.branchURL_lsg; _ck(_v, 26, 0, currVal_10, currVal_11); }); }
function View_SparkLineSimpleComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-spark-line-simple", [], null, null, null, View_SparkLineSimpleComponent_0, RenderType_SparkLineSimpleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _spark_line_simple_component__WEBPACK_IMPORTED_MODULE_8__["SparkLineSimpleComponent"], [_utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_9__["LivingStyleGuideService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SparkLineSimpleComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-spark-line-simple", _spark_line_simple_component__WEBPACK_IMPORTED_MODULE_8__["SparkLineSimpleComponent"], View_SparkLineSimpleComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/inline/spark-line-simple/spark-line-simple.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/inline/spark-line-simple/spark-line-simple.component.ts ***!
  \*************************************************************************/
/*! exports provided: SparkLineSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkLineSimpleComponent", function() { return SparkLineSimpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_services_living_style_guide_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/services/living-style-guide.service */ "./src/app/utils/services/living-style-guide.service.ts");


var SparkLineSimpleComponent = /** @class */ (function () {
    function SparkLineSimpleComponent(livingStyleGuideService) {
        this.livingStyleGuideService = livingStyleGuideService;
        // Class(es) to be added to the canvas element.
        this.className = '';
        // Decoration points objects
        this.decorationPoints = JSON.stringify([]);
        // A number giving the size of the dots used to mark important values.
        this.dotRadius = 1.5;
        // A number giving the height of the sparkline box in pixels. By default, uses the height of the Canvas element.
        this.height = 32;
        // A string giving the color of the sparkline. Any valid CSS color.
        this.lineColor = 'DarkGrey';
        // The sparkline data source
        this.linePoints = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9]);
        // A number giving the stroke of the line in pixels.
        this.lineWidth = 1.5;
        // A string giving the color of the dot marking the highest value. Any valid CSS color.
        this.shadeColor = "";
        // A number giving the width of the sparkline box in pixels.
        this.width = 128;
        this.leaf_lib = 'projects/library/src/lib/spark-line';
        this.leaf_lsg = 'projects/living-style-guide/src/app/inline/spark-line-simple';
        this.branchURL_lib = "";
        this.branchURL_lsg = "";
    }
    SparkLineSimpleComponent.prototype.ngOnInit = function () {
        this.branchURL_lib = this.livingStyleGuideService.branchURL(this.leaf_lib);
        this.branchURL_lsg = this.livingStyleGuideService.branchURL(this.leaf_lsg);
    };
    return SparkLineSimpleComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9saXZpbmctc3R5bGUtZ3VpZGUvc3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_LandingPageComponent, View_LandingPageComponent_0, View_LandingPageComponent_Host_0, LandingPageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LandingPageComponent", function() { return RenderType_LandingPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingPageComponent_0", function() { return View_LandingPageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingPageComponent_Host_0", function() { return View_LandingPageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponentNgFactory", function() { return LandingPageComponentNgFactory; });
/* harmony import */ var _landing_page_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page.component.css.shim.ngstyle */ "./src/app/landing-page/landing-page.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/ngx-markdown/ngx-markdown.ngfactory */ "../../node_modules/ngx-markdown/ngx-markdown.ngfactory.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_LandingPageComponent = [_landing_page_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LandingPageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LandingPageComponent, data: {} });

function View_LandingPageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "markdown", [], null, null, null, _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MarkdownComponent_0"], _node_modules_ngx_markdown_ngx_markdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MarkdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4767744, null, 0, ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n# Description\nThis is a collection of Angular components to render [sparklines](https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR), conceived by [Edward Tufte](https://www.edwardtufte.com/tufte/). My motivation for this project is to use web component technology to implement sparklines. The project's overall concepts, but not source code, borrows extensively from [Gareth Watts](https://omnipotent.net/jquery.sparkline/#s-about) jQery project.\n\nOriginally this was an experiment to build sparklines using Web Components in order to me to learn the underlining Web Component architecture and how to integrate them in to Web Applications. This worked, although the architecture I used to collect my components into a library was incompatible with the framework I used to build and test them, [@nutmeg/cli](https://github.com/abraham/nutmeg-cli). The main challenge was to isolate common drawing logic from component and test logic.\n\nI decided that life should not be that hard and decided to wait for the new [Angular Workspace](https://angular.io/guide/workspace-config) architecture to estabilize. Now that it is stable, I decided to migrate the legacy project to Angular Workspace.\n\n### Source code\nOne of the nice aspects of Angular Workspace is that it supports hosting the library components and the living style guide (Angaular's test application) in the same [repository](https://github.com/RodrigoMattosoSilveira/rms-sparklines):\n- See the `library` folder for the Angular Components to draw sparklines;\n- See `living-style-guide` folder for this application, showing how to use the Angular Components;\n\n````html\n_    _                   _____\n| | | | __ ___   _____  |  ___|   _ _ __\n| |_| |/ _` \\ \\ / / _ \\ | |_ | | | | '_ \\\n|  _  | (_| |\\ V /  __/ |  _|| |_| | | | |\n|_| |_|\\__,_| \\_/ \\___| |_|   \\__,_|_| |_|\n````\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "img", [["alt", "Sparlines Illustration"], ["class", "mat-card-image"], ["mat-card-image", ""], ["src", "./../../assets/images/sparklines.png"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], [], null, null)], null, null); }
function View_LandingPageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-landing-page", [], null, null, null, View_LandingPageComponent_0, RenderType_LandingPageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LandingPageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-landing-page", _landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"], View_LandingPageComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/utils/angular-material-module/angular-material-module.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/utils/angular-material-module/angular-material-module.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AngularMaterialModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModuleModule", function() { return AngularMaterialModuleModule; });
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");


var ANGULAR_MATERIAL_MODULES = [
    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
];
var AngularMaterialModuleModule = /** @class */ (function () {
    function AngularMaterialModuleModule() {
    }
    return AngularMaterialModuleModule;
}());



/***/ }),

/***/ "./src/app/utils/services/living-style-guide.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/utils/services/living-style-guide.service.ts ***!
  \**************************************************************/
/*! exports provided: LivingStyleGuideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivingStyleGuideService", function() { return LivingStyleGuideService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var LivingStyleGuideService = /** @class */ (function () {
    function LivingStyleGuideService() {
        this._root = "https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree";
        this._branch = "issue-44-ng7";
    }
    /**
    A service method to return a link to source in the repository. The
    repository and branch are kept in this service; the leaf is provided by the
    caller

    Input
        leaf: string
    Output
        URL: string
    **/
    LivingStyleGuideService.prototype.branchURL = function (leaf) {
        return this._root + "/" + this._branch + "/" + leaf;
    };
    LivingStyleGuideService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]({ factory: function LivingStyleGuideService_Factory() { return new LivingStyleGuideService(); }, token: LivingStyleGuideService, providedIn: "root" });
    return LivingStyleGuideService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/RodrigoMattosoSilveira/rms-sparklines/projects/living-style-guide/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map