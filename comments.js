// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.

// Use the fs module to read the comments.html file and serve it back to the client.

// The comments.html file can be found in the same directory as this assignment.

// When a client makes a GET request to the root URL /, the server should respond with the comments.html file.

// The server should respond to all requests with the comments.html file, regardless of the URL.

// The server should listen on port 3000.

// Use the createServer function from the http module to create the server.

// The server should listen on port 3000.

// Use the fs module to read the comments.html file.

// The comments.html file can be found in the same directory as this assignment.

// Respond to all requests with the comments.html file, regardless of the URL.

// Use the createServer function from the http module to create the server.

// The server should listen on port 3000.

// Use the fs module to read the comments.html file.

// The comments.html file can be found in the same directory as this assignment.

// Respond to all requests with the comments.html file, regardless of the URL.

// Use the createServer function from the http module to create the server.

// The server should listen on port 3000.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
