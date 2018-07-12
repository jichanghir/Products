const express = require('express');
const router = express.Router();

const addNewProduct = require('./controllers/addNewProduct');

router.post('/addNewProduct', (req, res) => {
    addNewProduct()
    .then((result) => {
        res.send({
            result
        })
    })
    .catch((err) => {
        console.error(err);
        res.send({
            error: err
        });
    })
});

module.exports = router;
