import equal from './private-methods/equal.js';
import throws from './private-methods/throws.js';

/**
 * getExt() unit tests
 * 
 * @param   {function}  f  getExt()
 * @return  {void}
 * @throws  Throws an `Error` if a test fails
 */
export default function getExtTest(f) {

    // Argument is incorrect type.
    throws(()=>f(),
        `Error: getExt(): url is type 'undefined' not 'string'`);
    throws(()=>f(null),
        `Error: getExt(): url is type 'object' not 'string'`);

    // Basic, no extension.
    equal(f(''), // empty string
            void 0);
    equal(f('a'), // filename
            void 0);
    equal(f('a/b'), // path
            void 0);
    equal(f('a/b/'), // path
            void 0);
    equal(f('https://-.com/'), // url
            void 0);
    equal(f('https://-.com/a/b'), // url
            void 0);
    equal(f('https://-.com/a/b/'), // url
            void 0);

    // Basic, empty string extension.
    equal(f('.'),
            '');
    equal(f('a.'), // filename
            '');
    equal(f('a/b.'), // path
            '');
    equal(f('a/b/.'), // path
            '');
    equal(f('https://-.com/.'), // url
            '');
    equal(f('https://-.com/a/b.'), // url
            '');
    equal(f('https://-.com/a/b/.'), // url
            '');

    // Basic, normal extension.
    equal(f('.txt'),
            'txt');
    equal(f('a.txt'), // filename
            'txt');
    equal(f('a/b.TXT'), // path, UPPERCASE
            'txt');
    equal(f('a/b.txt.zip'), // path, zipped
            'zip');
    equal(f('a/b/.txt'), // path
            'txt');
    equal(f('https://-.com/.Txt'), // url, Title Case
            'txt');
    equal(f('https://-.com/a/b.txt'), // url
            'txt');
    equal(f('https://-.com/a/b/.tXt'), // url, mIxEdCaSe
            'txt');

    // Query string.
    equal(f('?'),
            void 0);
    equal(f('?a'),
            void 0);
    equal(f('?.a'),
            void 0);
    equal(f('?a.'),
            void 0);
    equal(f('?a.txt'),
            void 0);
    equal(f('.?'),
            '');
    equal(f('.A?b'),
            'a');
    equal(f('.A?b.c'),
            'a');
    equal(f('a/b/c.txt?d.e'),
            'txt');
    equal(f('https://-.com/a/b?c.jpg'),
            void 0);
    equal(f('https://-.com/a/b.txt?c.jpg'),
            'txt');

    // From https://www.netmeister.org/blog/urls.html
    equal(f('https://jschauma:hunter2@www.netmeister.org:443/blog/urls.html?q=s&q2=a+b;q3=sp%0Ace#top'),
            'html');
}
