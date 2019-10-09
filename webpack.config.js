const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const path = require("path");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
    return webpackMerge(
        {
            mode,
            entry: "./src/index",
            output: {
                filename: "[name].bundle.js",
                path: path.resolve(__dirname, "dist"),
            },
            resolve: {
                extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
            },

            module: {
                rules: [
                    {
                        test: /\.(ts|js)x?$/,
                        exclude: /node_modules/,
                        use: "babel-loader",
                    },
                    {
                        test: /\.(jp?g|png|gif|webp)$/,
                        use: [
                            {
                                loader: "url-loader",
                                options: {
                                    limit: 5000,
                                },
                            },
                        ],
                    },
                    {
                        test: /\.svg$/,
                        use: "svg-inline-loader",
                    },
                ],
            },
            plugins: [new webpack.ProgressPlugin()],
        },
        modeConfig(mode),
        presetConfig({ mode, presets }),
    );
};
