const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
 
module.exports = {
 
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.css$/,
                exclude: /styles\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MinicssExtractPlugin.loader,
                    'css-loader'
                ]
            },
                {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    sources: false,
                },
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "file-loader"


            }




        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MinicssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin ({

            patterns: [
            { from: "src/assets/", to: "assets/"}
            ]
        })
 
    ]
 
}
 













/*const HtmlWebpack = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {

    mode: "development",

    module: {

        rules: [
            {

                test: /\.html$/,
                loader: "html-loader",
                options: {
                    sources: false
                }

            },
            {

                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ "style-loader", "css-loader"]


            },
            {
                test: "/styles.css$/", 
                use: [ MiniCssExtractPlugin.loader, "css-loader" ]

            }



        ]




    },


    //optimization: {},


    plugins: [

        new HtmlWebpack({
            title: "Mi Webpack App",
            template: "./src/index.html"
        }),

        new MiniCssExtractPlugin({
            filename: "nuevo-estilo.css",
            ignoreOrder: false
        })

    ]








}
*/