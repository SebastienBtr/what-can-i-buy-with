let express = require('express');
let router = express.Router();

let productService = require('../services/product.srv.js');

router.get('/products', (req, res) => {

    productService.findById(id, (product) => {
        res.send(product);

    }, (error) => {
        console.error(error);
        res.statusCode = 401;
        res.send({ errorCode: 'Error SQL when searching products' });
    });

});

router.get('/product/:id', (req, res) => {

    let id = req.params.id;

    productService.findById(id, (product) => {
        res.send(product);

    }, (error) => {
        console.error(error);
        res.statusCode = 401;
        res.send({ errorCode: 'Error SQL when searching the product' });
    });

});


module.exports = router;