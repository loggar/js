// ES6 Modules - index.js
import * as helpers from "./helpers.js"; // helpers is an object

// or

import {
  isNull,
  isUndefined,
  isNullOrUndefined as isValid
} from "./helpers.js";

// using "as" for renaming named exports
