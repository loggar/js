const processData = () => {
  return 12;
};
const processDataAsycn = async () => {
  return 12;
};
console.log("Data from processData() without async: " + processData());
console.log("Data from processDataAsycn() with async: " + processDataAsycn());
