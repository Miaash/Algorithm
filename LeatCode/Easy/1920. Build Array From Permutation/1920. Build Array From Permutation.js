/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 배열을 순열로 정렬하기
// nums = [0, 1, 3, 2]
// result = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]]],
// result = [0, 1, 4, 3]
// nums[i]는 nums배열 길이보다 작아야함
// 반복문 사용해서 push로 넣어주기 => num[num[i]]
var buildArray = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[nums[i]]);
  }
  return result;
};
