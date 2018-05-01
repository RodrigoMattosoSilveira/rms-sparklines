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
See usage guidelies on the style guide application, [rms-sparklines-=styleguid](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide) README.

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