require('./models/db');
const express = require('express');


const app = express();

//Starting the server
app.listen(5000, () => {
    console.log('Express server started using port : 5000');
});