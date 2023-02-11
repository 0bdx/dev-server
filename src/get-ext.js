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
export default function getExt(url) {

    // Validate the argument.
    if (typeof url !== 'string') throw Error(
        `Error: getExt(): url is type '${typeof url}' not 'string'`);

    // Remove the query string, if there is one.
    const queryPos = url.lastIndexOf('?');
    if (queryPos !== -1) url = url.slice(0, queryPos);

    const exts = url.split('/').pop().split('.');
    if (exts.length === 1) return void 0;
    return exts.pop().toLowerCase();
}
