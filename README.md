&lt;rms-sparklines&gt;
=


[![Build Status](https://travis-ci.org/RodrigoMattosoSilveira/rms-sparklines.svg?branch=master)](https://travis-ci.org/RodrigoMattosoSilveira/rms-sparklines)

### New in version [0.2.0-alpha.7]
* Fixed tooltip bug on the inline and box plot sparklines.

# Description
This is a collection of web components to render [sparklines](https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR), conceived by [Edward Tufte](https://www.edwardtufte.com/tufte/). My motivation for this project is to use web component technology to implement sparklines. The project's overall concepts, but not source code, borrows extensively from [Gareth Watts](https://omnipotent.net/jquery.sparkline/#s-about) jQery project.

These webcomponents are built using the [@nutmeg/cli](https://github.com/abraham/nutmeg-cli); this document assumes you are familiar with it and the ancillary technologies required by [@nutmeg/cli](https://github.com/abraham/nutmeg-cli).

### Sparkline portifolio
* [rms-sparkline-inline](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/rms-sparkline-inline): A simple line. Please refer to its [README](https://github.com/RodrigoMattosoSilveira/rms-sparklines/blob/master/rms-sparkline-inline/README.md) for usage details.
* [rms-sparkline-bar-chart](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/rms-sparkline-bar-chart): A bar chart sparkline. Please refer to its [README](https://github.com/RodrigoMattosoSilveira/rms-sparklines/blob/master/rms-sparkline-bar-chart/README.md) for usage details.
* [rms-sparkline-boxplot](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/rms-sparkline-boxplot): A box plot sparkline. Please refer to its [README](https://github.com/RodrigoMattosoSilveira/rms-sparklines/blob/master/rms-sparkline-boxplot/README.md) for usage details.

### Source code
Check [rms-sparklines](https://github.com/RodrigoMattosoSilveira/rms-sparklines) for the web components repository.

Check [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide) for the repository of an Angular web application illustrating their usage.

### Live Application
You can navigate to [rms-sparklines-styleguide](https://rms-sparklines-styleguide.herokuapp.com/) to see a live version of the Angular web application illustrating their usage.

# Installation
Cloning this repository: 
* **$** `cd ~`
* **$** `git clone https://github.com/RodrigoMattosoSilveira/rms-sparklines`

Initialize the sparklines
* **$** `cd ~/rms-sparklines`
* **$** `npm run setup`

This will take a few minutes, and does the following
* For each sparkline package
    * Installs the packages required by each sparkline package
    * Builds the sparkline package
    * Tests the sparkline
    
Note that this same script is used to tell the continuous development framwework to build and test all sparklines.
    
### Write a new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component
The following steps are required:
* Web Component Development
    * Install `rms-sparklines`
    * Develop the new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component.
    * Develop unit tests for the new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component.
    * Publish the new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component.
* Show case the new web component in the style guide
    * 

#### Install `rms-sparklines` 
If not already installed, install according to the instructions above.

#### Create a [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component
I use the [nutmeg-cli](https://github.com/abraham/nutmeg-cli) to generate web components; see the instructions therein for details:
* **$** `cd ~/rms-sparklines`
* **$** `nutmeg new rms-sparkline-awesome attribute_1:attribute_type ... attribute_4:attribute_type`

This will create a new folder, `rms-sparklines-awesome`, including a scaffold for the new web component


#### Develop and publish the new component 
I reflect the patterns in the existing [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web components to set up the new web component:
* create a `draw (): HTMLCanvasElement` function.
* empty the ` private get styles(): TemplateResult` function, return only `<style></style>` for now.
* update the `private get template(): TemplateResult` function to return the results of the `get styles()` and `draw()` functions.
* update the `getter methods` to return default values were appropriate.
* Update the unit tests to validate the handling of default attributes, and changed attributes; once the sparkline is complete, then include the image generation validation.
* Renamde the `readme.md` to `README.md` and document your component requirements; keep this file updated as your component gains life.
* Hook up `rms-sparkline-awesome` to `rms-sparklines`
    * Add an index.js file, exporting the component: `export * from 'dist/rms-sparkline-awesome';`
    * Update the ~/rms-sparklines/index.js to the component: `export * from './rms-sparkline-awesome;'`

Update the `~/sparklines/app/setup.sh` script to initialize `rms-sparkline-awesome`
* Add the relative web component path to the `setup.sh` script webComponents array`setup.sh`
````bash
#!/usr/bin/env bash

declare -a webComponents=("rms-sparkline-inline" \
. . . \
"rms-sparkline-bar-awesome"
)

. . . 
````

#### Develop unit tests for the new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component.
Ensure the web component's logic is covered by unit tests, and that the existing tests pass:
* **$** `cd ~/rms-sparklines/rms-sparline-awesome`
* **$** `ng run test`


#### Show case the new web component in the style guide
See the [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) README for instructions

#### Publish the new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component.
This is done in the root directory:
* **$** `cd ~/rms-sparklines`
* Increment packages.json version using `semver` notation
* **$** `npm publish`

See the [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide). README for instructions on how and when to use the web component's published and under development versions.

Note that the publishing is done in the library's not the web component's root folder. 

## Update an existing [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component
Similar as when creating a new component, except that you will skip the create component steps.

# Last but not least
````html
 _   _                   _____            
| | | | __ ___   _____  |  ___|   _ _ __  
| |_| |/ _` \ \ / / _ \ | |_ | | | | '_ \ 
|  _  | (_| |\ V /  __/ |  _|| |_| | | | |
|_| |_|\__,_| \_/ \___| |_|   \__,_|_| |_|                                      
````