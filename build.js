// build.js
const webpack = require('webpack');
const webpackConfig = require('/webpack.config.js');

webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error(err || stats.toString());
        process.exit(1);
    }
    console.log('Compilation completed successfully!');
});
