const add = require('./add');
const http = require('http');
const asyncAwait = require('../util');
const axios = require('axios');
const each = require('jest-each');




var https = require('https');

// var APIs = [ 'last-day', 'last-week', 'last-month' ];

// describe('Asynchronous loop testing', function(){

//     it.each(APIs, 'Testing code of %s', ['element'], function(element, next){
//         https.get({
//             hostname: 'api.npmjs.org',
//             path: '/downloads/point/' + element + '/it-each'
//         }, function(res){
//             // Check res code
//             if(res.statusCode != 200){
//                 throw new Error('Found none 200 response code at ' + element + '!');
//             }

//             // annoyingly you can't fire 'end' without 'data'
//             res.on('data', new Function()).on('end', next);
//         });
//     });

// });


function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


 

// describe('abc describe', async() => {
//     // first way
    
//     for (let test in [1,2,4]) {
//         // await timeout(3000);
//         it('Test it: ' + test, () => {
//             expect(true).toBe(true);
//         })
//     }
// })

// describe('Async', async () => {
//     const resArr = await asyncAwait('./positiveScenarios_singlePolicy.csv', {});
//     const domain = 'http://localhost:2020/insurancepolicies';
//     it.each(resArr, 'Response Status should be 200',   (params) => {
//         const url = `${domain}?policyNumbers=${params.policyID}:${policyType}:${DC_SYSTEMID}&customerNumbers=${customerID}:${DC_SYSTEMID}&affinityId=${brand}&effectiveDate=${effectiveDate}`;
//         console.log("URL: ", url);
//         // const res = await axios.get(url);
//        //  expect(res.status).should.have.status(200);
//        expect(true).toBe(true);
//     });
// });

// each([[1, 1, 2], [1, 2, 3], [2, 1, 3]]).test(
//     'returns the result of adding %d to %d',
//     (a, b, expected) => {
//       expect(a + b).toBe(expected);
//     },
//   );


describe('adds', () => {
    it('should add two numbers', () => {
      expect(add(1, 2)).toBe(3);
    });
  });
  

// describe('Async', () => {
//     it('works with async/await', async () => {
//         const resArr = await asyncAwait('./data-summary.csv', {});
//         for (const params of resArr) {
//             const res = await axios.get(`http://localhost:1935/summary?user_id=${params.user_id}&token_id=${params.token_id}&username=${params.username}&password=${params.password}`);
//             expect(res.data).toEqual(params);
//         }
//     });
// });


