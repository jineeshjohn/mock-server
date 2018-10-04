var fs = require('fs');
var parseCsv = require('csv-parse');



var fetch = function (location, options, callback) {
    !callback && _.isFunction(options) && (callback = options, options = {});

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
},

var iterationData = function (location, options, callback) {
    console.log("JJJJJ: ", location);
    if (_.isArray(location)) { return callback(null, location); }

    fetch(location, function (err, data) {

        parseCsv(data, {
            columns: true,
            escape: '\\',
            trim: true
        }, cb);
    });

}

iterationData('./data-summary.csv', {}, function(){
    console.log("KKK: ", args);
});
