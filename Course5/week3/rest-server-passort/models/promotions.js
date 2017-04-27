var mongoose = require('mongoose');
var schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promoSchema = new schema({
    
    name:{
        type: String,
        required: true
    },
    image: {
        type: String
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency
    },
    description: {
        type: String,
        required: true
    }
    
});

var Promos = mongoose.model('Promo', promoSchema);

module.exports = Promos;