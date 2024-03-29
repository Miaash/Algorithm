// 실행 control + option + N

// 문제설명: 어떠한 수 N이 1이 될 때까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행하려고 한다. 단, 두번째 연산은 N이 K로 나누어떨어질 때만 선택할 수 있다.
// 1. N에서 1을 뺸다.
// 2. N을 K로 나눈다.
// N과 K가 주어질 때 N이 1이 될 때까지 1번 혹은 2번의 과정을 수행해야 하는 최소 횟수를 구하는 프로그램을 작성하시오.

// 입력조건:
// 첫째줄에 N과 K가 공백으로 구분되며 각각 자연수로 주어진다. 이때 입력으로 주어지는 N은 항상 K보다 크거나 같다.

// 출력조건:
// 첫째 줄에 N이 1이 될 때까지 1번 혹은 2번의 과정을 수행해야 하는 횟수의 최솟값을 출력한다.

// 문제해석:
// 먼저 N이 K로 나누어 떨어지는지 확인
// 나누어 떨어진다면 횟수는 1이 될 것이고
// 나누어 떨어지지 않는다면 1번 방법으로 N%K === 0 이 true일때까지 -1을 해주다가 true일때 횟수에 1을 더하며 반복
// 결국 1이 될때까지 나눠야한다.
// 최대한 K로 많이 나눌 수 있도록 해야함

// 정답코드:
function solution(n, k) {
  let result = 0;

  // n이 1보다 작을 때까지 반복
  while (n > 1) {
    if (n % k === 0) {
      // n이 k로 나누어 떨어지면 n을 k로 나눈 몫을 n에 할당한다.
      n /= k;
    } else {
      // n이 k로 나누어 떨어지지 않으면 n - 1을 해준다.
      n--;
    }
    // 계산이 수행되었으니 result에 +1을 해준다.
    result++;
  }
  return result;
}

console.log(solution(25, 5));
console.log(solution(25, 3));
console.log(solution(27, 3));
console.log(solution(1304, 3));
