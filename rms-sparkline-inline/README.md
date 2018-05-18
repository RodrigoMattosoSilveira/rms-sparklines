&lt;rms-sparkline-inline&gt;
====

Description
----
The `rms-sparkline-inline` web component renders a simple sparkline including the following elements:
* a line
* optional decorating points, drawn along the line, e.g. min / max / start / end / alert. etc.
* an optional dropdown shade

### Attributes
* **linePoints**: An array of numbers representing the sparkline data source. Default is empty array. See below for formating details.
* **className**:A string of space separated classe names to be added to the canvas element. Default is no classes.
* **width**: A number giving the width of the sparkline box in pixels. Default is 64.
* **height**: A number giving the height of the sparkline box in pixels. Default is 16.
* **linecolor**: A string giving the color of the sparkline; any valid CSS color. Default is black.
* **linewidth**: A number giving the stroke of the line in pixels. Default is 1.
* **shadecolor**: A string giving the color of the dot marking the highest value; any valid CSS color. Must be present and valide for the dropdown shade to be drawn.
* **dotradius**: A number giving the size of the dots used to mark important values. Default value is 0. It must be a valid positive number for the deecoration points to be drawn.
* **decorationpoints** An array of objects describing decoration points,  e.g. min / max / start / end / alert. etc. See below for formating details.

#### linepoints
A simple sequence of values representing f(x), with x being equally spaced units accross the horizontal axis, as for instance:
````typescript
    linePoints: number[] = [4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 5, 8 , 9, 7, 1];
````
Assuming the default width, 64 pixels, fifteen segments would will be drawn, four pixels wide.

#### decoratingtoints
An array of objects descring the decorations to be added to the line. Presently only circles are supported, with the object describing a decorating point being formated as follows:
````typescript
    decorationpoints = [{index: 0, color: 'red'}, {index: 15, color: 'black'}];
````

There are two decorations this example, one red dot indexed to be drawn over the line point of inxdex 0 and one black dot indexed to be drawn over the line point of inxdex 15. Considering the linepoints example above, these decorations would represent the sparkline's start and end points. 

### Methods
The web element does not offer an API. It interactions are controlled by changing its attributes.

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

See usage guidelines on the style guide application, [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide) README.

# Last but not least
````html
 _   _                   _____            
| | | | __ ___   _____  |  ___|   _ _ __  
| |_| |/ _` \ \ / / _ \ | |_ | | | | '_ \ 
|  _  | (_| |\ V /  __/ |  _|| |_| | | | |
|_| |_|\__,_| \_/ \___| |_|   \__,_|_| |_|                                      
````