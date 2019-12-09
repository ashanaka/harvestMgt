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