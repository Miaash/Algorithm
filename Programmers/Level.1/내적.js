// 문제설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. 
// a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

// 입출력 예
// a: [1, 2, 3, 4], b: [-3,-1,0,2]
// a: [-1,0,1], b: 	[1,0,-1]

// solution 1) for문 사용
function solution(a, b) {
  let result = 0;
  for(let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
    // result = result + (a[i] * b[i]);
  }
  return result;
}

// solution 2) reduce메서드 사용
// reduce는 다음 네 개의 인자를 가짐.
// arr.reduce(callback[, initialValue])
// 누산기 (acc)
// 현재 값 (cur)
// 현재 인덱스 (idx)
// 원본 배열 (src)
// 아래 코드에서는 cur에 들어갈 인자가 없으므로 비워둔다(_)
function solution(a, b) {
  return a.reduce((acc, _, idx) => acc += acc[idx] * b[idx], 0);
  // return a.reduce((acc, _, idx) => acc = acc + (acc[idx] * b[idx]), 0);
}
