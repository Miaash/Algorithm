// 문제 설명
// 자연수 n이 매개변수로 주어집니다. 
// n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.

// 입출력 예
// n: 45,	result: 7
// n: 125, result: 229

// solution 1) string.toString(), parseInt() 활용
// 10진수 -> n진수 변환 , 뒤집기 , n진수 -> 10진수 변환
function solution(n) {
  const reversedStr = n.toString.split('').reverse().join(''); // 10진수 -> 2진수, 문자요소로 나눠 배열에 담기, 배열 순서 뒤집기, 하나의 문자열로 합치기
  return parseInt(reversedStr, 3); // 3진수 -> 10진수
}

