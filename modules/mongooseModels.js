require('dotenv').config()
const mongoose = require('mongoose');

// Connecting to mongoose database.
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

// Syllabus Schema
const syllabQBankSchema = new mongoose.Schema({
    type : String,
    name : String,
    url : String,
    brSem : String
});

// mongoose model of user profile
module.exports.SyllabQBank = new mongoose.model('syllabqBank', syllabQBankSchema);