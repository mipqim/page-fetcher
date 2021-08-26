const args = process.argv;

const request = require('request');
const fs = require('fs');

const url = args[2];
const filePath = args[3];

request(url, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 

  fs.writeFile(filePath, body, {flag : 'w'}, err => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);  
  })
  
});