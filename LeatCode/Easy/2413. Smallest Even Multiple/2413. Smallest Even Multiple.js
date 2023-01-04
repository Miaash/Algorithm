/**
 * @param {number} n
 * @return {number}
 */
// input으로 주어진 n과 2의 가장 작은 배수를 구하는 문제
// 즉 2와 n의 최소공배수를 구하는 문제.
// 1. n % 2 === 0 이라면 n자체가 최소공배수
// 2. n % 2 !== 0 이라면 n * 2가 최소공배수
var smallestEvenMultiple = function (n) {
  return n % 2 === 0 ? n : n * 2;
};
