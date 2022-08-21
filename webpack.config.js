const webpack = require('webpack');
const path = require('path');

basepath = path.resolve(__dirname, 'app/');
js = path.resolve(basepath,'js')

module.exports = [
    {
        mode:'development',
        entry: {
            sass: scss = path.resolve(basepath,'scss')
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'index.js'
        }
    }
]