var path = require( 'path' );
var webpack = require( 'webpack' );
var HtmlwebpackPlugin = require( 'html-webpack-plugin' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

var ROOT_PATH = path.resolve( __dirname );
var APP_PATH = path.resolve( ROOT_PATH, 'src' );
var BUILD_PATH = path.resolve( ROOT_PATH, 'build' );
var TEM_PATH = path.resolve( APP_PATH, '' );

module.exports = {
    entry: {
        fazhanjieshao: path.resolve( APP_PATH, './fazhanjieshao/index.js' ),
        jingjifazhan: path.resolve( APP_PATH, './jingjifazhan/index.js' ),
        qiyejingying: path.resolve( APP_PATH, './qiyejingying/index.js' ),
        qiyejiance: path.resolve( APP_PATH, './qiyejiance/index.js' ),
        huanbaojiance: path.resolve( APP_PATH, './huanbaojiance/index.js' ),
        qiyehuaxiang: path.resolve( APP_PATH, './qiyehuaxiang/index.js' ),
        vendors: ['jquery', 'highcharts', 'd3', 'lodash', 'babel-polyfill']
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    // resolve: {
    //     alias:{
    //         gis: path.resolve(__dirname, 'gis')
    //     }

    // },
    //enable dev source map
    devtool: 'sourcemap',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 8001
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
            loader: ExtractTextPlugin.extract( "style", "css!sass" ),
            include: APP_PATH
        }, {
            test: /\.(png|jpg|ttf|svg|woff2|woff|eot)$/,
            loader: 'url?limit=1000000'
        }]
    },

    //custom jshint options
    // any jshint option http://www.jshint.com/docs/options/
    jshint: {
        "esnext": true
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin( 'vendors', 'vendors.js' ),
        new ExtractTextPlugin( '[name].css', {
            allChunks: true
        }),
        new HtmlwebpackPlugin( {
            title: '发展介绍',
            template: path.resolve( TEM_PATH, './fazhanjieshao/index.html' ),
            filename: 'fazhanjieshao.html',
            chunks: ['fazhanjieshao', 'vendors'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin( {
            title: '经济发展',
            template: path.resolve( TEM_PATH, './jingjifazhan/index.html' ),
            filename: 'jingjifazhan.html',
            chunks: ['jingjifazhan', 'vendors'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin( {
            title: '企业经营',
            template: path.resolve( TEM_PATH, './qiyejingying/index.html' ),
            filename: 'qiyejingying.html',
            chunks: ['qiyejingying', 'vendors'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin( {
            title: '企业检测',
            template: path.resolve( TEM_PATH, './qiyejiance/index.html' ),
            filename: 'qiyejiance.html',
            chunks: ['qiyejiance', 'vendors'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin( {
            title: '环保检测',
            template: path.resolve( TEM_PATH, './huanbaojiance/index.html' ),
            filename: 'huanbaojiance.html',
            chunks: ['huanbaojiance', 'vendors'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin( {
            title: '企业画像',
            template: path.resolve( TEM_PATH, './qiyehuaxiang/index.html' ),
            filename: 'qiyehuaxiang.html',
            chunks: ['qiyehuaxiang', 'vendors'],
            inject: 'body'
        })
    ]
};