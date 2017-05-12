const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const VENDOR = [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        'react', 
        'react-dom',
        'react-router'
    ];

module.exports = {
    entry: { 
            bundle: './src/app.jsx',
            vendor: VENDOR
        },
    externals: {
        jquery: 'jQuery'
        },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new ExtractTextPlugin('styles.css'),
        new CleanWebpackPlugin(['dist/*.*']),
        new webpack.LoaderOptionsPlugin({ 
            options: { 
                sassLoader: { 
                    includePaths: [ 
                        path.resolve(__dirname, './node_modules/foundation-sites/scss')
                        ] 
                    } 
                } 
            })
        ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js'
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    devtool: 'cheap-source-map'
};
