/**
 * @param {number} n
 * @return {number}
 */
// reduce 메서드를 사용해 풀 수 있다.
// 먼저 숫자를 문자열로 바꾼뒤 배열의 각 자릿수를 담고 그 자릿수를 다시 숫자로 바꿔준다.
// 그 후 숫자가 담긴 배열의 합과 곱을 각각 구한다.
// 마지막으로 곱과 합의 차를 구하면 완료
var subtractProductAndSum = function (n) {
  const arr = String(n)
    .split("")
    .map((el) => Number(el));
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  let multiply = arr.reduce((acc, cur) => acc * cur, 1);
  return multiply - sum;
};
