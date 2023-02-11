/**
 * An object containing `devServer()` configuration (default is `{}`)
 */
export type DevServerOptions = {
    /**
     * Path of the root directory of the files to serve (default is `'src'`)
     */
    dir?: string;
    /**
     * Whether to open `/index.html` in your web browser (default is `false`)
     */
    doOpen?: boolean;
    /**
     * The IP address to listen on (default is `'127.0.0.1'` which is localhost)
     */
    host?: string;
    /**
     * The port to listen on (default is `4321`)
     */
    port?: number;
};
/**
 * Creates a simple server, for zero-build development on your local machine.
 *
 * @typedef {Object} DevServerOptions
 *     An object containing `devServer()` configuration (default is `{}`)
 * @property {string} [dir='src']
 *     Path of the root directory of the files to serve (default is `'src'`)
 * @property {boolean} [doOpen=false]
 *     Whether to open `/index.html` in your web browser (default is `false`)
 * @property {string} [host='127.0.0.1']
 *     The IP address to listen on (default is `'127.0.0.1'` which is localhost)
 * @property {number} [port=4321]
 *     The port to listen on (default is `4321`)
 *
 * @param {Object} [repairMap={}]
 *     Lookup-table of export and import mappings, to pass to repairJsImports()
 * @param {DevServerOptions} [options={}]
 *     An object containing `devServer()` configuration (default is `{}`)
 * @return {void}
 *     Does not return anything
 */
export function devServer(repairMap?: any, options?: DevServerOptions): void;
/**
 * Returns the extension from a filename, path or url, converted to lowercase.
 *
 * Returns undefined if no extension is present.
 *
 * @param   {string}  url
 *     A filename, path or url which may end in an extension
 * @return  {string|void}
 *     Returns the extension, or undefined if no extension is present
 */
export function getExt(url: string): string | void;
