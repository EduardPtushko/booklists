const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = () => {
    return {
        devtool: "inline-source-map",
        devServer: {
            contentBase: "./dist",
            hot: true,
            overlay: true,
            historyApiFallback: true,
            stats: {
                colors: true,
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    exclude: /\.module\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.scss$/,
                    use: ["style-loader", "css-loader", "sass-loader"],
                },
                {
                    test: /\.module\.css$/,
                    use: [
                        { loader: "style-loader" },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                modules: true,
                            },
                        },
                    ],
                },
            ],
        },
    };
};
