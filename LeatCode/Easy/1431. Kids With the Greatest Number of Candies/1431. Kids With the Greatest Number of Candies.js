/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// candies배열은 가질 수 있는 사탕의 갯수가 담겨있는 배열이다.
// extraCandies는 여분으로 마지막 사람이 가질 수 있는 사탕의 갯수이다.
// 첫번째 kid는 candies[0] + extraCandies, extraCandies의 최댓값과 비교 후 큰 값이면 true, 아니면 false
// 두번째 kid는 candies[1] + extraCandies, extraCandies의 최댓값과 비교 후 큰 값이면 true, 아니면 false
// 이런 과정을 반복하고 n번째 kid는 candies[n] + extraCandies를 가져와 extraCandies의 최댓값과 비교 후 큰 값이면 true, 아니면 false
// 배열의 최댓값을 구하려면 스프레드 연산자를 사용해야함 Math.max(...candies)

// solution 1) 반복문 사용
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= Math.max(...candies));
  }
  return result;
};

// solution 2) map메서드 사용
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map((item) => item + extraCandies >= max);
};
