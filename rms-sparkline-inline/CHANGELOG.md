# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.0.9] - 2018-05-18
### Changed
- migrated to its parent

## [0.0.8] - 2018-05-17
### Added
- linepoints is now fully managed attribute, and causing drwaing refresh when changed.
- decorationpoing attribute, to enable to compoent user to define a collection of decorations to be placed along the line; presently only circles are supported
- A new DrawMethods method, line, to draw lines.
- A Decoration interrace to define the decorationpoints.

### Changed
- Moved line drawing the comnponent to DrawMethods.line
- Unit tests to adhere to changed attributes

### Removed
- startcolor, endcolor, maxcolor, mincolor, tooltip, and shade attributes. See tye hew decorationpoints attribute for details.

## [0.0.7] - 2018-05-03
### Added
- Created a new class to host drawing methods, DrawMethods; started with a circle.

### Changed
- Fixed a bug on CanvasMath, where the dotRadius needed to be counted twice
- Refactored rms-sparkline-inline to use DrawMethods.circle

## [0.0.4] - 2018-04-29
### Changed
* CHANGELOG
    * This log was on the bar-chart ... again, time to go to bed!
* README
    * Removed references to the scope, `@guigo`; I was not able to install it.
* package.json
    * Updated the new version number

## [0.0.3] - 2018-04-29
### Changed
* README
    * Removed references to the scope, `@guigo`; I was not able to install it.
* package.json
    * Updated the new version number

## [0.0.2] - 2018-04-29
### Changed
* README
    * Added references to the scope, `@guigo`
    * Replaced the version numer with a generic reference.
    * Replaced the name of the target application with a generic application name.
* package.json
    * Added the new version number
    * Made it a public package, `publishConfig`

## [0.0.1] - 2018-04-27
### Added
-`Wrote the sparkline.

### Changed
- This is the original version, nothing changed.

### Removed
- This is the original version, nothing was removed.
