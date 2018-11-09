const merge = require('webpack-merge');
const path = require('path');

const ACTION = process.env.npm_lifecycle_event;

var webpackConfig = {

    entry: {
        client: './src/js/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js"
    },

    resolve: {
        extensions: [".js"],
        alias: {
            ["~"]: path.resolve(__dirname, "src/js/components")
        }
    },

    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}

if (ACTION === 'start') {

    webpackConfig = merge(webpackConfig, {

        devServer: {
            contentBase: path.join(__dirname, 'test'),
            compress: true,
            historyApiFallback: {
                index: 'index.html' // Tell webpack dev server to serve index.html for any route
            },
            port: 3001
        }
    });
}

module.exports = webpackConfig;