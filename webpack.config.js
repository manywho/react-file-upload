const path = require('path');

module.exports = {
    entry: './src/FileUpload.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'react-file-upload.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'react-keyed-file-browser',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
