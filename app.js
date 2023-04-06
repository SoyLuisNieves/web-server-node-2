// Cargar variables de entorno
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');



const app = express();
const port = process.env.PORT;
// TODO: require('hbs');

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir mi contenido estatico
app.use( express.static('public') );

app.get('/', function(req, res) {
    res.render('home', {
        name: 'Luis Nieves',
        title: 'Web Server'
    });
});

app.get('/elements', function(req,res) {
    res.render('elements', {
        name: 'Luis Nieves Elements',
        title: 'Elements',
    })
});

app.get('/generic', function(req, res) {
    res.render('generic', {
        name: 'Luis Nieves Generic',
        title: 'Generic'
    })
})

app.get('/generic', function( req, res) {
    res.sendFile(__dirname + '/public/generic.html');
});


app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen( port, () => {
    console.log(`App runing at http://localhost:${ port }`);
});