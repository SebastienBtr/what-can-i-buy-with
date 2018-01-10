let app = require('express')();
let conf = require('./config.js');
let dbParams = conf.get('db');
let db = require('./db.js');
let mysql = require('mysql');

let productController = require('./controllers/product.ctrl.js');

// all of our routes will be prefixed with /api
app.use('/api', [productController]);


function dbConnection() {

    let objConn = mysql.createConnection({
        host: dbParams.host,
        user: dbParams.user,
        password: dbParams.password,
        database: dbParams.database
    });

    objConn.connect( (err) => {

        if (err) {
            console.error('error when connecting to db:', err.code);
            setTimeout(dbConnection, dbParams.timeoutBeforeReconnection); // We introduce a delay before attempting to reconnect

        } else {
            console.info('Connected to db !');
            db.connection = objConn;
        }
    });

    objConn.on('error', (err) => {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually lost
            dbConnection();
        } else {
            throw err;
        }
    });
}

dbConnection();

let port = conf.get('server').port;

app.listen(port, () => {
    console.log('app listening on port ' + port);
});