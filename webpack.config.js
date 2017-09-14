const path = require("path");

module.exports = {
 context: __dirname,
 entry: "./frontend/randomizer.jsx",
 output: {
   path: path.join(__dirname),
   filename: "bundle.js",
   publicPath: "/"
 },
 module: {
   loaders: [
     {
       test: [/\.jsx?$/, /\.js?$/],
       exclude: /(node_modules|bower_components)/,
       loader: 'babel',
       query: {
         presets: ['es2015', 'react']
       }
     }
   ]
 },
 jshint: {
   esversion: 6
 },
 devtool: 'source-maps',
 resolve: {
   root: __dirname,
   extensions: ["", ".js", ".jsx" ]
 }
};
