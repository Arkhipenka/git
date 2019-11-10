const https = require('https');
const path = require('path');
const stream = require('stream');
const fs = require('fs');

function getPageSpeedAndSave(url){

https.get('https://www.googleapis.com/pagespeedonline/v4/runPagespeed' + '?url=' + url, (resp) => {
  let data = '';

  
  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
	fs.appendFile('result.txt', data, function(error){
		 if(error) throw error; 
    	console.log("Асинхронная запись файла завершена. Содержимое файла:");
    	let data = fs.readFileSync("result.txt", "utf8");
    	console.log(data);  
	});
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
};

let fileContent = fs.readFileSync("url.txt", "utf8");
console.log(fileContent);

let url = fileContent.split(/\s+/);
console.log(url);

for(let i = 0; i < url.length; i++){
	getPageSpeedAndSave(url[i]);
}