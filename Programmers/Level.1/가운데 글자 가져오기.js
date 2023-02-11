// 문제설명 :
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 문제해석:
// 문자열 가운데 글자를 반환.
// 짝수일 경우 가운데 두 글자를 반환.

// 코드:
// solution 1) slice와 floor(반올림)활용
function solution(s) {
  let half = s.length / 2;
  return s.length % 2 === 0
    ? s.slice(half - 1, half + 1)
    : s.slice(Math.floor(half), Math.floor(half) + 1);
}

// solution 2) substr과 ceil(내림)활용
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

// ** Math.floor(), Math.ceil()의 차이점 **
// 1. Math.floor() 메서드는 숫자 올림을 하고
// 2. Math.ceil() 메서드는 숫자 내림을 하는 메서드이다.

// ** slice(), substr(), substring()의 차이점 **
// 두 메서드 모두 문자열을 자를 때 사용한다.
// 1. slice("시작위치", "종료위치")로 문자열을 자른다. => 시작위치 ~ 종료위치 - 1로 문자열을 자른다.
// slice 경우, 음수를 입력하면 뒤에서부터 문자열을 자를 수 있다.
// 2. substr("시작 위치", "길이")로 문자열을 앞에서부터 자른다.
// 3. substring("시작 위치", "종료 위치")로 문자열을 자른다. => 시작위치 ~ 종료위치 - 1로 문자열을 자른다.
