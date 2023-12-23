#### FlowUiP5 Library for Angular

### Using js libraries as dependencies
The following js libraries are used as dependencies, libraries installed via either npm or by using git clone
to copy the repository to js-libs folder and then integrating accordingly.

## Installed via npm

p5.js  :  Installed via command 'npm install p5' at v1.9.0  :  https://p5js.org  :  https://github.com/processing/p5.js
npm install p5
@types/p5 : Installed via npm, defines p5.js types for typescript to prevent errors at v1.7.4
npm install @types/p5

## Installed via scripts on angular.json pulled from cloned repositories in js-libs folder.

p5.experience.js  :  Cloned to js-libs on 12/4/2023  : https://github.com/loneboarder/p5.experience.js/tree/master

p5.input.js  :  Cloned to js-libs on 12/4/2023  :  https://github.com/Buggem/processing.input/blob/main/p5.input.js

p5.polar : Cloned to js-libs on 12/4/2023  :  https://github.com/liz-peng/p5.Polar

p5.shape.js : Cloned to js-libs on 12/4/2023 : https://github.com/gaba5/p5.shape.js

These and other similar projects can be added to the project using the following command

git submodule add <url> js-libs/projectName.js

--- Excerpt from angular.json ---
"scripts": [
    "js-libs/p5.experience.js/p5.experience.js",
    "js-libs/processing.input/p5.input.js",
    "js-libs/p5.Polar/p5.polar.js",
    "js-libs/processing.input/p5.input.js"
]
---------------------------------

### Default Angular Docs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
