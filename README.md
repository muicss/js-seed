# js-seed

js-seed is a skeleton project for JavaScript apps and packages. You can use it to quickly bootstrap your JavaScript projects.

The skeleton contains a sample JavaScript application with the following features:

 * npm for dependency management
 * gulp.js for builds
 * sass for css templating
 * CommonJS module syntax for code modularity
 * Browserify for frontend dependency management
 * uglify for JavaScript compression
 * Jest for unit testing
 * nodejs entrypoint for easy sharing

## Directory tree

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
`-- src
    |-- js
    |   |-- init.js
    |   `-- lib.js
    `-- sass
        |-- _mixins.scss
        |-- style.scss
        `-- _variables.scss
</pre>

## Dependencies

 * nodejs
 * npm
 * sass

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
  $ npm install -g http-server
  $ http-server
  ```
  
  Then visit http://localhost:8081/examples/. If everything worked properly, when you click on the button an alert message will pop up.

## Creating production builds

To create a production build of the example app, run `gulp dist`:

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

## Use as nodejs module

The skeleton is configured to export a nodejs module via the `main.js` file. The file can be modified to expose other functionality. Here's an example of how to download js-seed from GitHub and use it as a nodejs module:

```bash
$ npm install git@amorey/js-seed
$ nodejs
> var jsSeed = require('js-seed');
> jsSeed.message();
js-seeeeed!
```
