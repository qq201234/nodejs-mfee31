const axios = require('axios');
const fs = require('fs');

let p = new Promise((resolve, reject) => {
    fs.readFile('stock.txt', 'utf-8', (err, data) => {
        if (err) {
        reject(err);
        } else {
        resolve(data);
        }
    });
});

  (async () => {
    try {
      let stockNo = await p;
      let date = '20221111';
      let response = await axios.get(`http://54.71.133.152:3000/stocks`, {
      params: {
        stockNo,
        date,
      },
    });
        console.log('await', response.data);
    } catch (e) {
      console.error('catch 到的錯誤', e);
    }
  })();