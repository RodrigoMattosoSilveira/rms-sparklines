&lt;rms-sparkline-bar-chart&gt;
====

Description
----
The `rms-sparkline-bar-chart` web component renders a sparkline including the following elements:
* a collection of bars, one for each point

These sparkline can be styled. See the properties section for details


### Usage
See examples of applications on the Angular web application, **app**, included in this repository.


#### Declare the component on the Angular application
The software engineer updates the host application's _packages.json_ to include _rms-sparkline-bar-chart_:

````json
    "rms-sparkline-bar-chart": "0.0.1",
````

As part of the development process the software engineer can simply _symlink_ the component to **app**, as follows:
* navigate to the **app** root folder: **$** `cd sparklines/app`
* link to the component: **$** `nmp link ../components/rms-sparkline-bar-chart`

To remove the _symlink_ simply:
* navigate to the **app** root folder: **$** `cd sparklines/app`
* link to the component: **$** `nmp unlink rms-sparkline-bar-chart`

#### Import the web component into the Angular application, **app**:
```typescript
// ...
import 'rms-sparkline-bar-chart';
// ...
````

#### Create **app** component(s) to host the web components
See the _rms-sparkline-bar-chart_ Angular component used to render a simnple sparkline, and the the _rms-sparkline-bar-chart_ Angular component used to render a sparkline with a drop dawn shade.

In our case the component selector is _app-rms-sparkline-bar-chart_

#### Configure the Angular Component to use the Web Component:
Edit _rms-sparkline-bar-chart.component.html_ to use the web component, including its attributes. Note that the attributes are all lowercase, even thought they are bound to Angular properties with camel cased names.

````html
<p>
  Simple inline:
  <span>
    <rms-sparkline-inline
      [barPoints] = "barPoints"
      [className] = "className"
      [fillColor] = "fillColor"
      [height] = "height"
      [lineColor] = "lineColor"
      [lineWidth] = "lineWidth"
      [toolTip] = "toolTip"
      [width] = "width"
    >
    </rms-sparkline-inline>
  </span>
</p>

````

#### Define the Angular Component properties
Edit _rms-sparkline-bar-chart.component.ts_ to define the propoerties bound to the Web Component attributes. Note that the Angular properties are camel cased; be awere that this can be a source of confusion!
````typescript
  // The sparkline data source
  barPoints: number[] = [4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9];

  // Class(es) to be added to the canvas element.
  className = '';

  // A string giving the color to fill the bars; any valid CSS color. Default is red
  fillColor = 'red';

  // A number giving the height of the sparkline box in pixels. By default, uses the height of the Canvas element.
  height = 16;

  // A string giving the color of the sparkline. Any valid CSS color.
  lineColor = 'black';

  // A number giving the stroke of the line in pixels.
  lineWidth = 1.5;

  // Whether to show values the mouse glides over the sparkline
  toolTip = false;

  // A number giving the width of the sparkline box in pixels.
  width = 64;
````

#### Add the Angular component showing the web component to the view
Edit _app.component.html_:

```html
    . . .
    <app-rms-sparkline-bar-chart></app-rms-sparkline-bar-chart>
     . . .
```

#### Properties
* **className**:A string of space separated classe names to be added to the canvas element. Default is no classes.
* **barPoints**: An array of numbers representing the sparkline data source. Default is empty array.
* **width**: A number giving the width of the sparkline box in pixels. Default is 64.
* **height**: A number giving the height of the sparkline box in pixels. Default is 16.
* **linecolor**: A string giving the color of the sparkline; any valid CSS color. Default is black.
* **linewidth**: A number giving the stroke of the line in pixels. Default is 1.
* **fillcolor**: A string giving the color to fill the bars; any valid CSS color. Default value is blue
* **tooltip**: Whether to show values the mouse glides over the sparkline. Default value is false;

#### Methods
The web element does not offer an API. It interactions are controlled by changing its attributes.

#### Events Received
none

#### Events Emitted
none

### Development
   
````html
 _   _                   _____            
| | | | __ ___   _____  |  ___|   _ _ __  
| |_| |/ _` \ \ / / _ \ | |_ | | | | '_ \ 
|  _  | (_| |\ V /  __/ |  _|| |_| | | | |
|_| |_|\__,_| \_/ \___| |_|   \__,_|_| |_|                                      
````