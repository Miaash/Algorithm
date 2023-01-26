// 문제설명:
// 정수 N이 입력되면 00시 00분 00초부터 N시 59분 59초까지의 모든 시각 중에서 3이 하나라도 포함되는 모든 경우의 수를 구하는 프로그램을 작성하시오.

// 문제해석:
// 매 시각을 문자열로 바꾼 다음 문자열에 '3'이 포함됐는지 검사한다.
// 1초씩 늘리면서 시, 분, 초를 문자열로 변환 후 합친다. 이후 '3'이 포함됐는지 확인

// 코드:
// 시, 분, 초를 3중 반복문을 통해 구현
// for (시) {
//    for (분) {
//       for (초) {}
//    }
// }
// 만약 h가 5라면, 00시 00분 00초 ~ 5시 59분 59초까지의 모든 시각 중에서 3이 하나라도 포함되면 count++;

function solution(h) {
  // 시간, 분, 초 배열을 만든다.
  // 시간은 1부터 h+1까지의 요소들이 들어있다.
  // 분과 초는 1부터 60까지의 요소들이 들어있다.
  const hour = Array(h + 1)
    .fill(1)
    .map((x, y) => x + y);
  const min = Array(60)
    .fill(1)
    .map((x, y) => x + y);
  const second = Array(60)
    .fill(1)
    .map((x, y) => x + y);

  let count = 0;

  // 각 시간, 분, 초 배열을 돌면서 각 요소들을 문자열로 합치고 그 문자열에 3이라는 문자가 포함되었을 때 count++를 해준다
  for (let i of hour) {
    for (let j of min) {
      for (let k of second) {
        let str = i.toString() + j.toString() + k.toString();
        if (str.includes("3")) {
          count += 1;
        }
      }
    }
  }
  return count;
}

console.log(solution(5));
console.log(solution(1));
