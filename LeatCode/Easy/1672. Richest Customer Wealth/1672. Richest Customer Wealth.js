/**
 * @param {number[][]} accounts
 * @return {number}
 */
// 결국엔 매개변수 배열의 각 2차원배열의 합 중 가장 큰 수를 반환.
// accounts = [[1, 2, 3],[4, 5, 6]] 일 때,
// accounts[0]의 합 = 1 + 2 + 3 = 6, accounts[1]의 합 = 4 + 5 + 6 = 15이면
// 가장 큰 수의 합인 15를 반환.
// 반복문을 통해서 accounts[i]와 account[j]..의 합을 각각 구하고  그 배열에서 maximum한 수를 find.
var maximumWealth = function (accounts) {
  let result = [];
  for (let i = 0; i < accounts.length; i++) {
    result.push(accounts[i].reduce((acc, cur) => acc + cur, 0));
  }
  return Math.max(...result);
};
