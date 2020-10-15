function getFuncName() {
  return getFuncName.caller.name;
}
function fnc_name() {
  console.log(getFuncName());
}
fnc_name();
