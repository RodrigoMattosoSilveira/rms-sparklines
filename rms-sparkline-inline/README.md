&lt;rms-sparkline-inline&gt;
====

Description
----
The `rms-sparkline-inline` web component renders a simple sparkline including the following elements:
* the line
* a point indicating the start of the line
* a point indicating the end of the line
* a point indicating the highest value in the line
* a point indicating the lowest value in the line

The sparkline can be styled. See the properties section for details


### Usage
See examples of applications on the Angular web application, **app**, included in this repository.


#### Declare the component on the Angular application
The software engineer updates the host application's _packages.json_ to include _rms-sparkline-inline_:

````json
    "rms-sparkline-inline": "MAJOR.minor.patch",
````

As part of the development process the software engineer can simply _symlink_ the component to **app**, as follows:
* navigate to the root folder of the target: **$** `cd~/target-application/`
* link to the component: **$** `nmp link ~/rms-sparklines/rms-sparkline/rms-sparkline-inline/`

To remove the _symlink_ simply:
* navigate to the **app** root folder: **$** `cd~/target-application/`
* link to the component: **$** `nmp unlink rms-sparkline-inline`

#### Import the web component into the Angular application, **app**:
```typescript
// ...
import 'rms-sparkline-inline';
// ...
````

#### Create **app** component(s) to host the web components
See the _rms-sparkline-inline_ Angular component used to render a simnple sparkline, and the the _rms-sparkline-inline-chart_ Angular component used to render a sparkline with a drop dawn shade.

In our case the component selector is _app-rms-sparkline-inline_

#### Configure the Angular Component to use the Web Component:
Edit _rms-sparkline-inline.component.html_ to use the web component, including its attributes. Note that the attributes are all lowercase, even thought they are bound to Angular properties with camel cased names.

````html
<p>
  Simple inline:
  <span>
    <rms-sparkline-inline
      [linePoints]="linePoints"
      [classname]="className"
      [width]="width"
      [height]="height"
      [linecolor]="lineColor"
      [linewidth]="lineWidth"
      [startcolor]="startColor"
      [endcolor]="endColor"
      [maxcolor]="maxColor"
      [mincolor]="minColor"
      [dotradius]="dotRadius"
      [toolTip]="toolTip"
      [shade]="shade"
      [shadecolor]="shadeColor"
    >
    </rms-sparkline-inline>
  </span>
</p>

````

#### Define the Angular Component properties
Edit _rms-sparkline-inline.component.ts_ to define the propoerties bound to the Web Component attributes. Note that the Angular properties are camel cased; be awere that this can be a source of confusion!
````typescript
  // Class(es) to be added to the canvas element.
  className = '';

  // The sparkline data source
  linePoints: number[] = [4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9];

  // A number giving the width of the sparkline box in pixels.
  width = 64;

  // A number giving the height of the sparkline box in pixels. By default, uses the height of the Canvas element.
  height = 16;

  // A string giving the color of the sparkline. Any valid CSS color.
  lineColor = 'black';

  // A number giving the stroke of the line in pixels.
  lineWidth = 1.5;

  // A string giving the color of the dot marking the first value. Any valid CSS color.
  startColor = 'red';

  // A string giving the color of the dot marking the last value. Any valid CSS color.
  endColor = 'red';

  // A string giving the color of the dot marking the highest value. Any valid CSS color.
  maxColor = 'teal';

  // A string giving the color of the dot marking the lowest value. Any valid CSS color.
  minColor = 'teal';

  // A number giving the size of the dots used to mark important values.
  dotRadius = 2;

  // Whether to show values the mouse glides over the sparkline
  shade = true;

  // A string giving the color of the dot marking the highest value. Any valid CSS color.
  // shadeColor = '#a6c1ed';
  // shadeColor = '#a3d8ed';
  shadeColor: string = `#d0e8f2`;

  // Whether to show values the mouse glides over the sparkline
  toolTip = false;

````

#### Add the Angular component showing the web component to the view
Edit _app.component.html_:

```html
    . . .
    <app-rms-sparkline-inline></app-rms-sparkline-inline>
     . . .
```

You will notice that  `app.component.html` also includes a declaration for the `app-rms-sparkline-inline-shade` Angular component, used to showcase a diffrent instance of `rms-sparkline-inline` with a drop down shade. 

 ```html
     . . .
     <app-rms-sparkline-inline-shade></app-rms-sparkline-inline-shade>
      . . .
 ```

### Properties
* **className**:A string of space separated classe names to be added to the canvas element. Default is no classes.
* **linePoints**: An array of numbers representing the sparkline data source. Default is empty array.
* **width**: A number giving the width of the sparkline box in pixels. Default is 64.
* **height**: A number giving the height of the sparkline box in pixels. Default is 16.
* **linecolor**: A string giving the color of the sparkline; any valid CSS color. Default is black.
* **linewidth**: A number giving the stroke of the line in pixels. Default is 1.
* **startcolor**: A string giving the color of the dot marking the first value. Any valid CSS color. Default it 'red'.
* **endcolor**: A string giving the color of the dot marking the last value. Any valid CSS color. Default it 'red'.
* **maxcolor**: A string giving the color of the dot marking the highest value. Any valid CSS color. Default it 'teal'.
* **mincolor**: A string giving the color of the dot marking the lowest value. Any valid CSS color. Default it 'teal'.
* **dotradius**: A number giving the size of the dots used to mark important values. Default value is 2.
* **shade**: Whether to show values the mouse glides over the sparkline. Default value is false;
* **shadecolor**: A string giving the color of the dot marking the highest value; any valid CSS color. Default value is blue
* **tooltip**: Whether to show values the mouse glides over the sparkline. Default value is false;

#### Methods
The web element does not offer an API. It interactions are controlled by changing its attributes.

#### Events Received
none

#### Events Emitted
none

  
````html
 _   _                   _____            
| | | | __ ___   _____  |  ___|   _ _ __  
| |_| |/ _` \ \ / / _ \ | |_ | | | | '_ \ 
|  _  | (_| |\ V /  __/ |  _|| |_| | | | |
|_| |_|\__,_| \_/ \___| |_|   \__,_|_| |_|                                      
````