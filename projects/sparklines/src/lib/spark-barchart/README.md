&lt;rms-spark-barchart&gt;
====

Description
----
The `rms-spark-barchart` Angular component renders four distinct bar chart types, as per the `chartType` attribute:
1. `positive`:charts' bars with positive heights are drawn northward; bars with negative heights are cropped out.
1. `negative`:  charts' bars with negative heights are drawn southward; bars with positive heights are cropped out.
1. `dual`: charts' bars heights are negative, zero, or positive, with a positive height bars drawn northward and negative ones southward.
1. `tri`:charts have negative, zero, and positive bars. The positive and negative bars are half of the box height, whereas the aero bar is one fourth of it. Negative bars are drawn southward, zeros straddling the x-axis, and positives northward.

#### Properties
* `barGap: number`: The that bar gap, in pixels.
* `barHeights: string`: The heights of the bars to be built.
* `chartType: string`: The chart type, one of ['positive', 'negative', 'dual', 'tri']
* `className: string`: A class names to be added to the canvas element. Default is no classes.
* `height: number`: The height of the sparkline box in pixels.
* `fillColorMinus: string`: The color to render negative bars.
* `fillColorZero: string`: The color to render zero bars.
* `fillColorPlus: string`: The color to render positive bars.
* `minimumBarWidth`: number**: The minimum bar width, in pixels.
* `width: number`: The width of the sparkline box in pixels. See the source for comments on how to fit bars into the provided box.

#### barHeights
The heights of the bars to be built.
````typescript
    barHeights: string = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 5, 8 , 9, 7, 1]);
````

#### Methods
Properties are the public API of a Angular component and external code can set/get them

#### Events Received
none

#### Events Emitted
none

### Development


### Usage
Below is example of a barChart sparkline. In this example, sparkline is being declared as a child of an Angular component, with its attribute values being set at the Angular's component controller.

````html
    <rms-spark-barchart
        [chartType] = "chartType"
        [barHeights] = "barHeights"
        [minimumBarWidth] = "minimumBarWidth"
        [barGap] = "barGap"
        [fillColorPlus] = "fillColorPlus"
        [fillColorZero] = "fillColorZero"
        [fillColorMinus] = "fillColorMinus"
        [className] = "className"
        [height] = "height"
        [width] = "width"
    >
    </rms-spark-barchart>
````

See the [living style guide](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/projects/living-style-guide/src/app/barchart) for for usage details.

# Last but not least
````html
 _   _                   _____            
| | | | __ ___   _____  |  ___|   _ _ __  
| |_| |/ _` \ \ / / _ \ | |_ | | | | '_ \
|  _  | (_| |\ V /  __/ |  _|| |_| | | | |
|_| |_|\__,_| \_/ \___| |_|   \__,_|_| |_|                                      
````
