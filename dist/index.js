/*!
 * aio v0.0.0
 * (c) [authorFullName]
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
//# sourceMappingURL=index.js.map
