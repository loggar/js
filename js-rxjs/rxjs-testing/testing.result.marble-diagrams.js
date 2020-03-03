// Generating PNG marble diagrams from tests

it.asDiagram("zip")("should zip by concatenating", function() {
  const e1 = hot("---a---b---|");
  const e2 = hot("-----c---d---|");
  const expected = "-----x---y---|";
  const values = { x: "ac", y: "bd" };

  const result = e1.zip(e2, function(x, y) {
    return String(x) + String(y);
  });

  expectObservable(result).toBe(expected, values);
});
