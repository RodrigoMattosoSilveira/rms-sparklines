
| Branch        | Status           |
| ------------- | ---------------- |
| master        | [![Build Status](https://travis-ci.org/RodrigoMattosoSilveira/rms-sparklines.svg?branch=master)](https://travis-ci.org/RodrigoMattosoSilveira/rms-sparklines) |

# Description
**@rmstek/sparklines** is an Angular Component Library to render [sparklines](https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR), conceived by [Edward Tufte](https://www.edwardtufte.com/tufte/). My motivation for this project is to use web component technology to implement sparklines. The project's overall concepts, but not source code, borrows extensively from [Gareth Watts](https://omnipotent.net/jquery.sparkline/#s-about) jQery project.

These Angular components are hosted in an Angular Workspace consisting of a library, `rmstek-sparklines` and a test application, `living-styleguide`.

### Source code
Check [rms-sparklines](https://github.com/RodrigoMattosoSilveira/rms-sparklines) for repository.

### Live Application
You can navigate to [rms-sparklines](https://rodrigomattososilveira.github.io/rms-sparklines/) to see a live version of the `living-styleguide` illustrating the sparklines' usage.

### Portfolio
The following sparklines are implemented:
* [rms-sparkline-inline](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/projects/rmstek-sparklines/src/lib/spark-line): A simple line. Please refer to its [README](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/projects/rmstek-sparklines/src/lib/spark-line/README.md) for usage details.
* [rms-sparkline-bar-chart](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/projects/rmstek-sparklines/src/lib/spark-barchart): A [bar chart](https://en.wikipedia.org/wiki/Bar_chart) sparkline. Please refer to its [README](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/projects/rmstek-sparklines/src/lib/spark-barchart/README.md) for usage details.
* [rms-sparkline-boxplot](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/projects/rmstek-sparklines/src/lib/spark-boxplot): A [box plot](https://en.wikipedia.org/wiki/Box_plot) sparkline. Please refer to its [README](https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/master/projects/rmstek-sparklines/src/lib/spark-boxplot/README.md) for usage details.

# Experimenting
[rms-sparklines](https://github.com/RodrigoMattosoSilveira/rms-sparklines) is a read-only public repository.

### Installation
Cloning the repository:
* **$** `cd ~`
* **$** `git clone https://github.com/RodrigoMattosoSilveira/rms-sparklines`

Initialize the sparklines
* **$** `cd ~/rms-sparklines`
* **$** `lib:reset`

This will take a few minutes. Although we use `yarn`, you will notice that the `lib:reset` script uses `npm`; this is required because of a couple of glitches:
* Angular 7 scoped packages seamlessly;
* The `yarn install --ignore-optional` does not work;

The `lib:reset` script is a around whereby we use:
* **npm install** - to overcome the `yarn install --ignore-optional` bug;
* **rm package-lock.json** - to remove the `npm install` vestiges;
* **yarn lib:build (ng build rmstek-sparklines)** - to build the `@rmstek/sparklines` scoped package;
* **rm -rf node_modules/ && yarn install** - reinstall node_modules using `yarn`;
* **yarn lib:add (yarn add ./dist/rmstek-sparklines/ -O)** - to add `@rmstek/sparklines` as an optional library;

### Check out the living style guide locally
This amounts to serving the application:
* **$** yarn lsg:serve
* Open a browser tab at: `localhost:4201`

### Write a new sparkline
This assumes you have a thorough understanding of Angular 7, GitHub, and TravisCI:
* Fork the [rms-sparklines](https://github.com/RodrigoMattosoSilveira/rms-sparklines) repository;
* Install the forked repository in your development sandbox;
* **$** `cd ~/rms-sparklines`;
* **$** `ng g c <your cool sparkline name> --project=rms-sparklines`;
* Change your `<your cool sparkline name>` `package.json` version name; I recommend you adhere to the `SEMVER` standard;
* Develop your sparkline; see `projects/rmstek-sparklines/src/lib` for the existing sparklines' logic;
* Develop your sparkline unit tests; use one of the existing sparklines' unit tests to guide you;
* Showcase your sparkline in the `living-style-guide application`;
* Issue a pull request, in case wish to have your sparkline added to [rms-sparklines](https://github.com/RodrigoMattosoSilveira/rms-sparklines) ;

### Continuous integration and deployment
This repository is configured to work only on the `master` branch; if you forked the repository and wish to implement your own CI/CD:
* Configure `.travis.yml` to suit your needs;
* Ensure that the scripts on the `scripts` folder match your requirements;

# Last but not least
````html
 _   _                   _____            
| | | | __ ___   _____  |  ___|   _ _ __  
| |_| |/ _` \ \ / / _ \ | |_ | | | | '_ \
|  _  | (_| |\ V /  __/ |  _|| |_| | | | |
|_| |_|\__,_| \_/ \___| |_|   \__,_|_| |_|                                      
````
