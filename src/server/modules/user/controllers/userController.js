'use strict'; 

const User = require('../models/user');

class userController {
    getUsers (request, reply) {
      User.find({}, function(err, users) {
        reply(users);  
      });
    }

    createUser(request, reply) {
        const { name } = request.payload;
        const newUser = new User({ name });

        newUser.save((err) => {
            if (err) throw err;

            User.find({}, (err, users) => {
                reply(users);
            });

            console.log('User saved successfully!');
        });
    }

    deleteUser (request, reply) {
      const { id } = request.payload;

      User.findOneAndRemove({_id: id}, (err, user) => {
        if (err) throw err;

        User.find({}, (err, users) => {
          reply(users);  
        });
      });
    }
}

module.exports = new userController();