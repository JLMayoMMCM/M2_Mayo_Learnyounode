var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (!err) {
        var string = data.toString();
        var lines = string.split('\n');
        console.log(lines.length - 1);
    }
});