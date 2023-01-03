/**
 * @param {number} num
 * @return {number}
 */
// input으로 주어지는 4자리 숫자를 split.
// 1234 => 1, 2, 3, 4
// 두 수가 짝지어진 한쌍의 배열의 합이 가장 작은 것을 구한다. (두자리수의 합이 가장 적을 확률이 높음)
// output : 합이 가장 작은 수들의 합.
// [1, 2, 3, 4] 일 경우
// [1, 234] = 235, [2, 134] = 136, [3, 124] = 127, [4, 123] = 127
// [12, 34] = 46, [13 , 24] = 37, [ 14, 23 ] = 37
// 1. 문자열로 바꾸고 split으로 나눠 배열에 담는다.
// 2. sort를 사용해 정렬
// 3. 정렬된 배열에서 0번쨰, 2번째 + 1번째, 3번째 요소의 합이 최솟값이다.
var minimumSum = function (num) {
  const numArr = num.toString().split("");
  numArr.sort((a, b) => a - b);
  return parseInt(numArr[0] + numArr[2]) + parseInt(numArr[1] + numArr[3]);
};
