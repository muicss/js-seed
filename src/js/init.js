/**
 * init.js - example of file that imports a library
 *
 */
var lib = require('./lib.js');

// fire on window 'load' event
lib.attachEvent(window, 'load', function() {
  // fire on 'click' event
  lib.attachEvent(document.body, 'click', function(ev) {
    if (ev.target.tagName === 'BUTTON') alert('js-seeeeed!');
  });
});

