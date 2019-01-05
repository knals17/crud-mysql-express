const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const mysqlconnect = require('express-myconnection');

const app = express();

//Importar rutas
const customerRutas = require('./rutas/customer');

//setup Express
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(mysqlconnect(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'luiscanalest',
    port: 3306,
    database: 'crud_node'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/', customerRutas);

//Archivos estaticos
app.use(express.static(path.join(__dirname,'public')));


//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto ' + app.get('port'));
});