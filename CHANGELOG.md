# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.0.7] - 2018-05-03
### Changed
- rms-sparkline-inline to fix issue#3: Inline dots chopped in half 

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

