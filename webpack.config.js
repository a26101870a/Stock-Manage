const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    module: {
        rules: [
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] } } },
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
            { test: /\.s[ca]ss$/, exclude: /node_modules/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
            { test: /\.(png|jp(e*)g|svg|gif)$/, use: [{ loader: 'file-loader', options: { name: 'images/[hash]-[name].[ext]', }, },], },
            { test: /\.csv$/, loader: 'csv-loader', options: { dynamicTyping: true, header: true, skipEmptyLines: true } },
        ],
    },
    resolve: {
        extensions: ['.jsx', '.scss', 'js', '...'],
        alias: {
            Components: path.resolve(__dirname, 'src/components'),
            Functions: path.resolve(__dirname, 'src/functions'),
            Images: path.resolve(__dirname, 'src/images'),
            Pages: path.resolve(__dirname, 'src/pages'),
            Scss: path.resolve(__dirname, 'src/scss'),
            Data: path.resolve(__dirname, 'data'),
            Reducers: path.resolve(__dirname, 'src/reducers'),
            Containers: path.resolve(__dirname, 'src/containers'),
        }
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, '/dist'),
            watch: true,
        },
        open: true,
        hot: true,
    },
};
