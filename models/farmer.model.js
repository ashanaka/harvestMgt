const mongoose = require('mongoose');

let farmerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    mob_no: {
        type: String
    },
    nic: {
        type: String
    },
    country_cordinator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country_cordinator'
    }
});

mongoose.model('Farmer', farmerSchema);