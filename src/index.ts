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
class aio {
  static amIonline() {
    return navigator.onLine
  }

  static whenOffline(callback: () => void): void {
    setInterval(() => {
      if (this.amIonline()) {
        callback()
      }
    }, 400);
  }
}

export default aio;
