let f = (...f) => f;
console.log(f(10)); // [ 10 ]

f = (...f) => f.reduce(f => f);
console.log(f(10)); // 10

function ff() {
  return arguments;
}
console.log(ff(10)); // [Arguments] { '0': 10 }

f = f => f;
console.log(f(10)); // 10

/*
Output will be [10], 10, [10], 10.
The key is to understand that in case of variable and parameter names war – parameter wins. There are a few other tricks here.
arguments is always an array and in this case it is [10]. ...f is a way to group the rest of the function parameters into named array, in this case all the parameters are resulting into [10].
*/
