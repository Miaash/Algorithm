/**
 * @param {string[]} operations
 * @return {number}
 *
 */
// includes로 string안에 특정 문자가 포함되어있는지 여부를 boolean 값으로 반환하도록 한다.
// 포함되어있으면 ++, 아니면 -- => 증감연산
// 연산 후 값을 최종적으로 반환.
var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].includes("+")) {
      x++;
    } else {
      x--;
    }
  }
  return x;
};
