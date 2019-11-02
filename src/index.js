const express = require("express");
const app = express();

const morgan = require("morgan");

// process.env.PORT si ya existe un puerto definido que lo tome
// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2); // formatear json

// middlewares dev, combined
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// rutas desde este archivo (no recomendado)
/*app.get('/', function (req, res) {
    //res.send('[GET]Saludos desde express');
    res.json({"Title": "[GET]Saludos desde express"});
});*/
app.use('/api', require('./routes/index'));
app.use('/api/clients', require('./routes/clients'));
app.use('/api/users', require('./routes/users'));

// starting the server
app.listen(app.get('port'), () => {
 console.log("El servidor está inicializado en el puerto 3000");
});
