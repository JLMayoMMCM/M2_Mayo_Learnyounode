var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
    ext = '.' + ext;
    fs.readdir(dir, function(err, list) {
        if (err) {
            return callback(err);
        }

        var files = list.filter(function(file) {
            return path.extname(file) === ext;
        });

        var files = [];
        list.forEach(function(file) {
            if (path.extname(file) === ext) {
                files.push(file);
            }
        });
        
    return callback(null, files);
    });
};