# Javascript

## development dependencies

```json
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-jest": "^24.1.0",
    "babel-plugin-transform-function-bind": "^6.22.0",
    "@babel/preset-env": "^7.3.1",
    "jest": "^24.1.0"
  },
  "dependencies": {
    "isomorphic-fetch": "^2.2.1",
    "node-fetch": "^2.3.0"
  }
```

## transpile with babel

```
$ babel <file> --out-file <distfile>
```

## test with jest

```
$ jest -i
```

`-i`, `runInBand`: Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests. This can be useful for debugging.
