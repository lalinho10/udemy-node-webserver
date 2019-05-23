const port = process.env.PORT || 3000;



const hbs = require('hbs');

require('./hbs/helpers');

hbs.registerPartials(__dirname + '/views/partials');



const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('index', {
        nombre: 'lalinho10'
    });
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about');
});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});