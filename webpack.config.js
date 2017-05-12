const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [     
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './src/app.jsx'
        ],
    externals: {
        jquery: 'jQuery'
        },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new ExtractTextPlugin('styles.css')
        ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            applicationStyles: 'app/styles/app.scss'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react', 'stage-0'] }
                }]
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: [{ 
                    loader: 'style-loader' 
                }, { 
                    loader: 'css-loader' 
                }, { 
                    loader: 'sass-loader',
                    options: {
                        includePaths: [
                            path.resolve(__dirname, './node_modules/foundation-sites/scss')
                        ]
                    }
                }]
            }
        ]
    }
};
