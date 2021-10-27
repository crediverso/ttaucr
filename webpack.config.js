const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'ttaucr.js',
        path: path.resolve(__dirname, 'umd'),
        library: {
            type: 'umd',
            name: 'add',
        },
        // prevent error: `Uncaught ReferenceError: self is not define`
        globalObject: 'this',
    },
};