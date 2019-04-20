// require --> Method within modules to import modules in the own code
const http = require('http');
const app = require('./app');

const port = 3000;

const server = http.createServer(app);

server.listen(port);