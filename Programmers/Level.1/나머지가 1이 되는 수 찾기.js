// 문제설명 : 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.
// 입출력 예 :
// 1. n = 10, result = 3
// 2. n = 12, result =11
// n을 x로 나눈 몫이 1일 될 때까지 반목문 돌리고, 몫이 1이 되는 순간 x값을 return.

// solution)
function solution(n) {
    let rest = 0;
    for(let i = 0; i < n; i++) {
        if(n%i === 1) {
            return i
        }
    }
}
