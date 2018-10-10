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
}

// Test 1
// iterationData('./data-summary.csv', {}, function (a, b) {
//     console.log('YYY:', b);
// });


var asyncAwait = async (location, options) => {
    return new Promise((resolve, reject) => {
        fetch(location, options, function (err, data) {
            parseCsv(data, {
                columns: true,
                escape: '\\',
                trim: true
            }, function(a, b){
                resolve(b)
            });
        });
    });
}

// Test 2
// const testAsync =  async () => {
//     const res = await asyncAwait('./data-summary.csv', {});
//     console.log("EEE:" , res);
//  }

// testAsync();



// const foo = async () => {
//     return "TTTT";
// };

// foo().then(console.log)
module.exports = asyncAwait;
