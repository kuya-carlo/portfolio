const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");

const devMode = process.env.NODE_ENV !== "production";
basePath = path.join(__dirname, devMode? "/dist":"/public")
module.exports = [
    {
        // Tells which built-in optimisations to use.
        mode: devMode ? "development":"production",
        //specifies the path where
        entry: ["./app"],
        output: {
            path: basePath,
            filename: "js/script.js",
            cssFilename: "css/main.css"
        },
        devServer:{
            static: {
                directory: basePath,
                include: [path.resolve(__dirname, 'app/js')],
            },
            inline:true,
            port:8080
        },
        resolve: {
            extensions: ['.js','.jsx','.html','.css']
        },
        module:{
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test:/\.(sa|sc)ss%/,
                    use:[
                        // Extracts the CSS into a separate file and uses the
                        // defined configurations in the 'plugins' section
                        devMode ? "style-loader" :MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 2
                            }
                        },{
                            loader: "postcss-loader",
                            options: {
                                plugins: devMode
                                ? () => []
                                : () => [
                                    postcssPresetEnv({
                                        // Compile our CSS code to support browsers
                                        // that are used in more than 1% of the
                                        // global market browser share. You can modify
                                        // the target browsers according to your needs
                                        // by using supported queries.
                                        // https://github.com/browserslist/browserslist#queries
                                        browsers: [">1%"]
                                    }),
                                    require("cssnano")()
                                ]
                            }
                        },
                        {loader: "html-loader"},
                        "css-loader",
                    ]
                },
                {
                    test: /\.html?$/,
                    loader: 'html-loader',
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: devMode ? "css/style.css":"css/style.css"
            })
        ]
    }
]