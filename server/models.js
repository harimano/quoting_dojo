const mongoose = require('mongoose')

    var UserSchema = new mongoose.Schema({
        name: String,
        quote: String
    }, {timestamps: true});

    mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
