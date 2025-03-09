var http = require('http');
var url = require('url');

var port = process.argv[2];

function formatDate(date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

function formateUnix(date) {
    return {
        unixtime: date.getTime()
    };
}

var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    var parsedUrl = url.parse(request.url, true);

    var route = parsedUrl.pathname;
    var date = new Date(parsedUrl.query.iso);

    if (route === '/api/parsetime') {
        var data = formatDate(date);
    } else if (route === '/api/unixtime') {
        var data = formateUnix(date);
    }


    response.end(JSON.stringify(data));
});


server.listen(port);