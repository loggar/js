let nums = [49, -151, 88, -133, -164, 78, 117, -25, 76, -40];
nums = nums.sort(() => {
  return Math.random() - 0.5;
});
console.log(nums);
