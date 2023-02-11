// 문제설명: 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 문제해석:
// 주어진 배열 numbers에서 0-9까지 숫자들 중 없는 숫자만 더해서 return

//solution 1) 두가지 배열을 비교하는 방법 filter 함수 안에 includes 사용하여 포함되어있는지 확인
// numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]으로 정해놓고
// numbers 배열을 돌면서 numList랑 비교하면서 numbers배열에 numList의 요소와 같은 것이 없으면 그 없는 것을 리턴하기
function solution(numbers) {
  const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let filteredArr = numList.filter((el) => !numbers.includes(el));
  return filteredArr.reduce((a, b) => a + b, 0);
}

//solution2) 1-9의 합 45에서 주어진 배열의 합의 값을 빼기
function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}
