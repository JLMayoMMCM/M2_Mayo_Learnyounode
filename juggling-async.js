var http = require('http');
var bl = require('bl');

var output = [];
var urls = process.argv.slice(2);

function print(output) {
   for (var i = 0; i < output.length; i++) {
       console.log(output[i])
   }
}

function request(url, index) {
   http.get(url, function (response) {  
       response.pipe(bl(function (err, data) {  
           if (err) {
               return console.error(err)
           }
           
           output[index] = data.toString();
           
           if (output.length == urls.length) {
               print(output);
           }
           
       }));
   });
}

for (var i = 0; i < urls.length; i++) {
   request(urls[i], i);
}