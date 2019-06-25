&lt;rms-spark-line&gt;
====

Description
----
The `rms-spark-line` Angular component renders a simple sparkline including the following elements:
* a line
* optional decorating points, drawn along the line, e.g. min / max / start / end / alert. etc.
* an optional dropdown shade

The `rrms-spark-line` Angular component renders the following  line sparklines types:
1. `simple`: A simple line, all points positive
1. `decorated`:  A simple line, all points positive, with decoration points alongside the line.
1. `shade`: Dual charts' bars heights are negative, zero, or positive, with a positive height bars drawn northward and negative ones southward.

### Properties
* `className: string`: The class name to be added to the canvas element. Default is no classes.
* `decorationpoints: string` An array of objects describing decoration points,  e.g. min / max / start / end / alert. etc. See below for formating details.
* `dotradius: Number`: The size of the decoration dots.
* `linecolor: string`: The color of the sparkline; any valid CSS color.
* `linepoints: string`: An array of numbers representing the sparkline data source. Default is empty array. See below for formating details.
* `linewidth: number`: A number giving the stroke of the line in pixels. Default is 1.
* `width: number`: The width of the sparkline box in pixels.
* `shadecolor: string`: The color of to shade the area underneath the sparkline.
* `height: number`: The height of the sparkline box in pixels.

#### linepoints
An a JOSN.stringfy'd string of a simple sequence of values representing f(x), with x being equally spaced units across the horizontal axis, as for instance:
````typescript
    linePoints: string = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 5, 8 , 9, 7, 1]);
````
Assuming the default width, 64 pixels, fifteen segments would will be drawn, four pixels wide.

#### decoratingtoints
An a JOSN.stringfy'd string of an array of objects describing the decorations to be added to the line. Presently only circles are supported, with the object describing a decorating point being formatted as follows:
````typescript
    decorationpoints = JSON.stringify([{index: 0, color: 'red'}, {index: 15, color: 'black'}]);
````

There are two decorations this example, one red dot indexed to be drawn over the line point of index 0 and one black dot indexed to be drawn over the line point of index 15. Considering the linepoints example above, these decorations would represent the sparkline's start and end points.

### Methods
Properties are the public API of a Angular component and external code can set/get them

### Events Received
none

### Events Emitted
none

### Usage
Below is example of a sparkline inline drawn without a shade and with decorationpoints. In this example, sparkline is being declared as a child of an Angular component, with its atribute values being set at the Angular's component controller.

````html
    <rms-spark-line
        [className]="className"
        [decorationPoints]="decorationPoints"
        [dotRadius]="dotRadius"
        [lineColor]="lineColor"
        [linePoints]="linePoints"
        [lineWidth]="lineWidth"
        [height]="height"
        [shadeColor]="shadeColor"
        [width]="width"
    >
    </rms-spark-line>
````

See the [living style guide](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/projects/living-style-guide/src/app/inline) for for usage details.

# Last but not least
````html
 _   _                   _____            
| | | | __ ___   _____  |  ___|   _ _ __  
| |_| |/ _` \ \ / / _ \ | |_ | | | | '_ \
|  _  | (_| |\ V /  __/ |  _|| |_| | | | |
|_| |_|\__,_| \_/ \___| |_|   \__,_|_| |_|                                      
````
