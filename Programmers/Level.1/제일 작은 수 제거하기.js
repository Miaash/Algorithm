// 문제설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 코드
// 배열에서 가장 작은 요소만 제거
// 요소가 한개이거나 빈배열일 경우, [-1] 리턴 => 예외
// 1. 가장 작은 요소 찾기 Math.min()
// 2. 배열에서 작은 요소 제거 => filter 메서드 사용
// 3. 예외 처리
function solution(arr) {
  if (arr.length <= 1) return [-1];
  const minNum = Math.min(...arr);
  return arr.filter((el) => el !== minNum);
}

// 삼항연산자로...
function solution(arr) {
    let minNum = Math.min(...arr);
    return arr.length <= 1 ? [-1] : arr.filter((el) => el !== minNum);
}
