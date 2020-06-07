const langArray = ['javascript', 'typescript', 'html', 'css', 'shell', 'scss', 'java', 'cpp', 'c', 'python'];

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
loadLanguages(langArray);

// Crear un mapa con los lenguajes y regexps que permiten hacer match con "language-<idioma>"
const langRegexps = langArray.reduce( (map, lang) => {
    map[lang] = new RegExp(`language-${lang}(.|\s)*?[\"']`, 'i');
    return map;
}, {});

/**
 * Ej: startCodeTag = <code class="language-javascript"> ; resultado -> javascript
 */
const getLanguage = ( startCodeTag ) => {
    for( const lang of Object.keys(langRegexps) ){
        const re = langRegexps[lang];
        if( re.test(startCodeTag) ){
            return lang;
        }
    }
    return null;
};

const prismjsCodeHighlight = ( html ) => {
    // Regexp que hace match con <code class="language-javascript"> (etiqueta de comienzo de código)
    const replaceStartCodeTagRegexp = new RegExp(/<\s*code\s*class=["'](.|\s)*?language-(.|\s)*?["'].*>/, 'i');
    // Regexp que hace match con </code> (etiqueta de fin de código)
    const replaceEndCodeTagRegexp = new RegExp(/<\s*\/\s*code>/, 'i');
    // Regexp que obtiene, de un html, todas las etiquetas <code...></code> y su contenido
    const codeRegexp = new RegExp( /<\s*code\s*class=["'](.|\s)*?language-(.|\s)*?["'].*>(.|\s)*?<\s*\/\s*code>/, 'ig' );
    const res = html.replace(codeRegexp, (str) => {
        const codeTagStart = str.match( replaceStartCodeTagRegexp )[0];
        const lang = getLanguage( codeTagStart );
        if( lang ){
            const codeTagEnd = str.match( replaceEndCodeTagRegexp )[0];
            // Quitamos las etiquetas de comienzo y cierre
            str = str.replace( replaceStartCodeTagRegexp, '' ).replace( replaceEndCodeTagRegexp, '' );
            // Decodificamos los caracteres especiales &lt; &quot; etc
            str = entities.decode(str);
            // Code highlight con prismjs :)
            str = Prism.highlight( str, Prism.languages[lang], lang );
            str = `${codeTagStart}${str}${codeTagEnd}`;
        }
        return str;
    });
    return res;
};

module.exports = {
    highlight: prismjsCodeHighlight
};