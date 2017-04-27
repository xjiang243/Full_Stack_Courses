var mongoose = require('mongoose');
var schema = mongoose.Schema;

var leaderSchema = new schema({
    
    name:{
        type: String,
        required: true
    },
    image: {
        type: String
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
});

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;