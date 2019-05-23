const hbs = require('hbs');

hbs.registerHelper('getAnio', function() {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', function(texto) {
    let palabras = texto.split(' ');

    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
    });

    return palabras.join(' ');
});