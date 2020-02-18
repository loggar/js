const obj1 = {
  result: 0
};

const obj2 = {
  result: 0
};

function reduceAdd() {
  let result = 0;
  for (let i = 0, len = arguments.length; i < len; i++) {
    result += arguments[i];
  }
  this.result = result;
}

reduceAdd.apply(obj1, [1, 2, 3, 4, 5]); //the "this" object inside the "reduceAdd" function will be "obj1"
reduceAdd.call(obj2, 1, 2, 3, 4, 5); //the "this" object inside the "reduceAdd" function will be "obj2"
