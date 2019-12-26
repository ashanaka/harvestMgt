const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Country_cordinator');



router.get('/add', (req, res) => {
    res.render("country_cordinators/addOrEdit",
        {
            formTitle: "Insert Country Cordinator"
        }
    );
});



module.exports = router;