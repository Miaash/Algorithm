// 문제설명
// 두 정수 left와 right가 매개변수로 주어집니다. 
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000

// 입출력 예
// left: 13, right: 17, result: 43
// left: 24, right: 27, result: 52

// solution 1) 중첩 for문 활용
function solution(left, right) {
    let result = 0;
    for(let i = left; i <= right; i++) {
    let num = 0;
        for(let j = 1; j <= i; j++) {
          if(i % j === 0) num++;
        }
    num % 2 === 0 ? result += i : result -= i;
    }
    return result;
}

// solution 1) 실행결과
// 테스트 1 〉	통과 (4.06ms, 36.3MB)
// 테스트 2 〉	통과 (3.35ms, 36.4MB)
// 테스트 3 〉	통과 (2.27ms, 36.3MB)
// 테스트 4 〉	통과 (1.97ms, 36.3MB)
// 테스트 5 〉	통과 (3.88ms, 36.3MB)
// 테스트 6 〉	통과 (0.56ms, 33.5MB)
// 테스트 7 〉	통과 (0.43ms, 33.6MB)

// solution 2) Math.sqrt() 활용.
// 제곱근이 정수면 약수의 갯수가 대칭이 아니므로 홀수, 정수가 아니라면 약수의 갯수가 대칭을 이루며 짝수.
function solution(left, right) {
  let result = 0;
  for(let i = left; i <= right; i++) {
    if(Number.isInteger(Math.sqrt(i))) {
      result -= i
    } else {
      result += i
    }
  }
return result;
}

// solution 2) 실행결과
// 테스트 1 〉	통과 (0.19ms, 33.5MB)
// 테스트 2 〉	통과 (0.13ms, 33.7MB)
// 테스트 3 〉	통과 (0.14ms, 33.7MB)
// 테스트 4 〉	통과 (0.12ms, 33.5MB)
// 테스트 5 〉	통과 (0.20ms, 33.5MB)
// 테스트 6 〉	통과 (0.12ms, 33.6MB)
// 테스트 7 〉	통과 (0.12ms, 33.4MB)
