// 문제설명 : 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
// 입출력 예 :
// n = 12, result = 28 / n = 5, result = 6
// 약수는 나누어떨어지는 모든 수
// solution 1) 반복문과 조건문을 통해 n을 나눈 나머지가 0이 되는 조건에 만족했을 때, 빈배열에 push하고 이 배열의 모든 요소를 더해주는 방식
function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result = result + i;
  }
  return result;
}

// solution 2) Math.sqrt() 제곱근을 이용한 방식 => 반복문의 횟수를 절반으로 줄게 한다.
// 예를 들어 n = 12 일때, Math.sqrt(12)는 3.xx이므로 반복문은 3번을 반복하게 된다.
// i = 1, 12 % 1 === 0 true이므로 result에 1이 더해지게 되며 이후 조건문에 도달하게 된다. 12 / 1 은 1이 아니라는 조건에 성립하므로 result 값에 12 /1의 값인 12가 더해지게 된다. 최종적으로 i = 1 일때, result 값은 1 + 12 = 13이 됩니다.
// i = 2, 12 % 2 === 0 true이므로 result에 2가 더해지게 되며 이후 조건문에 도달하게 된다. 12 / 2 는 2가 아니라는 조건에 성립하므로 result 값에 12 / 2의 값인 6이 더해지게 된다. 최종적으로 i = 2 일때, result 값은 13 + 2 + 6 = 21이 됩니다.
// 마지막 i = 3, 12 % 3 === 0 true이므로 result에 3이 더해지게 되며 이후 조건문에 도달하게 된다. 12 / 3 는 3이 아니라는 조건에 성립하므로 result 값에 12 / 3의 값인 4가 더해지게 된다. 최종적으로 i = 3일때, result 값은 21 + 3 + 4 = 28이 됩니다.
function solution(n) {
  let result = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result = result + i;
      if (n / i !== i) result = result + n / i;
    }
  }
  return result;
}

// solution2의 경우 반복문의 반복 횟수가 절반으로 줄어들다 보니, 테스트가 solution 1에 비해 약 0.07ms~0.08ms 정도 줄어든 모습을 확인할 수 있었다.
