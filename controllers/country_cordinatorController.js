const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Country_cordinator = mongoose.model('Country_cordinator');



router.get('/add', (req, res) => {
    res.render("country_cordinators/addOrEdit",
        {
            formTitle: "Insert Country Cordinator"
        }
    );
});



//Insert country cordinator by POST method
router.post('/add', (req, res) => {
    insertCountry_cordinator(req, res);
});


function insertCountry_cordinator(req, res) {

    let country_cordinator = new Country_cordinator();
    country_cordinator.name = req.body.name;
    country_cordinator.nic = req.body.nic;
    country_cordinator.userName = req.body.nic;
    country_cordinator.password = req.body.nic;
    country_cordinator.save((err, doc) => {
        if (!err) {
            res.redirect('/country_cordinator/add');
        } else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("country_cordinator/addOrEdit", {
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