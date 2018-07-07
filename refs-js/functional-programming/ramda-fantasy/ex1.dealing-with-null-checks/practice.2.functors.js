/*
Any class(or construction function) or a datatype that stores a value and implements “map” method is called a “Functor”.
*/
const add1 = (a) => a + 1;
let myArray = new Array(1, 2, 3, 4); //store values
let myArray2 = myArray.map(add1) // -> [2,3,4,5] //applies functions

console.log(myArray);
console.log(myArray2);


/*
Functors also need to implement other specs in addition to "map"
https://github.com/fantasyland/fantasy-land
*/
class MyFunctor { //Custom "Functor"
	constructor(value) {
		this.val = value;
	}

	map(fn) {   //Applies function to this.val + returns new Myfunctor
		return new MyFunctor(fn(this.val));
	}
}
//temp is a Functor instance that's storing value 1
let temp = new MyFunctor(1);
let temp2 = temp.map(add1) //-> temp allows us to map "add1"

console.log(temp);
console.log(temp2);