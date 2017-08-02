
userPercentage = function userPercentage(userId, percent) {
  var id = parseInt(userId, 36);
  return (id % 100 < percent);
};