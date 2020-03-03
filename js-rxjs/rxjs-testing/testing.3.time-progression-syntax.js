const input = " -a-b-c|";
const expected = "-- 9ms a 9ms b 9ms (c|)";
/*
 
// Depending on your personal preferences you could also
// use frame dashes to keep vertical aligment with the input
const input = ' -a-b-c|';
const expected = '------- 4ms a 9ms b 9ms (c|)';
// or
const expected = '-----------a 9ms b 9ms (c|)';
 
*/

const result = cold(input).pipe(concatMap(d => of(d).pipe(delay(10))));

expectObservable(result).toBe(expected);

/*
Examples

'-' or '------': Equivalent to never(), or an observable that never emits or completes
|: Equivalent to empty()
#: Equivalent to throwError()
'--a--': An observable that waits 2 "frames", emits value a and then never completes.
'--a--b--|': On frame 2 emit a, on frame 5 emit b, and on frame 8, complete
'--a--b--#': On frame 2 emit a, on frame 5 emit b, and on frame 8, error
'-a-^-b--|': In a hot observable, on frame -2 emit a, then on frame 2 emit b, and on frame 5, complete.
'--(abc)-|': on frame 2 emit a, b, and c, then on frame 8 complete
'-----(a|)': on frame 5 emit a and complete.
'a 9ms b 9s c|': on frame 0 emit a, on frame 10 emit b, on frame 10,012 emit c, then on on frame 10,013 complete.
'--a 2.5m b': on frame 2 emit a, on frame 150,003 emit b and never complete.
*/