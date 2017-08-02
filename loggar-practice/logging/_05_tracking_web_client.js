// Tracking pixel / web bug
// 
// Using a 1x1 transparent gif allows you to
// use the logger in emails or embed the 
// tracking pixel on third party sites without
// requiring JavaScript.
log.route = function route() {
  return function pixel(req, res) {
    var data;

    if (settings.logParams && req.params) {
      data = mixIn({}, req.params, {
        requestId : req.requestId
      });
      log.info(req.params);
    }

    res.header('content-type', 'image/gif');

    // GIF images can be so small, it's
    // easy to just inline it instead of
    // loading from a file:
    res.send(
      'GIF89a\u0001\u0000\u0001\u0000' +
      '\u00A1\u0001\u0000\u0000\u0000\u0000' +
      '\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF' +
      '\u00FF\u00FF\u00FF\u0021\u00F9\u0004' +
      '\u0001\u000A\u0000\u0001\u0000\u002C' +
      '\u0000\u0000\u0000\u0000\u0001\u0000' +
      '\u0001\u0000\u0000\u0002\u0002\u004C' +
      '\u0001\u0000;');
  };
};
