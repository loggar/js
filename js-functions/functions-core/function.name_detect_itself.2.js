function fnc_name() {
  var me = arguments.callee.toString();
  me = me.substr("function ".length);
  me = me.substr(0, me.indexOf("("));
  console.log(me);
}
fnc_name();
