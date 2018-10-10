const add = require('./add');
const http = require('http');
const asyncAwait = require('./util');
const axios = require('axios');

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});


describe('Async', () => {
    it('works with async/await', async () => {
        const resArr = await asyncAwait('./data-summary.csv', {});
        for (const params of resArr) {
            const res = await axios.get(`http://localhost:1935/summary?user_id=${params.user_id}&token_id=${params.token_id}&username=${params.username}&password=${params.password}`);
            expect(res.data).toEqual(params);
        }
    });
});


