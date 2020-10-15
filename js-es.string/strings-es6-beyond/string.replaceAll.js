const str = "The brown fox is really brown";

//Instead of doing this...
const newStr = str.replace(/brown/g, "White");

//You'll be able to do this...
const newStr2 = str.replaceAll("brown", "White");
