&lt;rms-sparkline-bar-chart&gt;
====

Description
----
The `rms-sparkline-bar-chart` web component renders four distinct bar chart types, as per the `chartType` attribute:
1. `positive`: Positive charts' bars with positve heights are drawn northward; bars with negative heights are cropped out. 
1. `negative`:  Negative charts' bars with negative heights are drawn southward; bars with positive heights are cropped out. 
1. `dual`: Dual charts' bars heights are negative, zero, or positive, with a positive height bars drawn northward and negative ones southward.
1. `tri`: Tri charts have equal height bars, with positive drawn northward, zero straddling the x-axis, and negative southward.

#### Attributes
* `chartType: string`: The chart type, one of ['positive', 'negative', 'dual', 'tri']
* `barHeights: number[]`: The sparkline data source.
* `className: string`: A classe names to be added to the canvas element. Default is no classes.
* `width: number`: The width of the sparkline box in pixels. See the source for comments on how to fit bars into the provided box.
* `height: number`: The height of the sparkline box in pixels.
* `minimumBarWidth`: number**: The minimum bar width, in pixels.
* `barGap: number`: The that bar gap, in pixels.
* `fillColorMinus: string`: The color to render negative bars.
* `fillColorZero: string`: The color to render zero bars.
* `fillColorPlus: string`: The color to render positive bars.

#### Methods
The web element does not offer an API. It interactions are controlled by changing its attributes.

#### Events Received
none

#### Events Emitted
none

### Development


### Usage

See usage guidelies on the style guide application, [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide) README.

# Last but not least
````html
 _   _                   _____            
| | | | __ ___   _____  |  ___|   _ _ __  
| |_| |/ _` \ \ / / _ \ | |_ | | | | '_ \ 
|  _  | (_| |\ V /  __/ |  _|| |_| | | | |
|_| |_|\__,_| \_/ \___| |_|   \__,_|_| |_|                                      
````
