var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function(err, list) {
    if (err) {
        return console.error(err);
    }

    FileSystem.forEach(function(file) {
        if (path.extname(file) === ext) {
            console.log(file);
        }
    });
});