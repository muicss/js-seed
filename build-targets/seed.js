/**
 * JS-Seed Vanilla-JS main module
 * @module main
 */

(function(win) {
  var buttonlib = require('src/js/button');

  document.addEventListener('DOMContentLoaded', function() {
    buttonlib.attachListeners();
  });
})(window);
