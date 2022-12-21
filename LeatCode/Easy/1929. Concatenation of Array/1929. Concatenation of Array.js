// 1. 매개변수 nums 배열을 배열 안에 두번 넣어야하므로 두 배열을 합치는 메서드를 사용 (concat())
// 2. 또는 spread 연산자로 배열에 담아 바로 반환.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// solution 1)
var getConcatenation = function (nums) {
  let arr = nums.slice(0, nums.length);
  return nums.concat(arr);
};

// solution 2)
var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

// solution 3)
var getConcatenation = function (nums) {
  return nums.concat(arr);
};
