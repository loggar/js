let company;
console.log(company); // => undefined

let person = { name: "John Smith" };
console.log(person.age); // => undefined

let movies = ["Interstellar", "Alexander"];
console.log(movies[3]); // => undefined

let array = null;
console.log(array); // => null

let movie = { name: "Starship Troopers", musicBy: null };
console.log(movie.musicBy); // => null

// no result of string.match
console.log("abc".match(/[0-9]/)); // => null
