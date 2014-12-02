(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"./lib.js":2}],2:[function(require,module,exports){
/**
 * lib.js - example of library file
 *
 */
function attachEventFn(element, name, callback, toBubble) {
  if (element.addEventListener) {
    element.addEventListener(name, callback, toBubble || false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + name, callback);
  }
}

module.exports = {
  attachEvent: attachEventFn
};

},{}]},{},[1])