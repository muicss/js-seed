/**
 * main.js - example of file that imports a library
 *
 */
var lib = require('./lib.js');

lib.attachEvent(window, 'load', function() {
  lib.attachEvent(document.body, 'click', function(ev) {
    if (ev.target.tagName === 'BUTTON') alert('js-seeeeed!');
  });
});

