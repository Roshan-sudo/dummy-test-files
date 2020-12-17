const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Mongoose Models
const SyllabQBank = require('./modules/mongooseModels').SyllabQBank;

// Middlewares
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

// APIs
require('./modules/apis')(app);

app.get('/', (req, res)=>{
    // res.render('home', {title : 'First Semester Syllabus'});
    res.send('Hello Roshan Seems that I am Working!');
});

app.listen(3000, ()=>{
    console.log('Listening on Port 3000');
});