(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "lodash"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("lodash"));
  } else {
    var mod = {
      exports: {},
    };
    factory(mod.exports, global.lodash);
    global.sample1 = mod.exports;
  }
})(
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof self !== "undefined"
    ? self
    : this,
  function (_exports, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
      value: true,
    });
    _exports.dummyFunction = void 0;

    const dummyFunction = () => {
      return (0, _lodash.camelCase)("dummy");
    };

    _exports.dummyFunction = dummyFunction;
  }
);
