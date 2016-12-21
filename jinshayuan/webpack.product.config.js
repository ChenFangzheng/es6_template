var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(APP_PATH, '');

module.exports = {
    entry: {
        fazhanjieshao: path.resolve(APP_PATH, './fazhanjieshao/index.js'),
        jingjifazhan: path.resolve(APP_PATH, './jingjifazhan/index.js'),
        qiyejingying: path.resolve(APP_PATH, './qiyejingying/index.js'),
        qiyejiance: path.resolve(APP_PATH, './qiyejiance/index.js'),
        huanbaojiance: path.resolve(APP_PATH, './huanbaojiance/index.js')
        vendors: ['jquery', 'highcharts', 'd3', 'lodash', 'babel-polyfill', 'onfire.js']
    },
    output: {
        path: BUILD_PATH,
        filename: './js/[name].[chunkhash].js'
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            include: APP_PATH,
            loader: "jshint-loader"
        }],
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel?presets[]=es2015',
            include: APP_PATH
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", "css!sass"),
            include: APP_PATH
        }, {
            test: /\.(png|jpg|ttf|svg|woff2|woff)$/,
            loader: 'url?limit=100000&name=../images/[hash].[ext]' //文件大于100000字节则不会base64编码打包到代码，并且会保存到/build/images下
        }]
    },

    //custom jshint options
    // any jshint option http://www.jshint.com/docs/options/
    jshint: {
        "esnext": true
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', './js/vendors.js'),
        new ExtractTextPlugin('./css/[name].[chunkhash].css', {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //复制文件到/build/images目录下，通常这些文件在js中以字符串路径的形式被声明并使用，
        // 例如 
        // let url = '../images/rtime_event.png';
        // $('.pageContainer').css('background-image', `url(${url})`);
        // 注意，这些文件在/images目录下
        new CopyWebpackPlugin([{
            from: __dirname + '/images',
            to: __dirname + '/build/images',
        }]),
        new HtmlwebpackPlugin({
            title: '发展介绍',
            template: path.resolve(TEM_PATH, './fazhanjieshao/index.html'),
            filename: 'fazhanjieshao.html',
            chunks: ['fazhanjieshao', 'vendors'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '经济发展',
            template: path.resolve(TEM_PATH, './jingjifazhan/index.html'),
            filename: 'jingjifazhan.html',
            chunks: ['jingjifazhan', 'vendors'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '企业经营',
            template: path.resolve(TEM_PATH, './qiyejingying/index.html'),
            filename: 'qiyejingying.html',
            chunks: ['qiyejingying', 'vendors'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '企业检测',
            template: path.resolve(TEM_PATH, './qiyejiance/index.html'),
            filename: 'qiyejiance.html',
            chunks: ['qiyejiance', 'vendors'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '环保检测',
            template: path.resolve(TEM_PATH, './huanbaojiance/index.html'),
            filename: 'huanbaojiance.html',
            chunks: ['huanbaojiance', 'vendors'],
            inject: 'body'
        })
    ]
};