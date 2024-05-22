// 문제설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 코드
// solution 1) repeat()
// 문자열에서 처음부터 끝에서 -4만큼의 길이의 문자열을 *로 치환하는 방법으로 풀이했다.
// replace메서드를 사용했다 처음에 바꿔줄 문자를 '*' 하니까 '*4444' 이런식으로 리턴되어서 '*'를 0 ~ phoneNum-4 길이만큼 반복해주었다.
function solution(phone_number) {
  const newNum = phone_number.slice(0, -4);
  return phone_number.replace(newNum, "*".repeat(newNum.length));
}

// solution 2) fill()
// 배열에 문자열을 각각의 요소로 나눠 담아준뒤, fill 연산자로 0번째 요소부터 전체 길이의 -4까지 *로 채워준다.
// 그 후 join 메서드를 통해 하나의 문자열로 합쳐준다.
function solution(phone_number) {
  return [...phone_number].fill("*", 0, phone_number.length - 4).join("");
}

// solution 3) 정규표현식
// /\d(?=\d{4})/g => 숫자로된 문자열에서 한글자씩 체크! 
// => 뒤에 네개의 숫자가 오는 문자 확인.
// replace 메서드 때문인지 repeat, slice메서드를 사용했을때보다 속도가 2배정도 느리게 측정됨.
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, '*');
}

// solution 4) repeat()
function solution(phone_number) {
   return "*".repeat(phone_number.length - 4).concat(phone_number.slice(-4));
}

// 속도 측면에서 solution 1) 이 0.04ms로 가장 빨랐다. => solution 3) 도 replace를 사용했는데 왜 속도 차이가 많이 날까? 정규표현식때문일까?
// 정규표현식의 복잡성:
// 3번 메서드의 정규표현식은 각 숫자에 대해 뒤에 4개의 숫자가 있는지 확인해야 합니다. 이 과정은 많은 비교 연산을 필요로 하며, 문자열이 길어질수록 더 많은 연산을 수행해야 합니다.
// 정규표현식의 탐색과 일치 연산은 단순한 문자열 슬라이싱과 비교했을 때 상대적으로 더 많은 계산 자원을 소모합니다.
// replace 메서드의 동작 방식:
// 1번 메서드는 한 번의 대체 작업만 수행하지만, 2번 메서드는 문자열 전체에서 정규표현식에 맞는 모든 부분을 찾아서 여러 번 대체 작업을 수행합니다.
