&lt;rms-sparkline-boxplot&gt;
====

Description
----
The `rms-sparkline-boxplot` web component renders distinct box plot chart types, as per the `chartType` attribute:
1. `simple`: The [box plot](http://www.physics.csbsju.edu/stats/box2.html) (a.k.a. box and whisker diagram) is a standardized way of displaying the distribution of data based on the five number summary: minimum, first quartile, median, third quartile, and maximum. The IQR, inter quartile range, is the set of population individuals between the first and third quartile.

#### Properties
* `axisColor: string`: The color to render the x-axis.
* `axisLineWidth: number`: The width to render the x-axis.
* `chartType: string`: The chart type, one of ['simple']
* `className: string`: A classe names to be added to the canvas element. Default is no classes.
* `drawingMethod`: the drawing method, one of ['canvas', 'svg']
* `height: number`: The height of the sparkline box in pixels.
* `highWhiskerColor: string`: The color to render the eastern whisker.
* `highWhiskerLineWidth: number`: The width to render the eastern whisker.
* `interQuartileRangeColor: string`: The color to render the IQR.
* `interQuartileRangeLineWidth: number`: The width to render the IQR.
* `interQuartileRangeFillColor: string`: The color to fill the IQR.
* `lowWhiskerColor: string`: The color to render the western whisker.
* `lowWhiskerLineWidth: number`: The width to render the western whisker.
* `medianWhiskerColor: string`: The color to render the median.
* `medianWhiskerLineWidth: number`: The width to render the median.
* `population: string`: The population for which the boxplot is being built.
* `width: number`: The width of the sparkline box in pixels. 

#### barHeights
A simple sequence of values representing the population for which to render the box plot:
````typescript
    population: string = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 5, 8 , 9, 7, 1]);
````

#### Methods
Properties are the public API of a Web Component and external code can set/get them

#### Events Received
none

#### Events Emitted
none

### Development

### Usage
Below is example of a barchar sparkline. In this example, sparkline is being declared as a child of an Angular component, with its attribute values being set at the Angular's component controller.

````html
     <rms-sparkline-boxplot
         [axisColor] = 'axisColor'
         [axisLineWidth] = 'axisLineWidth'
         [chartType] = 'chartType'
         [className] = 'className'
         [drawingMethod] = 'drawingMethod'
         [height] = 'height'
         [highWhiskerColor]  = 'highWhiskerColor'
         [highWhiskerLineWidth] = 'highWhiskerLineWidth'
         [interQuartileRangeColor] = 'interQuartileRangeColor'
         [interQuartileRangeLineWidth] = 'interQuartileRangeLineWidth'
         [interQuartileRangeFillColor] = 'interQuartileRangeFillColor'
         [lowWhiskerColor] = 'lowWhiskerColor'
         [lowWhiskerLineWidth] = 'lowWhiskerLineWidth'
         [medianColor] = 'medianColor'
         [medianLineWidth] = 'medianLineWidth'
         [population] = 'population'
         [width] = 'width'
     >
     </rms-sparkline-boxplot>
````

See the style guide application source code, [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide) for usage details.

# Last but not least
````html
 _   _                   _____            
| | | | __ ___   _____  |  ___|   _ _ __  
| |_| |/ _` \ \ / / _ \ | |_ | | | | '_ \ 
|  _  | (_| |\ V /  __/ |  _|| |_| | | | |
|_| |_|\__,_| \_/ \___| |_|   \__,_|_| |_|                                      
````
