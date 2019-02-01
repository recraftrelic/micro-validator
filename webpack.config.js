var webpack = require('webpack');
var path = require('path');

var parentDir = __dirname;

module.exports = {
    entry: {
        main: path.join(parentDir, 'src/index.js')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    output: {
        path: parentDir + '/libs',
        filename: '[name].js',
        libraryTarget: 'umd'
    }
}