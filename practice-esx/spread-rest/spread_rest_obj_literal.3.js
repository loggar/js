var developer = {
	title: "Developer",
	department: "I.T.",
	location: "Building 3, 2nd Floor"
};

var techLeadTitle = { title: "Tech Lead" };

var techLead = { ...developer, ...techLeadTitle };

console.log(techLead);
// {
//   title: "Tech Lead",
//   department: "I.T.",
//   location: "Building 3, 2nd Floor"
//};

console.log(developer);
  // {
  //   title: "Developer",
  //   department: "I.T.",
  //   location: "Building 3, 2nd Floor"
  // };