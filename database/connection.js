const mongoose = require('mongoose');

async function database() {
    try {
        await mongoose.connect('mongodb://localhost:27017/server-test');
        console.log('Connected to mongo 🎲 !');
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = database();