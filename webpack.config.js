module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./bin/app.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.json$/, loader: "json-loader" }
        ]
    }
};
