const axios = require('axios');
axios.get('http://www.mocky.io/v2/5bc07e7432000066006a329c')
    .then(response => {
        console.log("jj", response.status);
    })