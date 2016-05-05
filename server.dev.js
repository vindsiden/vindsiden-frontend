const path = require('path');
const express = require('express');

const port = process.env.PORT || 4000;
const app = express();

configureProxy(app);
configureWebpack(app);
configureJsonServer();

app.use('/img', express.static(__dirname + '/mock/img'));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, error => {
    if (error) {
        console.error(error);
    } else {
        console.info('==>  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
    }
});


function configureProxy(app) {
    const proxyMiddleware = require('http-proxy-middleware');
    const proxyOptions = {
        target: `http://localhost:${port + 1}`,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': '' // rewrite paths
        }

    };
    const proxy = proxyMiddleware('/api', proxyOptions);
    app.use(proxy);
}

function configureWebpack(app) {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const config = require('./webpack.config');

    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));
}

function configureJsonServer() {
    const jsonServer = require('json-server');
    const db = jsonServer.create();

    db.use(jsonServer.defaults());
    db.use((req, res, next) => {
        setTimeout(next, 2000); // Simulate 2s latency
    });
    db.use(jsonServer.router(require('./mock/db')));

    db.listen(port + 1, err => {
        if (err) console.log('Database setup error', err);
        else console.log('Database running');
    });
}