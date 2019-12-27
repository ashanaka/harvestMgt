const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Farmer = mongoose.model('Farmer');


router.get('/add', (req, res) => {
    res.render("farmers/addOrEdit",
        {
            formTitle: "Insert Farmer"
        }
    );
});


//Insert farmer by POST method
router.post('/add', (req, res) => {
    insertFarmer(req, res);
});

function insertFarmer(req, res) {

    let farmer = new Farmer();
    farmer.name = req.body.name;
    farmer.nic = req.body.nic;
    farmer.mob_no = req.body.mob_no;
    farmer.save((err, doc) => {
        if (!err) {
            res.redirect('/farmer/add');
        } else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("farmer/addOrEdit", {
                    formTitle: "Insert employee",
                    employee: req.body
                })
            } else {
                console.log("error of insertion : " + err);
            }
        }
    });
}


module.exports = router;