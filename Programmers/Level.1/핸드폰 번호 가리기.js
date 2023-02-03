// 문제설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 코드
// solution 1)
// 문자열에서 처음부터 끝에서 -4만큼의 길이의 문자열을 *로 치환하는 방법으로 풀이했다.
// replace메서드를 사용했다 처음에 바꿔줄 문자를 '*' 하니까 '*4444' 이런식으로 리턴되어서 '*'를 0 ~ phoneNum-4 길이만큼 반복해주었다.
function solution(phone_number) {
  const newNum = phone_number.slice(0, -4);
  return phone_number.replace(newNum, "*".repeat(newNum.length));
}

// solution 2) 짧은 코드
// 배열에 문자열을 각각의 요소로 나눠 담아준뒤, fill 연산자로 0번째 요소부터 전체 길이의 -4까지 *로 채워준다.
// 그 후 join 메서드를 통해 하나의 문자열로 합쳐준다.
function solution(phone_number) {
  return [...phone_number].fill("*", 0, phone_number.length - 4).join("");
}
