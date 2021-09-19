const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    description: {type: String, required: false},
});

const records = new mongoose.model('User', schema);

module.exports = records;