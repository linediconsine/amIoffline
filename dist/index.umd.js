/*!
 * aio v0.0.0
 * (c) [authorFullName]
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['[libraryCamelCaseName]'] = {}));
}(this, (function (exports) { 'use strict';

  /**
   * Check if the connection is working.
   * @example ```ts
   * aio.amIonline();
   * //=> false
   *
   * aio.amIonline();
   * //=> true
   *
   * aio.whenOffline( () => {
   *   alert('lost connection')
   * } )
   * ```
   * @param void
   */
  var aio = /** @class */ (function () {
      function aio() {
      }
      aio.amIonline = function () {
          return navigator.onLine;
      };
      aio.whenOffline = function (callback) {
          var _this = this;
          setInterval(function () {
              if (_this.amIonline()) {
                  callback();
              }
          }, 400);
      };
      return aio;
  }());

  exports.default = aio;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
