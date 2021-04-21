const arr1 = [{ firstName: "James" }];
const arr2 = [...arr1];
arr2[0].firstName = "Jonah";

console.log(arr1[0].firstName === arr2[0].firstName);
