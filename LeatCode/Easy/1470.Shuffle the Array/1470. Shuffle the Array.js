/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
//input: 2n개의 갯수로 구성된 배열 nums = [x1, x2, x3, x2n, y1, y2, y3, y2n]가 주어진다. n은 2 * n에 쓰이는 갯수이다.
// output: 2n개의 요소가 담긴 배열에서 [x1, y1, x2, y2, x3, y3, x2n, y2n] 의 배열로 정렬 후 반환.
// nums.length = 2n
// 배열을 반으로 나눠 차례로 새로운 배열에 넣어준다.
// solution 1)
// var shuffle = function(nums, n) {
//     let xArr = nums.slice(0, n);
//     let yArr = nums.slice(n, 2 * n);
//     let newArr = [];
//     for(let i = 0; i < n; i++) {
//         newArr.push(xArr[i])
//         newArr.push(yArr[i])
//     }
//     return newArr;
// };

// solution 2) slice로 굳이 잘라서 두가지 배열을 만들지 않아도 [i+n]번째 요소부터 넣어주면 되기 때문에 시간과 메모리가 더 절약된다.
var shuffle = function (nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }
  return result;
};
