# webpack externals

## webpack-node-externals

> Easily exclude node modules in Webpack

Webpack allows you to define externals - modules that should not be bundled.

When bundling with Webpack for the backend - you usually don't want to bundle its node_modules dependencies. This library creates an externals function that ignores node_modules when bundling in Webpack.
(Inspired by the great Backend apps with Webpack series)

```shell
npm install webpack-node-externals --save-dev
```

```js
// webpack.config.js
var nodeExternals = require('webpack-node-externals');
...
module.exports = {
    ...
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    ...
};
```

Use example
```js
// webpack.config.js
var nodeExternals = require('webpack-node-externals');
...
module.exports = {
    ...
    target: 'node', // important in order not to bundle built-in modules like path, fs, etc.
    externals: [nodeExternals({
        // this WILL include `jquery` and `webpack/hot/dev-server` in the bundle, as well as `lodash/*`
        whitelist: ['jquery', 'webpack/hot/dev-server', /^lodash/]
    })],
    ...
};
```
