const bob = {
  name: "Bob",
  salary: 1000,
  job_type: "DEVELOPER"
};

const mary = {
  name: "Mary",
  salary: 1000,
  job_type: "QA"
};

const calc = person => {
  if (people.job_type === "DEVELOPER") return person.salary + 9000 * 0.1;

  if (people.job_type === "QA") return person.salary + 1000 * 0.6;
};

console.log("Salary", calc(bob));
console.log("Salary", calc(mary));

// Refactored
//Create function to different behaviour, same parameter call.
const qaSalary = base => base + 9000 * 0.1;
const devSalary = base => base + 1000 * 0.6;

//Add function to the object.
const bob = {
  name: "Bob",
  salary: 1000,
  job_type: "DEVELOPER",
  calc: devSalary
};

const mary = {
  name: "Mary",
  salary: 1000,
  job_type: "QA",
  calc: qaSalary
};

//Same call.
console.log("Salary", bob.calc(bob.salary));
console.log("Salary", mary.calc(mary.salary));
