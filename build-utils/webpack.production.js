const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = () => {
    return {
        output: {
            filename: "[name].[contentHash].js",
        },
        devtool: "source-map",
        optimization: {
            minimizer: [
                new OptimizeCssAssetsPlugin(),
                new TerserPlugin(),
                new HtmlWebpackPlugin({
                    template: "./public/index.html",
                    minify: {
                        removeAttributeQuotes: true,
                        collapseWhitespace: true,
                        removeComments: true,
                    },
                }),
            ],
        },

        module: {
            rules: [
                {
                    test: /\.css$/,
                    exclude: /\.module\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: "css-loader",
                        },
                    ],
                },
                {
                    test: /\.module\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                autoprefixer: true,
                                modules: true,
                                localIdentName: "[local]__[hash:base64:5]",
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].[contentHash].css",
            }),
        ],
    };
};
