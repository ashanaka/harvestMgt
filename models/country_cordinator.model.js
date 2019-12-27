const mongoose = require('mongoose');

let country_cordinatorSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    nic: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    farmers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer'
    }]
});

mongoose.model('Country_cordinator', country_cordinatorSchema);