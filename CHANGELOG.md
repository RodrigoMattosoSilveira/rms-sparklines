# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.3.9] - 2020-04-04
#### Changed
* Migrated line to the new OO paradigm

## [0.3.4] - 2019-07-05
#### Changed
* Fixed the version in ls

## [0.3.0] - 2019-07-04
#### Changed
* Implemented bullet charts, with tooltips

## [0.3.0] - 2019-06-01
#### Changed
* Migrated to Angular 7, switched from Web to Angular components

## [0.2.3] - 2018-09-02
#### Changed
* Trying to fix a hard to understand bug in TRAVIS

## [0.2.2] - 2018-09-01
#### Changed
* Trying to fix a hard to understand bug in TRAVIS

## [0.2.1] - 2018-09-01
#### Changed
* Trying to fix a hard to understand bug in TRAVIS: Module parse failed: /home/travis/build/RodrigoMattosoSilveira/rms-sparklines-styleguide/node_modules/rms-sparklines/util-lib/src/util-lib.ts Unexpected token (10:33)
You may need an appropriate loader to handle this file type.

## [0.2.0] - 2018-09-01
#### Changed
* Added tooltips to barchart; now all sparklines have tooltips

## [0.2.0-alpha.8] - 2018-08-03
#### Changed
* Fixed tooltip bug on inline and boxplot sparklines, where tooltips are not removed after moving away from the tooltip zone, while still withing the canvas area.

## [0.2.0-alpha.7] - 2018-08-03
#### Changed
* Fixed tooltip bug on inline and boxplot sparklines

## [0.2.0-alpha.6] - 2018-07-30
## Added
* support for tooltips on rms-sparkline-boxplot

## [0.2.0-alpha.5] - 2018-07-28
## Added
* support for tooltips on rms-sparkline-inline
## Changed
* Fixed bugs with inline

## [0.2.0-alpha.4] - 2018-07-17
## Changed
* Fixed documentation typos; included details about new ways to pass arrays.

## [0.2.0-alpha.3] - 2018-07-15
## Changed
* Refactored to generate all components according to Web Component best practices for structures; more work required to comply with all recommendations.


## [0.2.0-alpha.2] - 2018-07-07
## Changed
* consolidating all utility classes in uti-lib

## [0.2.0-alpha.1] - 2018-07-06
### Changed
* added SVG support for box plot as an experiment

## [0.1.4] - 2018-07-06
### changed Added information about the new sparkline to the README

## [0.1.3] - 2018-07-06
### Added
* Support for the boxplot sparkline chart

## [0.1.2] - 2018-06-30
### Added
* a color validation class, CssColorString, to be used by all sparkline validating colors

### Changed
* replaced color validations to use CssColorString

## [0.1.1] - 2018-06-29
### Changed
* Debugging a build problem with angular-cli
* Removed a debug log statements

## [0.1.0] - 2018-06-28
### Added
* Refactored rms-sparlline-barchart to support positive, negative, dual, and tri charts. Replaced the drawing logic a separate class, providing us with the ability to write extensive unit tests.

### Changed
* Removed default values from rms-sparlline-inline and rms-sparlline-barchart; now a messages is shown, and the web component does nothing.

## [0.0.10-alpha.4] - 2018-06-14
### Changed
* Removed unecessary logic
## [0.0.10-alpha.3] - 2018-06-14
### Changed
* Removed a console.log

## [0.0.10-alpha.2] - 2018-06-14
### Changed
* Fixed Polymer component throws an exception inside the static circle() function #22
** a hack to solve a problem drawing when running inside vaadin-grid

## [0.0.10-alpha.1] - 2018-06-14
### Changed
* Fixed Polymer component throws an exception inside the static circle() function #22
** DrawMethods.circle requires 6 arguments
** DrawMethods.circle requires a !null CanvasRenderingContext2D argument
** DrawMethods.circle requires a !null Point argument

## [0.0.9] - 2018-05-18
### Changed
* rms-sparklines-inline
  * Fixed a README incorrect reference to `linePoints` to be `linepoints`
  * Commented out a console.log statement  in DrawMethods.line

## [0.0.8] - 2018-05-03
### Changed
- rms-sparklines-inline, significant changes, see its README for details
- rms-sparklines-bar-chart, only README

## [0.0.7] - 2018-05-03
### Changed
- rms-sparkline-inline to fix issue#3: Inline dots chopped in half; see rms-sparkline-inline/README for details on the component changes

## [0.0.1] - 2018-05-01
### Added
* Added a travis.yml file to trigger automated builds and deployment.

### Changed
* Consolidated all sparkline web components into this single host.
* Refactored the setup script to make it simpler to add a web component


## [0.0.7-alpha.1] - 2018-05-03
### Added
- Created a new class to host drawing methods, DrawMethods; started with a circle.

### Changed
- Fixed a bug on CanvasMath, where the dotRadius needed to be counted twice
- Refactored rms-sparkline-inline to use DrawMethods.circle

### Removed
- N/A
