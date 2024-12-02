const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'dist.js',
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "styles", to: "styles" },
            ],
        }),
    ],
};