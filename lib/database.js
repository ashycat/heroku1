'use strict';
var mongoose = require('mongoose');

var db = function () {
    return {
        config: function (conf) {
            //mongoose.connect('mongodb://' + conf.host + '/' + conf.database);
            mongoose.connect('mongodb://admin:admin@ds041841.mongolab.com:41841/shocart');
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function callback() {
                console.log('db connection open');
            });
        }
    };
};

module.exports = db();
