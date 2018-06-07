//Adds discount to the user object if BOTH user and discount exists.
//Throws null errors if either user or discount is null
const applyDiscount = (user, discount) => {
	let userClone = clone(user);// use some lib to make a copy  
	userClone.discount = discount.code;
	return userClone;
}