// 실행 control + option + N

// 문제설명:
// n개로 이루어진 배열 arr가 주어졌을 때 배열의 수들을 M번 더하여 가장 큰 수를 만든다. 단, 배열의 특정한 인덱스에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없다.

// 문제해석:
// 예를 들어, arr = [2, 3, 4, 5, 6]과 같이 n개의 요소가 들어있는 배열이 주어졌을 때, M이 8, K가 3이라고 가정.
// 가장 큰 수인 6과 두번째로 큰 5를 규칙에 따라 더하면 => (6 + 6 + 6 + 5) + (6 + 6 + 6 + 5)
// 결국 총 같은 수열이 두번 반복이 될 것이다. 수열의 길이는 K + 1이고 수열의 반복은 M을 K + 1로 나눈 값이 될 것이다. => M/(K + 1)
// 위의 경우 같은 수열의 반복횟수는 8/(3 + 1) => 2가 될 것이다.
// 하지만 예외도 있다. 나누어 떨어지지 않을 경우! 7/(3 + 1) 일 때는 나머지가 바로 가장 큰수의 추가 합산이 될테니까 그때는 나머지를 더해주면 될 것이다.
// => M % (K+1) 가 될 것이다.
// 따라서 가장 큰 수가 더해지는 횟수 : (M/(K + 1)) * K + (M%(K + 1)) = 4

// 정답코드:
function result(arr, n, k, m) {
  // 배열 정렬
  const sortedArr = arr.sort((a, b) => a - b);

  // 가장 큰 수와 두번째로 큰 수
  const first = sortedArr[n - 1];
  const second = sortedArr[n - 2];

  // 가장 큰 수가 더해지는 횟수 계산
  const count = (m / (k + 1)) * k + (m % (k + 1));
  let countResult = 0;
  countResult = countResult + count * first;

  // 두번째로 큰 수가 더해지는 횟수 계산
  countResult = countResult + (m - count) * second;

  return countResult;
}

console.log(result([2, 4, 5, 4, 6], 5, 3, 8));
