"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }

    return o;
  }

  return r;
})()({
  1: [function (require, module, exports) {
    /**
     * JS-Seed Vanilla-JS main module
     * @module main
     */
    (function (win) {
      var buttonlib = require('src/js/button');

      document.addEventListener('DOMContentLoaded', function () {
        buttonlib.attachListeners();
      });
    })(window);
  }, {
    "src/js/button": 2
  }],
  2: [function (require, module, exports) {
    /**
     * JS-Seed Vanilla-JS button module
     * @module button
     */

    /** Define module API */
    module.exports = {
      attachListeners: function attachListeners() {
        var els = document.getElementsByClassName('seed-button'),
            i;

        for (i = 0; i < els.length; i++) {
          els[i].addEventListener('click', function () {
            alert('click');
          });
        }
      }
    };
  }, {}]
}, {}, [1]);