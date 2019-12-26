require('./models/db');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//controllers
const country_cordinatorController = require('./controllers/country_cordinatorController');


const app = express();

//Starting the server
app.listen(5000, () => {
    console.log('Express server started using port : 5000');
});


//handlebars configuration
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'hbs');


//==================Middlewares==========================

app.use('/country_cordinator', country_cordinatorController);



//for testing purposes..
app.get('/test', (req,res) => {
    res.render('test');
});
