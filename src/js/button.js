/**
 * JS-Seed Vanilla-JS button module
 * @module button
 */

/** Define module API */
module.exports = {
  attachListeners: function() {
    let els = document.getElementsByClassName('seed-button'),
        i;

    for (i = 0; i < els.length; i++) {
      els[i].addEventListener('click', function() {
        alert('click');
      });
    }
  }
};
