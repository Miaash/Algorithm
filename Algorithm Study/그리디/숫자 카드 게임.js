// 실행 control + option + N

// 문제설명:
// 숫자카드 게임은 여러 개의 숫자카드 중에서 가장 높은 숫자가 쓰인 카드 한 장을 뽑는 게임
// 숫자카드들은 N X M의 형태로 놓여 있다. 이때 N은 행의 개수를 의미, M은 열의 개수를 의미
// 1. 선택한 행에 포함된 카드들 중 가장 숫자가 낮은 카드를 뽑아야함
// 2. 처음에 카드를 골라낼 행을 선택할 때, 이후에 해당 행에서 가장 숫자가 낮은 카드를 뽑을 것을 고려하여 최종적으로 가장 높은 숫자의 카드를 뽑을 수 있도록 전력세우기

// 문제해석:
// 각 행 별로 가장 작은 수를 고르고 그 수들 가운데 가장 큰 값을 찾아내면 되는 문제
// 가장 작은 수를 찾는 경우 Math.min()메서드를 사용할 것.
// 작은 수 가운데 가장 큰 수를 찾는 경우 Math.max()메서드를 사용!
// Math.max, min 메서드 사용시, 입력값으로 0개 이상의 숫자를 받기 때문에 배열의 경우 spread 연산자를 사용해야한다

// 정답코드:
function solution(n, m, list) {
  // 숫자 리스트를 공백으로 구분하여 입력받기 => ['7889', '3334']
  const numlist = list.split(" ");
  let result = 0;

  for (let i = 0; i < n; i++) {
    //data[0] = [7, 8, 8, 9]
    //data[1] = [3, 3, 3, 4]
    let data = numlist[i].split("").map((el) => parseInt(el));
    let minData = Math.min(...data);

    // 첫번째 loop에서 result는 0이고 minData는 7이므로 result에는 7이라는 값이 할당됨
    // 마지막 loop에서 result는 7이고 minData는 3이므로 result에는 7이라는 값이 재할당됨
    result = Math.max(result, minData);
  }
  return result;
}

const matrix1 = `7889 3334`;

const matrix2 = `312 414 222`;

const matrix3 = `7318 3334`;

console.log(solution(2, 4, matrix1));
console.log(solution(3, 3, matrix2));
console.log(solution(2, 4, matrix3));
