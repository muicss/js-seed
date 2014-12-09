# js-seed

[![Build Status](https://travis-ci.org/amorey/js-seed.svg?branch=master)](https://travis-ci.org/amorey/js-seed)
[![Dependency Status](https://david-dm.org/amorey/js-seed.svg)](https://david-dm.org/amorey/js-seed)
[![devDependency Status](https://david-dm.org/amorey/js-seed/dev-status.svg)](https://david-dm.org/amorey/js-seed#info=devDependencies)

js-seed is a skeleton project for JavaScript apps and packages. You can use it to quickly bootstrap your JavaScript projects.

This project contains a sample application with the following features:

 * npm for dependency management
 * Gulp.js for builds
 * Sass for css templating
 * CommonJS module syntax for code modularity
 * Browserify for frontend dependency management
 * Uglify for JavaScript compression
 * Jest for unit testing
 * Node.js entrypoint

Our goal is to help developers build JavaScript apps and packages from the ground up using current best practices. If you have suggestions for how to improve `js-seed` please create a GitHub issue or submit a pull request.

## Directory structure

<pre>
js-seed/
|-- examples
|   |-- assets
|   |   `-- js-seed
|   |       |-- css
|   |       |   |-- js-seed.css
|   |       |   `-- js-seed.min.css
|   |       `-- js
|   |           |-- js-seed.js
|   |           `-- js-seed.min.js
|   `-- index.html
|-- gulpfile.js
|-- main.js
|-- package.json
|-- README.md
|-- src
|   |-- js
|   |   |-- init.js
|   |   `-- lib.js
|   `-- sass
|       |-- _mixins.scss
|       |-- style.scss
|       `-- _variables.scss
`-- __tests__
    `-- lib-test.js
</pre>

## Dependencies

 * nodejs (http://nodejs.org/)
 * npm (https://www.npmjs.org/)
 * Sass (http://sass-lang.com/)

## Quickstart

1. Download a copy of js-seed

   ```bash
   $ wget https://github.com/amorey/js-seed/archive/master.zip
   $ unzip master.zip
   $ cd js-seed-master
   ```

1. Install nodejs dependencies

   ```bash
   $ npm install
   ```

1. Build examples

   ```bash
   $ ./node_modules/.bin/gulp examples
   ```

  To view the example you can use any static file server. To use the nodejs `http-server` module:
  
  ```bash
  $ npm install http-server
  $ ./node_modules/.bin/http-server -p 8081
  ```
  
  Then visit http://localhost:8081/examples/.
  
  ![example](https://dl.dropboxusercontent.com/u/1644/js-seed/%E2%80%8Eoctodev_8081_examples_.png)
  
  If everything worked properly, when you click on the button an alert message will pop up.

1. Watch for changes

   ```bash
   $ ./node_modules/.bin/gulp watch
   ```

  Re-build the examples anytime a sass file a js file changes.

## Creating production builds

To create a production build of the app, run `gulp dist`:

```bash
$ ./node_modules/.bin/gulp dist
```

The build will be located in the `dist` directory:

<pre>
dist/
|-- css
|   |-- js-seed.css
|   `-- js-seed.min.css
`-- js
    |-- js-seed.js
    `-- js-seed.min.js
</pre>

To deploy the app just copy the `dist` directory to a location of your choosing.

## Node.js entrypoint

The skeleton is configured to export a nodejs module via the `main.js` file. The file can be modified to expose other functionality. Here's an example of how to download js-seed from GitHub and use it as a nodejs module:

```bash
$ npm install git@amorey/js-seed
$ nodejs
> var jsSeed = require('js-seed');
> jsSeed.message();
js-seeeeed!
```

## Unit tests

The skeleton is configured to use Jest (https://facebook.github.io/jest/) for unit testing. To run the unit tests install jest-cli then run jest:

```bash
$ npm install jest-cli
$ ./node_modules/.bin/jest
Found 1 matching test...
PASS  __tests__/lib-test.js (0.017s)
1 test passed (1 total)
Run time: 0.784s
```
