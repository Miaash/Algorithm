// 문제설명 : 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
// 입출력 예 :
// 1. num = 3, return "Odd"
// 2. num = 4, return "Even"
// 문제에 나온 내용대로 num이 짝수면 문자열 "Even"을 리턴하고 홀수인 경우 "Odd"를 반환하는 함수를 완성하는 문제였다.
// 홀수/짝수 구분은 num % 2 === 0 조건문으로 판별한다. true면 짝수, false면 홀수이다.
// 삼항연산자를 사용한다.
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
