'use strict';

var mysql = require('mysql');
var conf = require('./config.js');

var dbParams = conf.get('db');

module.exports.connection = mysql.createConnection({
    host: dbParams.host,
    user: dbParams.user,
    password: dbParams.password,
    database: dbParams.database
});
//# sourceMappingURL=db.js.map