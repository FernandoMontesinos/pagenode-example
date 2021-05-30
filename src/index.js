const express = require('express');
const app = express();
const path = require('path');


// Configuraciones
app.set('port', 2000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

// Escuchando el servidor
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));
});


