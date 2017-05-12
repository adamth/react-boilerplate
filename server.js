const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect(`http://${req.hostname}${req.url}`);
    } else {
        next();
    }
});

if (process.env.NODE_ENV !== 'production') {
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');

    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
    app.use(express.static('dist'));
}


app.use(express.static('dist'));

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});
