module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: __dirname,
        filename: "./bin/app.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
