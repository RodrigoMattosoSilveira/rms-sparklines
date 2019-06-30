## Bullet
Used to display performance data, Bullet Graphs were developed by Stephen Few as an alternative to dashboard gauges and meters. This is because they often displayed not enough information, were less space-efficient and were cluttered with "chartjunk".


## Qualitative Range
A Qualitative Range is a rectangle drawn according to the chart's orientation:
 * horizontal (chart.width > chart.height):
   - width is the proportional to its value and the canvas' width;
   - height is the canvas height;
* vertical (chart.width < chart.height):
  - width is the canvas width;
* It color is its color attribute
````typescript
qualitativeRange
	value: number;
	color: string; // shades of the same color
````

## Qualitative Ranges
A collection of Qualitative Ranges scaled to encode the window within which a Comparative Measure (Goal) and the Feature Measure (Performance) are shown. The number of Qualitative Ranges is arbitrary, with 1 being the lower (mandatory) up to 3 as the recommended maximum. The Qualitative Ranges are rendered with different color backgrounds; it is recommended that variations of a color, from darker to light.
````typescript
qualityRanges[]: QualityRange
````

## Feature Measure
Is a rectangle drawn according to the chart's orientation:
* horizontal (chart.width > chart.height):
  - width is the proportional to its value and the canvas' width;
  - height is one third of the canvas height; half of its height is above the center of the canvas height, and half below thereof;
* vertical (chart.width < chart.height):
  - width is one third of the canvas width; half of its width is above the center of the canvas width, and half below thereof;
* Its color is its color attribute
````typescript
featureMeasure
	value: number; // performance score
	color: string;
````

## ComparativeMeasure
it encodes the goal; it is represented by a whisker, orthogonal to the Feature Measure bar, with its height equal to two thirds of the height of the Qualitative Range’s boxes
````typescript
comparativeMeasure
	value: number; // target measure for comparative measure
	color: string;
````
