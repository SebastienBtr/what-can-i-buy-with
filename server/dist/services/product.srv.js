'use strict';

var db = require('../db.js');

module.exports.findById = function (id, success, error) {

    var query = 'SELECT * FROM product WHERE id = ?';

    db.connection.query(query, [id], function (err, rows) {

        if (!err) {
            success(rows[0]);
        } else {
            console.error(err);
            error(err);
        }
    });
};
//# sourceMappingURL=product.srv.js.map