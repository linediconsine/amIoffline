/*!
 * amioffline v0.0.1
 * (c) undefined
 * Released under the MIT License.
 */

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
            if (!_this.amIonline()) {
                callback();
            }
        }, 400);
    };
    return aio;
}());

export { aio };
//# sourceMappingURL=index.esm.js.map
