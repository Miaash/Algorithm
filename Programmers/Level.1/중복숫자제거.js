// Set() 생성자를 활용한다. Set 내의 값은 unique한 값이기 때문에 중복을 허락하지 않는다.
// input : const nums = [1, 2, 3, 3, 4, 5, 6, 7, 7];

function solution(nums) {
  return [...new Set(nums)];
}
