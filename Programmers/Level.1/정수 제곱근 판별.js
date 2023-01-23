// 문제설명 : 임의의 양의 정수(자연수) n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
// 입출력 예 :
// 1. n = 121, result = 144
// 2. n = 3, result = -1
// input n에 대해 양의 정수 x의 제곱이 n이면 (x+1)의 제곱 값을 리턴
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴
// 1. 먼저 Math.sqrt(n)메서드의 값이 정수인지 판별 => 정수라면 x의 제곱은 n이 될 것이고
// 2. 정수가 아니라면 x는 n의 제곱근이 아닐것이다. (나누어 떨어지지 않아 무리수일 것이다.)
// 3. 그러면 어떤 수가 정수인지 아닌지 판별하는 방법에는 무엇이 있을까? 어떤 수를 1로 나눴을 때, 나머지가 0이면 정수일 것이다.
// 4. 또 다른 방법은 Number.isInteger() 메서드를 활용해 파라미터로 받은 수가 정수인지 아닌지 판별해줄 것이다.

// solution 1) Number.isInteger() 메서드 사용
function solution(n) {
  const sqrtNumber = Math.sqrt(n);
  return Number.isInteger(sqrtNumber) ? (sqrtNumber + 1) ** 2 : -1;
}

// solution 2) % 1 === 0 일치연산자 사용
function solution(n) {
  const sqrtNumber = Math.sqrt(n);
  return sqrtNumber % 1 === 0 ? (sqrtNumber + 1) ** 2 : -1;
}
