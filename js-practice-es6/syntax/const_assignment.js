{
	const a = 2;
	// a = 3; // TypeError: Assignment to constant variable.

}

{
	const a = [1, 2, 3];
	a.push(4); // no problem. I cannot change the assignment of const variable, but can change it's value.

	console.log(a);

	a[0] = 0; // no problem.

	console.log(a);

	// a = []; // TypeError: Assignment to constant variable.
}