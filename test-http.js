const axios = require('axios');

const getBreeds = async () => {
  try {
    return await axios.get('http://localhost:1935/summary?a=b');
  } catch (error) {
    console.error(error)
  }
}

const countBreeds = async () => {
  console.log("JJJJJJJJJJJJ")
  const breeds = await getBreeds()
  console.log("KKKKKKK")
 
    // console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
    console.log('LLLL:', breeds);
  
}


        countBreeds();
