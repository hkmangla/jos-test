const transformCommonJS = require("convert-commonjs/src/transformCommonJS.js")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry : {
        "jos": ["./jos-index.js"],
        "microapp1": ["./microapp1/microapp1.js"],
        "microapp2": ["./microapp2/microapp2.js"]
    },
    output: {
      path: __dirname + "/dist",
      filename: "[name].js",
      sourceMapFilename: "[name].map",
    },
    devServer: {
        host: "0.0.0.0",
        contentBase: path.join(__dirname, 'dist'), 
    },
    plugins: [
      new HtmlWebpackPlugin({
        'template' : "./jos.html",
        'inject' : false,
        filename : "index.html",
        'minify': false
      }),
      new HtmlWebpackPlugin({
        'template' : "./microapp1/microapp1.html",
        'inject' : false,
        filename : "microapp1.html",
        'minify': false
      }),
      new HtmlWebpackPlugin({
        'template' : "./microapp2/microapp2.html",
        'inject' : false,
        filename : "microapp2.html",
        'minify': false
      })
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)(?!\/presto-ui)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                    [
                      '@babel/preset-env',
                      {
                        "targets": {
                          "chrome": "30",
                          "ie": "11"
                        }
                      }
                    ]
                ]
              }
            }
          },
          {
            test: /\.m?js$/,
            include: /(output)/,
            exclude: /(node_modules|bower_components)(?!\/presto-ui)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  [transformCommonJS, {
                    warn: console.warn,
                    error: console.error,              
                    warnOnDynamicExports: true,
                    warnOnDynamicRequire: true,
                    warnOnDynamicModule: true
                  }]
                ]
              }
            }
          }
        ]
    }
}