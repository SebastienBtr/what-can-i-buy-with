'use strict';

var express = require('express');
var router = express.Router();

var productService = require('../services/product.srv.js');

router.get('/product/:id', function (req, res) {

    var id = req.params.id;

    productService.findById(id, function (product) {
        res.send(product);
    }, function (error) {
        console.error(error);
        res.statusCode = 401;
        res.send({ errorCode: 'Error SQL when searching the product' });
    });
});

module.exports = router;
//# sourceMappingURL=product.ctrl.js.map