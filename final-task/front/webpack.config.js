const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
    const debug = options.mode === 'development';
    const mode = debug ? 'development' : 'production';
    const config = {
        mode,
        devtool: debug ? 'source-map' : 'none',
        watch: false,
        entry: "./src/index.js",
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "main.js"
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 9000,
            watchContentBase: true,
            progress: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                    loader: "babel-loader"
                    },
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                    use: [
                        {
                        loader: 'file-loader',
                        },
                    ],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                favicon: "./src/img/logo-favicon.png"
            })
        ]
    };
    return config;
};
