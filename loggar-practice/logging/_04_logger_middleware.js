log.requestLogger = function
createRequestLogger() {

  return function requestLogger(req, res,
    next) {

    // Used to calculate response times:
    var startTime = Date.now();

    // Add a unique identifier to the request.
    req.requestId = cuid();

    // Log the request
    log.info({
      req : req
    });

    // Make sure responses get logged, too:
    req.on('end', function() {
      res.responseTime = Date.now() - startTime;
      res.requestId = req.requestId;
      log.info({
        res : res
      });
    });

    next();
  };
};

log.errorLogger = function
createErrorLogger() {

  return function errorLogger(err, req, res,
    next) {

    // Add the requestId so we can link the
    // error back to the originating request.
    err.requestId = req.requestId;

    log.error({
      err : err
    });
    next(err);
  };
};