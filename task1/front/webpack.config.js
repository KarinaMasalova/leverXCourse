const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
    const debug = options.mode === 'development';
    const mode = debug ? 'development' : 'production';
    const config = {
        mode,
        devtool: debug ? 'source-map' : 'none',
        watch: false,
        entry: {
            main: './src/app.js',
            registration: './src/js/layouts/registration.js',
            authorization: './src/js/layouts/authorization.js',
            changeStatus: './src/js/layouts/changeStatus.js'
        },
        output: {
            publicPath: '',
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html',
                chunks: ['main']
            }),
            new HtmlWebpackPlugin({
                filename: 'logIn.html',
                template: './src/html/logIn.html',
                chunks: ['authorization']
            }),
            new HtmlWebpackPlugin({
                filename: 'registration.html',
                template: './src/html/registration.html',
                chunks: ['registration']
            }),
            new HtmlWebpackPlugin({
                filename: 'changeStatus.html',
                template: './src/html/changeStatus.html',
                chunks: ['changeStatus']
            }),
            new MiniCssExtractPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                    use: [
                        {
                        loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
    };
    return config;
  };
  