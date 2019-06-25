&lt;@rmstek/sparklines&gt;

[![Build Status](https://travis-ci.org/RodrigoMattosoSilveira/rms-sparklines.svg?branch=master)](https://travis-ci.org/RodrigoMattosoSilveira/rms-sparklines)

# Description
This is a collection of Angular components to render [sparklines](https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR), conceived by [Edward Tufte](https://www.edwardtufte.com/tufte/). My motivation for this project is to use Angular workspace and component technology to implement sparklines. The project's overall concepts, but not source code, borrows extensively from [Gareth Watts](https://omnipotent.net/jquery.sparkline/#s-about) jQery project.

### @rmstek/sparklines portifolio
* [rms-spark-line](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/projects/library/src/lib/spark-line): A simple line, with decorations and shading. See [here](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/projects/living-style-guide/src/app/inline) for implementation examples, and [here](https://rodrigomattososilveira.github.io/rms-sparklines/inline) for live examples;
* [rms-spark-barchart](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/projects/library/src/lib/spark-barchart): A collection of bar charts, including positive, negative, dual, and win/draw/loss charts. See [here](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/projects/living-style-guide/src/app/barchart) for implementation examples, and [here](https://rodrigomattososilveira.github.io/rms-sparklines/barchart) for live examples;
* [rms-sparkline-boxplot](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/rms-sparkline-boxplot): A box plot. See [here](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/projects/living-style-guide/src/app/boxplot) for implementation examples, and [here](https://rodrigomattososilveira.github.io/rms-sparklines/boxplot) for live examples;

### Source code
Check [rms-sparklines](https://github.com/RodrigoMattosoSilveira/rms-sparklines) for the Angular Workspace repository, consisting the the library and living style guide showcasing the library's Angular components.

### Live Application
You can navigate to the [living style guide](https://rodrigomattososilveira.github.io/rms-sparklines/home/) to see a live version of the Angular web application illustrating their usage.

# Build your Angular component sparkline
What follows assumes a good understanding of Angular.

### Clone this repository:
* **$** `cd ~`
* **$** `git clone https://github.com/RodrigoMattosoSilveira/rms-sparklines`

### Initialize the rms-sparklines development environment
* **$** `cd ~/rms-sparklines`
* **$** `yarn reset`

This takes a few minutes, and does the following
* Removes the node_modules folder, if there;
* Builds the library;
* Builds the living style guide;

### Write a new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) Angular component
The following steps are required:
* **$** `ng generate component my-cool-sparline --project=library` to create an Angular `library` component
* Develop the new Angular component;
* Write unit tests for the new Angular component;
* Publish the new component;

### Show case the new Angular component in the living style guide;
* **$** `ng generate component my-cool-sparkline --project=living-style-guide`, to create an Angular `living style guide` component;
* Edit the `app-my-cool-sparline` component template to showcase `my-cool-sparline`;

#### Publish the new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component.
This is done in the root directory:
* **$** `cd ~/rms-sparklines`
* Increment packages.json version using `semver` notation
* **$** `npm publish`

# Last but not least
````html
 _   _                   _____            
| | | | __ ___   _____  |  ___|   _ _ __  
| |_| |/ _` \ \ / / _ \ | |_ | | | | '_ \
|  _  | (_| |\ V /  __/ |  _|| |_| | | | |
|_| |_|\__,_| \_/ \___| |_|   \__,_|_| |_|                                      
````
