// 문제설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한사항
// str은 길이 1 이상인 문자열입니다.

// 입출력 예
// s: "Zbcdefg", return "gfedcbZ"

// solution 1) 메서드 체이닝. sort() 메서드 사용.
// sort() 메서드는 문자열을 유니코드로 변환 후 정렬함.
// arr.sort()메서드의 매개변수를 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬됩니다.
// [참고] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function solution(s) {
    // 배열로 만들기, 정렬, 뒤집기, 문자열로 합치기 체이닝.
    // arr.sort메서드는 배열의 문자를 유니코드로 변환 후, 정렬.
    return s.split("").sort().reverse().join("");
}

// + 문자열을 유니코드로 변환하는 메서드 str.charCodeAt(i)
// + 유니코드를 문자열로 변환하는 메서드 fromCharCode(num)
