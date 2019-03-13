///////// ROUTES /////////////
const mongoose = require('mongoose'),
User = mongoose.model('User')
const controllers = require('./controllers.js');
module.exports = function(app){

    app.get('/', controllers.index);
     
    app.post('/users',controllers.newuser);

    app.get('/result', controllers.result);


}