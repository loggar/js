// You can ignore the catch all together and handle all the exceptions using a global exception handler if you think that's more suitable to your situation.
// Something like this which uses the onrejectionhandled property of WindowsEventHandlers mixin.

window.onrejectionhandled = function(e) {
  console.log(e.reason);
};
