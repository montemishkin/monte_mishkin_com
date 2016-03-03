// third party imports
var webpack = require('webpack')
// local imports
var projectPaths = require('../projectPaths')
var babelConfig = require(projectPaths.babelConfig)


// default to using development configuration
var devtool = 'source-map'
var plugins = []
// if we are in production environment
if (process.env.NODE_ENV === 'production') {
    // use production configuration instead
    devtool = ''
    plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin()
    )
}


// export webpack configuration object
module.exports = {
    output: {
        filename: '[name].js',
        chunkFilename: 'chunk-[id]-[chunkhash].js',
        path: projectPaths.buildDir,
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: projectPaths.sourceDir,
            },
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectPaths.sourceDir,
                query: babelConfig,
            },
        ],
    },
    resolve: {
        extensions: ['', '.js'],
        root: [
            projectPaths.sourceDir,
            projectPaths.rootDir,
        ],
    },
    eslint: {
        configFile: projectPaths.eslintConfig,
        failOnError: true,
    },
    plugins: plugins,
    devtool: devtool,
}
