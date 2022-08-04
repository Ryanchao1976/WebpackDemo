const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 配置 HTML 模板路徑與生成名稱 (第三步)
            template: 'index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
        }),
        new CleanWebpackPlugin(),
    ],
};