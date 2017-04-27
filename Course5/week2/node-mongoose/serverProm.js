var mongoose = require('mongoose'),
    assert = require('assert');

var Promos = require('./models/promotions');


var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new promo
    Promos.create({
        name: 'Weekend Grand Buffet',
        image: 'images/buffet.png',
        label: 'New',
        price: '19.99',
        description: 'Featuring . . .',
    }, function (err, promo) {
        if (err) throw err;
        console.log('Promo created!');
        console.log(promo);

        var id = promo._id;

        // get all the promos
        setTimeout(function () {
            Promos.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated Test'
                    }
                }, {
                    new: true
                })
                .exec(function (err, promo) {
                    if (err) throw err;
                    console.log('Updated Promo!');
                    console.log(promo);
                
                db.collection('promotions').drop(function () {
                            db.close();
                        });
                    });
        }, 3000);
    });
    });