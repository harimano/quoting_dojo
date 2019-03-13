
const mongoose = require('mongoose'),
User = mongoose.model('User')

module.exports = {

    index: (req, res) =>{

        User.find({}, function(err, users) {
            if(err) {
                console.log('something went wrong');
                } else { // else console.log that we did well and then redirect to the root route
                console.log('here you go');
                }
        res.render('index');
        })

    },

newuser:(req, res) =>{
        console.log("POST DATA", req.body);
        // create a new User with the name and age corresponding to those from req.body
        var user = new User({name: req.body.name, quote: req.body.quote});
        user.save(function(err) {
            if(err) {
            console.log('something went wrong');
            } else { 
            console.log('successfully added a user!');
            }
        res.redirect('/result');
        })
},

result: (req, res) =>{
        User.find({}, function(err, users) {
            if(err) {
                console.log('something went wrong');
                } else { // else console.log that we did well and then redirect to the root route
                console.log('here you go');
                res.render('quotes', {users:users});
                }
        });
}
   
}