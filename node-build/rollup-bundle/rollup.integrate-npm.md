# rollup.js - npm packages

At some point, it's very likely that your project will depend on packages installed from npm into your node_modules folder. Unlike other bundlers like Webpack and Browserify, Rollup doesn't know 'out of the box' how to handle these dependencies - we need to add some configuration.

Let's add a simple dependency called `the-answer`, which exports the answer to the question of life, the universe and everything:

```
npm install the-answer
```

```js
// src/main.js
import answer from 'the-answer';

export default function () {
  console.log('the answer is ' + answer);
}
```

```
npm run build

(!) Unresolved dependencies
https://github.com/rollup/rollup/wiki/Troubleshooting#treating-module-as-external-dependency
the-answer (imported by main.js)
```

The resulting bundle.js will still work in Node.js, because the import declaration gets turned into a CommonJS require statement, but the-answer does not get included in the bundle. For that, we need a plugin.

## rollup-plugin-node-resolve

```
npm install --save-dev rollup-plugin-node-resolve
```

```js
// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [ resolve() ]
};
```

This time, when you `npm run build`, no warning is emitted — the bundle contains the imported module.

## rollup-plugin-commonjs

Some libraries expose ES6 modules that you can import as-is — `the-answer` is one such module. But at the moment, the majority of packages on npm are exposed as CommonJS modules instead. Until that changes, we need to convert CommonJS to ES2015 before Rollup can process them.

The `rollup-plugin-commonjs` plugin does exactly that.

Note that rollup-plugin-commonjs should go before other plugins that transform your modules — this is to prevent other plugins from making changes that break the CommonJS detection.
