/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// stone 배열 중 jewels 배열 속의 요소가 몇개 있는지 확인한다.
// stone 배열의 길이 만큼 반목문을 돌고 도는 동안 한 요소당 jewels의 배열 속 요소와 같은지 확인하는 작업을 거침
// 이때 중첩 반복문이 사용된다.
// solution 1) 중첩 반복문을 활용
var numJewelsInStones = function (jewels, stones) {
  const newJewelsArr = jewels.split("");
  const newStonesArr = stones.split("");
  let result = 0;
  for (let i = 0; i < newStonesArr.length; i++) {
    for (let j = 0; j < newJewelsArr.length; j++) {
      if (newStonesArr[i] === newJewelsArr[j]) {
        result++;
      }
    }
  }
  return result;
};
// solution 2) iterable한 객체에 사용가능한 for of 명령문 사용
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  // stones 배열의 각 요소 el이 jewels의 각요소에 포함되어있는지 반목문 돌림
  for (let el of stones) {
    if (jewels.includes(el)) {
      count++;
    }
  }
  return count;
};
