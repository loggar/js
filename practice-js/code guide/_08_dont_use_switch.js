// dont : 
function doAction(action) {
  switch (action) {
    case 'hack':
      return 'hack';
    break;

    case 'slash':
      return 'slash';
    break;

    case 'run':
      return 'run';
    break;

    default:
      throw new Error('Invalid action.');
    break;
  }
}

// good : method lookup version : 
function doAction(action) {
  var actions = {
    'hack': function () {
      return 'hack';
    },

    'slash': function () {
      return 'slash';
    },

    'run': function () {
      return 'run';
    }
  };

  if (typeof actions[action] !== 'function') {
    throw new Error('Invalid action.');
  }


  return actions[action]();
}

