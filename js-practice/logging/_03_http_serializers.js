
var serializers = {
  req : function reqSerializer(req) {
    if (!req || !req.connection) {
      return req;
    }

    return {
      url : req.url,
      method : req.method,
      protocol : req.protocol,
      requestId : req.requestId,

      // In case there's a proxy server:
      ip : req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress,
      headers : req.headers
    };
  },
  res : function resSerializer(res) {
    if (!res) {
      return res;
    }

    return {
      statusCode : res.statusCode,
      headers : res._header,
      requestId : res.requestId,
      responseTime : res.responseTime
    };
  },
  err : function errSerializer(err) {
    if (!err || !err.stack) {
      return err;
    }

    return {
      message : err.message,
      name : err.name,
      stack : getFullStack(err),
      code : err.code,
      signal : err.signal,
      requestId : err.requestId
    };
  }
};


// console.log(req);
//console.log({req: req});