/**
 * @param {number[]} nums
 * @return {number[]}
 */
// nums배열의 각 요소의 합의 누계를 리턴
// nums = [1,2,3,4]
// [nums[0], nums[0] + nums[1], ]
// [1, 1+2, 1+2+3, 1+2+3+4] => [1, 3, 6, 10]
// solution 1)
var runningSum = function (nums) {
  let newArr = [nums[0]];
  let newNum = 0;
  for (let i = 0; i < nums.length; i++) {
    newNum += nums[i];
    newArr.push(newNum);
  }
  newArr.shift();
  return newArr;
};

// solution 2)
var runningSum = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
  }
  return nums;
};
