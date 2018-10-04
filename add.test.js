const add = require('./add');
const http = require('http');
const iterationData = require('./util');


iterationData('./data-summary.csv', {}, function(){
    console.log("KKK: ", arguments);
});

const axios = require('axios');

const getBreeds = async () => {
  try {
    return await axios.get('https://dog.ceo/api/breeds/list/all')
  } catch (error) {
    console.error(error)
  }
}

const countBreeds = async () => {
  console.log("JJJJJJJJJJJJ")
  const breeds = await getBreeds()
  console.log("KKKKKKK")
 
  if (breeds.data.message) {
    console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
  }
}



describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});



describe('Async', () => {
    it('works with async/await', async () => {
        const res = await axios.get('http://localhost:1935/summary?a=123');
        expect(res.data).toEqual({a: '123'});
    });
});


