// 문제설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

// 입출력 예
// s: "a234", return false
// s: "1234", return true

// solution 1) 숫자 배열로 바꾼 뒤, 요소 하나씩 정수인지 체크.
// 처음엔 배열로 안 하고 통으로 정수인지 체크했는데, 이렇게 하면 반례) 지수형태 '10e1' 에서 실패로 나옴.
function solution(s) {
    // 길이가 4혹은 6이어야 하고 숫자로만 구성돼어있는 함수면 true리턴.
    let arr = s.split('').map((el) => parseInt(el));
    if(s.length !== 4 && s.length !== 6) {
        return false
    } 
    return arr.findIndex((el) => Number.isInteger(el) === false) !== -1 ? false : true 
}

// solution 2) 문자열 순회하면서 조건에 부합하지 않는 조건 걸러내기
function solution(s) {
    if(s.length != 4 && s.length != 6) return false;
    for(let i = 0; i < s.length; i++) {
        if(isNaN(Number(s[i]))) return false;
    }
    return true;
}

// solution 3) 정규표현식 활용
function solution(s) {
  const regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

