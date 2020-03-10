function itemDropped(item, location) {
  if (!item) {
    return false;
  } else if (outOfBounds(location)) {
    var error = outOfBounds;
    server.notify(item, error);
    items.resetAll();
    return false;
  } else {
    animateCanvas();
    server.notify(item, location);
    return true;
  }
}

// Refactored
function itemDropped(item, location) {
  const dropOut = function() {
    server.notify(item, outOfBounds);
    items.resetAll();
    return false;
  };

  const dropIn = function() {
    server.notify(item, location);
    animateCanvas();
    return true;
  };

  return !!item && (outOfBounds(location) ? dropOut() : dropIn());
}
