const resolve = require('path').resolve;

module.exports = {
    entry: 
     {
		js: "./src/Index.tsx"
	},
    output: {
        filename: "./dist/bundle.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    watch: true,

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, exclude:/node_modules/, loader: "ts-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, exclude:/node_modules/, loader: "source-map-loader" },

            { test: /\.css$/i, 
              exclude:/node_modules/,
              use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 1,
                        localIdentName: '[name]__[local]___[hash:base64:5]',
                        modules: true,
                        minimize: false
                    }
                }
              ] 
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};