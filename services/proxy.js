const express = require('express');
const proxy = require ('http-proxy');

var api = express();
var apiProxy = proxy.createProxyServer();

api.all('/api/v1/auth/*', (req, res) => {
    apiProxy.web(req, res, {target: 'http://localhost: 8001'});
});

api.all('/api/v1/files/*', (req, res) => {
    apiProxy.web(req, res, {target: 'http://localhost: 8002'});
});

api.all('/api/v1/filmovi/*', (req, res) => {
    apiProxy.web(req, res, {target: 'http://localhost: 8000'});
});

api.all('/*', (req, res) => {
    res.status(404).send('Not Found!');
});

api.listen(process.env.PORT, err => {
    if(err) {
        console.log('could not start server');
        console.log(err);
        return;
    }

    console.log('server started successfully on port 5000');
});