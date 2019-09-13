const mongoose = require('mongoose');


const UserShema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 6,
        max: 255
    }, email: {
        type: String,
        require: true,
        min: 6,
        max: 255
    }, password: {
        type: String,
        require: true,
        min: 6,
        max: 1024
    }, date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserShema);
