const merge = require('webpack-merge');
const path = require('path');

const ACTION = process.env.npm_lifecycle_event;

var webpackConfig = {

    entry: {
        client: './src/js/rendering/client.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js"
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

if (ACTION === 'test') {

    webpackConfig = merge(webpackConfig, {

        devServer: {
            contentBase: path.join(__dirname, 'test'),
            compress: true,
            port: 8080
        }
    });
}

module.exports = webpackConfig;