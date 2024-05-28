// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// 입출력 예
// s: "try hello world" , return "TrY HeLlO WoRlD"

// solution 1)
// 1. 문자열을 띄어쓰기 기준으로 나눠 배열에 담기
// 2. 그 문자열 배열을 for문으로 알파벳 하나씩 배열에 담아 idx의 짝수 홀수 여부를 판단한 뒤, 소문자 대문자 처리.
// 3. 그렇게 바뀐 strArr를 띄어쓰기하면서 하나의 문자열로 연결.
function solution(s) {
    // 짝수: 대문자
    // 홀수: 소문자
    // **각 띄어쓰기 기준 단어 별 짝수 홀수번째!**
    let strArr = s.split(' ');
    for(let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].split('').map((el, idx) => idx % 2 === 0 ? el.toUpperCase() :  el.toLowerCase()).join('')
    }
    return strArr.join(' ') // 합칠 때 띄어쓰기하면서 합치기
}
