// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.

// 입출력 예
// n = 3, return "수박수"
// n = 4, return "수박수박"

// solution 1) 배열과 while문 사용
function solution(n) {
    let result = ['수']
    let times = 0
    while(times !== n - 1){
        result[times] === '수' ? result.push('박') : result.push('수');
        times++;
    }
    return result.join('');
}

// solution 2) repeat문 사용
function solution(n) {
    return "수박".repeat(n).slice(0, n);
}
