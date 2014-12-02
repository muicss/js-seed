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
