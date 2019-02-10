## ES6 via npm

```
npm install rxjs
```

```js
import Rx from 'rxjs/Rx';

Rx.Observable.of(1, 2, 3);
```

```js
import ❴ Observable ❵ from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

Observable.of(1,2,3).map(x => x + '!!!'); // etc
```

```js
import ❴ Observable ❵ from 'rxjs/Observable';
import ❴ of ❵ from 'rxjs/observable/of';
import ❴ map ❵ from 'rxjs/operator/map';

Observable::of(1,2,3)::map(x => x + '!!!'); // etc
```

## CommonJS with TypeScript

If you receive an error like error TS2304: Cannot find name 'Promise' or error TS2304: Cannot find name 'Iterable' when using RxJS you may need to install a supplemental set of typings.

1. For typings users:

```
typings install es6-shim --ambient
```

2. If you're not using typings the interfaces can be copied from /es6-shim/es6-shim.d.ts.
3. Add type definition file included in tsconfig.json or CLI argument.

## All Module Types (CJS/ES6/AMD/TypeScript) via npm

To install this library via npm version 3, use the following command:

```
npm install @reactivex/rxjs
```

## CDN

For RxJS 5.0.0-beta.1 through beta.11: https://unpkg.com/@reactivex/rxjs@version/dist/global/Rx.umd.js

For RxJS 5.0.0-beta.12 and higher: https://unpkg.com/@reactivex/rxjs@version/dist/global/Rx.js
