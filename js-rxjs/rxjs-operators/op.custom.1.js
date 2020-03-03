import { pipe } from "rxjs";
import { filter, map } from "rxjs";

// Use the pipe() function to make new operators

function discardOddDoubleEven() {
  return pipe(
    filter(v => !(v % 2)),
    map(v => v + v)
  );
}
