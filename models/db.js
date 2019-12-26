const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/harvestMgt",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if(!err){
            console.log('Mongodb connection is success!');
        }else{
            console.log('Error in connecting MongoDB');
        }
    }
);

require('./country_cordinator.model');
require('./dis_belongs.model');
require('./district.model');
require('./farmer.model');
require('./farmer_grows.model');
require('./plant.model');
require('./village.model');