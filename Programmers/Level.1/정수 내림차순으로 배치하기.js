// 정수를 입력받아 각자릿수에 대해 내림차순으로 정렬하고 리턴하기
// 먼저 문자열로 바꾼 뒤, 각 자릿수에 대한 배열로 만들어 sort메서드로 정렬 후 reverse를 하거나 혹은 sort함수의 콜백으로 내림차순 정렬 후 문자열로 합쳐준다. 이후에 숫자로 바꿔 리턴한다.
// 정수를 문자열로 바꿀 때 => n.toString() 메서드를 사용하거나 암무적 형변환 n + "" 을 이용한다.
// 문자열을 숫자로 바꿀 때 => Number(n), parseInt(n) 메서드를 사용하거나 / 단항연산자를 사용한다. + 연산자는 피연산자를 숫자타입으로 변환한다. - 연산자는 음수인 숫자 타입으로 변환한다.
// solution 1) sort메서드로 내림차순
function solution(n) {
  const NumList = (n + "")
    .split("")
    .map((el) => parseInt(el))
    .sort((a, b) => b - a)
    .join("");
  return +NumList;
}

// solution 2) reverse() 메서드 사용
function solution(n) {
  const NumList = (n + "")
    .split("")
    .map((el) => parseInt(el))
    .sort()
    .reverse()
    .join("");
  return +NumList;
}

// solution 2) 의 경우 속도가 약 0.01 ~ 0.02 ms정도 빨랐다.
