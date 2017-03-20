var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    type: String,
    loc: {
      x: Number,
      y: Number
    },
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

mongoose.model('User', userSchema);
