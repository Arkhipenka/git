const https = require('https');
const path = require('path');
const stream = require('stream');

/*const pathToFile = path.join(__dirname, 'list.pdf');
const readable = http.createReadStream(pathToFile){

}*/

https.get('https://www.googleapis.com/pagespeedonline/v4/runPagespeed', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

/*;

let counter = 0;
const writable = http.createWriteSteam(_filename);
*/