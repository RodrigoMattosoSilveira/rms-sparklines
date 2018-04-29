&lt;rms-sparklines&gt;
=

Description
--
This is a collection of web components to render [sparklines](https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR), conceived by [Edward Tufte](https://www.edwardtufte.com/tufte/). My motivation for this project is to use web component technology to implement sparklines. The project's overall concepts, but not source code, borrows extensively from [Gareth Watts](https://omnipotent.net/jquery.sparkline/#s-about) jQery project.

These webcomponents are built using the [@nutmeg/cli](https://github.com/abraham/nutmeg-cli); this document assumes you are familiar with it and the ancilary technbologies required by [@nutmeg/cli](https://github.com/abraham/nutmeg-cli).

## Installation
Cloning this repository: 
* **$** `cd ~`
* **$** `git clone https://github.com/RodrigoMattosoSilveira/sparklines`

Initialize the sparklines
* **$** `cd ~/sparklines`
* **$** `npm run setup`

This will take a few minutes, and does the following
* For each sparkline package
    * Installs the packages required by each sparkline package
    * Builds the sparkline package
    
## Write a new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component
The following steps are required:
* Install `rms-sparklines`
* Create a [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component scaffold.
* Install `rms-sparklines-styleguide` to showcase the new web component
* Create a `rms-sparklines-styleguide` application component, `rms-sparkline-awesome`, to showcase its [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component cousin. 
* Integrate the `rms-sparkline-awesome` web component into the `rms-sparklines-styleguide` application.
* Develop the new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component.
* Publish the new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component.
* Set up the new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) component for general usage.

#### Install `rms-sparklines` 
See installation instructions above for details

#### Create a [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component
I use the [nutmeg-cli](https://github.com/abraham/nutmeg-cli) to generate web components; see the instructions therein for details:
* **$** `cd ~/rms-sparklines`
* **$** `nutmeg new rms-sparkline-awesome attribute_1:attribute_type ... attribute_4:attribute_type`

This will create a new folder, `rms-sparklines`, with the 

#### Install `rms-sparklines-styleguide` to showcase the new web component
See the [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide) README for instructions

#### Create a `rms-sparklines-styleguide` component
See the [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide) README / Setup to write a new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component section for instructions

#### Integrate the `rms-sparkline-awesome` component into the `rms-sparklines-styleguide` application
See the [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide) README / Setup to write a new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component section for instructions

#### Develop and publish the new component 
I reflect the patterns in the existing [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web components to set up the new web component:
* create a `draw (): HTMLCanvasElement` function.
* empty the ` private get styles(): TemplateResult` function, return only `<style></style>` for now.
* update the `private get template(): TemplateResult` function to return the results of the `get styles()` and `draw()` functions.
* update the `getter methods` to return default values were appropriate.
* Update the unit tests to validate the handling of default attributes, and changed attributes; once the sparkline is complete, then include the image generation validation.
* Renamde the `readme.md` to `README.md` and document your component requirements; keep this file updated as your component gains life.
* Create a `CHAGELOG.md` file, see the other `CHAGELOG.md` files in the repository for details.

Add the required logic, ensure the new logic is covered by unit tests, and that the existing tets pass:
* **$** `cd ~/rms-sparklines/rms-sparline-awesome`
* **$** `ng run test`

Update the `~/sparklines/app/setup.sh` script
* Add logic to re-install each of the web components packages, test, and build it
    * **$** `pushd rms-sparkline-awesome`
    * **$** `rm -rf node_modules`
    * **$** `npm install`
    * **$** `npm run test`
    * **$** `npm run prepare`
    * **$** `popd`

#### Publish the new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component.

#### Set up the new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) component for general usage.
See the [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide). README for instructions

## Update an existing [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component
The following steps are required:
* Install `rms-sparklines`
* Install `rms-sparklines-styleguide`
* Set up the [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) component for development.
* Develop and publish the new [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component.
* Set up the updated [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) component general usage.

#### Install `rms-sparklines`
See installation instructions above for details

#### Install `rms-sparklines-styleguide`
See the [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide) README for instructions

#### Set up the [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) component for development.
See the [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide) README / Setup to update and existing [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component section for instructions

#### Update the exiting [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component.
Change the existing component logic as required. Ensure the new logic is covered by unit tests, and that the existing tets pass:
* **$** `cd ~/rms-sparklines/rms-sparline-inilint`
* **$** `ng run test`

#### Publish the updated [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component.

#### Set up the updated [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) component general usage.
See the [rms-sparklines-styleguide](https://github.com/RodrigoMattosoSilveira/rms-sparklines-styleguide) README / Setup to update and existing [@rms/sparkline](https://github.com/RodrigoMattosoSilveira/rms-sparklines) web component section for instructions


## Last but not least
    
````html
 _   _                   _____            
| | | | __ ___   _____  |  ___|   _ _ __  
| |_| |/ _` \ \ / / _ \ | |_ | | | | '_ \ 
|  _  | (_| |\ V /  __/ |  _|| |_| | | | |
|_| |_|\__,_| \_/ \___| |_|   \__,_|_| |_|                                      
````