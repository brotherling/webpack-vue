const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src',
        open: true,
        port: 4000,
        hot: true     //只写这一步,并不能启用模板热替换, 这与package.json中设置不一样
    },
    plugins: [
        //装了HRM插件,才表示当前项目有资格开启HRM
        new webpack.HotModuleReplacementPlugin(),
        //如果不传入任何配置项, 默认也会创建一个空的index.html托管在服务器根路径,title默认是webpack app
        new HtmlWebpackPlugin({
            // title: '你好' , 如果模板中有title,会覆盖这里的设置
            template: './src/index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|bmp|jpeg)$/,
                use: ['url-loader']
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            {
                test: /.\js$/, 
                exclude: /node_modules/, 
                use:"babel-loader"
            },
            { test:/\.vue$/, use: 'vue-loader' }
        ]
    },
    mode: 'development'
}