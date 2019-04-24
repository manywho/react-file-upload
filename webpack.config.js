const path = require('path');

module.exports = {
    entry: './src/index.ts',
    resolve: {
        extensions: ['.tsx', '.ts']
    },
    output: {
        filename: 'react-login-form.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    }
  };