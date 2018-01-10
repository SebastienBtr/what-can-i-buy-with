let mysql = require('mysql');
let conf = require('./config.js');

let dbParams = conf.get('db');

module.exports.connection = mysql.createConnection({
    host     : dbParams.host,
    user     : dbParams.user,
    password : dbParams.password,
    database : dbParams.database
});