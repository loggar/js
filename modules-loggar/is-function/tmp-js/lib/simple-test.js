module.exports = (function () {
  var log = function (id, result) {
    var t_log = "";
    if (!id) t_log += "unknow id";
    else t_log += id;
    t_log += " : ";
    if (result) t_log += "ok.";
    else t_log += "failed to be ok.";
    console.log(t_log);
  }

  return {
    is: function (id, b) {
      var result = !!b;
      log(id, result);
      return result;
    },
    not: function (id, b) {
      var result = !b;
      log(id, result);
      return result;
    }
  };
})();