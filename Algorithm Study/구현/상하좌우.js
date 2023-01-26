// 문제설명:
// 여행가 A는 N X N 크기의 정사각형 공간 위에 서 있다. 가장 왼쪽 위 좌표는 (1,1)이며, 가장 오른쪽 아래 좌표는 (N, N)에 해당됨.
// L: 왼쪽으로 한 칸 이동
// R: 오른쪽으로 한 칸 이동
// U: 위로 한 칸 이동
// D: 아래로 한 칸 이동
// 정사각형 공간을 벗어나는 움직임은 무시됨
// 정사각형의 첫행은 (1,1) (1,2) (1,3)...
// 최종적으로 여행가 A가 도착하게 되는 좌표를 출력하는 프로그램을 작성하시오

// 문제해석:
// 연산 횟수는 이동 횟수에 비례함
// 시간복잡도는 O(N)
// 좌표(row, col)
// L : 왼쪽으로 이동 (col - 1)
// R : 오른쪽으로 이동 (col + 1)
// U : 위쪽으로 이동 (row - 1)
// D : 아래쪽으로 이동 (row + 1)

// 입력조건:
// 첫째 줄에 공간의 크기를 나타내는 N이 주어진다.
// 둘째 줄에 여행가 A가 이동할 계획서 내용이 주어진다.

// 출력조건:
// 첫째 줄에 여행가 A가 최종적으로 도착할 지점의 좌표를 공백으로 구분하여 출력한다.

// 코드:
function solution(n, plans) {
  // 출발점의 좌표는 (1, 1)
  let col = 1;
  let row = 1;
  const plansList = plans.split(" ");

  for (let i = 0; i < plansList.length; i++) {
    // 하나의 요소에서 4개의 조건문에 해당하는 식이 다르므로 switch...case문을 사용한다.
    switch (plansList[i]) {
      case "L":
        col > 1 && col--; // col이 1보다 커야함 (정사각형을 벗어나지 않는 선에서)
        break;
      case "R":
        col < n && col++; // col이 n보다 작아야함 (정사각형의 가로의 길이 보다 작아야하는 선에서)
        break;
      case "U":
        row > 1 && row--;
        break;
      case "D":
        row < n && row++;
        break;
    }
  }
  console.log(row, col);
}

console.log(solution(5, "R R R U D D")); // 3 4
console.log(solution(4, "R D R R L D")); // 3 3
