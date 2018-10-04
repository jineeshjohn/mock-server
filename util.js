var fs = require('fs');
var parseCsv = require('csv-parse');



var fetch = function (location, options, callback) {
    return (/^https?:\/\/.*/).test(location) ?
        // Load from URL
        request.get({ url: location }, (err, response, body) => {
            if (err) {
                return callback(err);
            }

            return callback(null, body);
        }) :
        fs.readFile(location, function (err, value) {
            if (err) {
                return callback(err);
            }
            return callback(null, value.toString());
        });
};

var iterationData = function (location, options, cb) {


    fetch(location, options, function (err, data) {
        parseCsv(data, {
            columns: true,
            escape: '\\',
            trim: true
        }, cb);
    });
    // return new Promise((resolve, reject) => {
    //     navigator.geolocation.getCurrentPosition(resolve, reject, options);
    // });

}

iterationData('./data-summary.csv', {}, function(){
    console.log("KKK: ", arguments);
});

module.exports = iterationData;
