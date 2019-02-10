let path = require('path');
//path: path.resolve(__dirname, './dist/'),
let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map'
};
console.log('__dirname=', __dirname);
module.exports = (env, options) => {
    let production = options.mode === 'production';
    console.log('production=', production);
    conf.devtool = production
                    ? false
                    : 'eval-sourcemap'
    console.log('options=', options);
    return conf;
}