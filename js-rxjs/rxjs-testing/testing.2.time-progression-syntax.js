const expected = "400ms (a-b|)";
const values = {
  a: "value emitted",
  b: "another value emitter"
};

expectObservable(someStreamForTesting).toBe(expected, values);
// This would work also
const expected = "400ms (0-1|)";
const values = ["value emitted", "another value emitted"];

expectObservable(someStreamForTesting).toBe(expected, values);

/*
' ' whitespace: horizontal whitespace is ignored, and can be used to help vertically align multiple marble diagrams.
'-' frame: 1 "frame" of virtual time passing (see above description of frames).
[0-9]+[ms|s|m] time progression: the time progression syntax lets you progress virtual time by a specific amount. It's a number, followed by a time unit of ms (milliseconds), s (seconds), or m (minutes) without any space between them, e.g. a 10ms b. See Time progression syntax for more details.
'|' complete: The successful completion of an observable. This is the observable producer signaling complete().
'#' error: An error terminating the observable. This is the observable producer signaling error().
[a-z0-9] e.g. 'a' any alphanumeric character: Represents a value being emitted by the producer signaling next(). Also consider that you could map this into an object or an array like this:
*/