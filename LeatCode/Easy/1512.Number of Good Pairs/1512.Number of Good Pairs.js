/**
 * @param {number[]} nums
 * @return {number}
 */
// solution 1) 중첩반목문 활용
// 반복문을 통해서 i번째 요소와 다른요소가 같으면 result++;
// j는 항상 i+1번째로 i번째와 비교가 되어야하므로 아래와 같이 작성함
var numIdenticalPairs = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) result++;
    }
  }
  return result;
};
