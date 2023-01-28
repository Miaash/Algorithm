// 문제설명:
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한조건:
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.

// 문제해석: a, b 사이의 수의 합

// 코드:

// solution 1) 반복문의 조건을 Math.min과 Math.max를 통해 해결
// a, b는 둘 중 어떤 수가 큰지 모르기 때문에 for문을 통해 각 수를 더하는 과정에서 조건을 let i = Math.min(a, b)로 지정한다. 그리고 i <= Math.max(a, b)를 통해 두 수 중 가장 큰 값까지 반복문을 돌리면서 합을 구한다.
function solution(a, b) {
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) sum += i;
  return sum;
}

// solution 2) 가우스 공식 사용
// a부터 b까지 더한값: (a+b) * (a부터b까지의길이) / 2 적용
// 여기서 a부터 b까지의 거리는 b > a, b - a / b < a, a - b일텐데 Math.abs()절댓값 메서드를 통해 음수를 양수로 변환.
function solution(a, b) {
  let sum = 0;
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
