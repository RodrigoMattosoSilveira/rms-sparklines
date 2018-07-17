&lt;rms-sparkline-inline&gt;
====

Description
----
The `rms-sparkline-inline` web component renders a simple sparkline including the following elements:
* a line
* optional decorating points, drawn along the line, e.g. min / max / start / end / alert. etc.
* an optional dropdown shade

The `rrms-sparkline-inline` web component renders the following  line sparklines types:
1. `simple`: A simple line, all points positive
1. `decorated`:  A simple line, all points positive, with decoration points alongside the line.
1. `shade`: Dual charts' bars heights are negative, zero, or positive, with a positive height bars drawn northward and negative ones southward.

### Properties
* `linepoints: string`: An array of numbers representing the sparkline data source. Default is empty array. See below for formating details.
* `className: string`: The classe names to be added to the canvas element. Default is no classes.
* `width: number`: The width of the sparkline box in pixels.
* `height: number`: The height of the sparkline box in pixels.
* `linecolor: string`: The color of the sparkline; any valid CSS color. 
* `linewidth: number`: A number giving the stroke of the line in pixels. Default is 1.
* `shadecolor: string`: The color of to shade the area underneath the sparkline.
* `dotradius: Number`: The size of the decoration dots.
* `decorationpoints: string` An array of objects describing decoration points,  e.g. min / max / start / end / alert. etc. See below for formating details.

#### linepoints
A simple sequence of values representing f(x), with x being equally spaced units accross the horizontal axis, as for instance:
````typescript
    linePoints: string = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 5, 8 , 9, 7, 1]);
````
Assuming the default width, 64 pixels, fifteen segments would will be drawn, four pixels wide.

#### decoratingtoints
An array of objects describing the decorations to be added to the line. Presently only circles are supported, with the object describing a decorating point being formated as follows:
````typescript
    decorationpoints = JSON.stringify([{linepointsIndex: 0, color: 'red'}, {linepointsIndex: 15, color: 'black'}]);
````

There are two decorations this example, one red dot indexed to be drawn over the line point of inxdex 0 and one black dot indexed to be drawn over the line point of inxdex 15. Considering the linepoints example above, these decorations would represent the sparkline's start and end points. 

### Methods
Properties are the public API of a Web Component and external code can set/get them

### Events Received
none

### Events Emitted
none

### Usage
Below is example of a sparkline inline drawn without a shade and with decorationpoints. In this example, sparkline is being declared as a child of an Angular component, with its atribute values being set at the Angular's component controller.

````html
    <rms-sparkline-inline
      [linepoints]="linePoints"
      [classname]="className"
      [width]="width"
      [height]="height"
      [linecolor]="lineColor"
      [linewidth]="lineWidth"
      [dotradius]="dotRadius"
      [decorationpoints]="decorationpoints"
    >
    </rms-sparkline-inline>
````

See the style guide application source code, [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide) for usage details.

# Development Notes
Observations regarding problems integrating a web component, rms-sparkline-inline in this case, into an angular component Vaadin table hosted by an Angular component.
 
## Technical Background
rms-sparkline-inline draws the sparkline using an array of numbers, linePoints, where f(0) is the first point in the array, f(1) the second and so forth.
 
It uses a array of objects, decorationPoints, to describing decoration points to be rendered alongside the sparkline; these are used to represent start, end, min, max, etc. A decorationPoint object consists of two key / pair values, one indicating the index of the point to be decorated, and another indicating its color; therefore, in order to draw a blue dot on sparkline's second we include a {index: 1, color: 'blue'} in the decorationPoints array.
 
## Observed Behavior
Sporadically rms-sparkline-inline was called with decoration points indexes higher than the linePoints array length. This cased rms-sparkline-inline to fail; we also observed NaN values being returned when calculating such decorationPoints screen coordinates.
 
## Expected Behavior
rms-sparkline-inline fails gracefully when dealing with decoration points indexes higher than the linePoints array length.
 
This 'work around' has been implemented, but represents only part of the story. The other part of the story is the actual cause of the decoration points indexes being higher than the length of the linePoints array. I believe it is linked to how the linePoints array is filled in the Angular component using the Vaadin table, and how the rms-sparkline-inline web component embbeded in the Vaadin component reacts to changes its observed attributes, the linePoints array in particular.
 
## Analysis
We know that rms-sparkline-inline observes its linePoints array attribute and when it changes it draws the sparkline. My hypothesis is that, sporadically, the loop used to fill it up is interrupted, leading rms-sparkline-inline to decide that the linePoints attribute has changed and to re-draw the sparkline. When this happens the linePoints array will be incomplete and some of its decoration points might point to non-existing indexes.
 
If this is true, it represents an insidious condition likely to happen in many similar situations. The workaround is to populate a temporary array where interrupts would not cause the web component to execute, and then copy the temporary arry to the target array using the fastest possible mechanism, as follows:
````typescript
    let _linePoint: number[] = [];
    loop
        ...
        _linePoint.push(value);
        ...
    end loop;
    // See https://jsperf.com/cloning-arrays/3 for benchmarks indiciting this is the fastest mechanism
    linePoint = _linePoint.slice(0);
````
# Last but not least
````html
 _   _                   _____            
| | | | __ ___   _____  |  ___|   _ _ __  
| |_| |/ _` \ \ / / _ \ | |_ | | | | '_ \ 
|  _  | (_| |\ V /  __/ |  _|| |_| | | | |
|_| |_|\__,_| \_/ \___| |_|   \__,_|_| |_|                                      
````