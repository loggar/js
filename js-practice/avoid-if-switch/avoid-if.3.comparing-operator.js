function getEventTarget(evt) {
  if (!evt) {
      evt = window.event;
  }
  if (!evt) {
      return;
  }
  const target;
  if (evt.target) {
      target = evt.target;
  } else {
      target = evt.srcElement;
  }
  return target;
}

// Refactored
function getEventTarget(evt) {
  evt = evt || window.event;
  return evt && (evt.target || evt.srcElement);
}
