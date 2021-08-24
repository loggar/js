const processData = () => {
  return 12;
};
const processDataAsyc = async () => {
  return 12;
};
console.log("Data from processData() without async: " + processData());
console.log("Data from processDataAsyc() with async: " + processDataAsyc());
