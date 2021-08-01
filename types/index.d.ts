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
declare class aio {
    static amIonline(): boolean;
    static whenOffline(callback: () => void): void;
}
export default aio;
//# sourceMappingURL=index.d.ts.map