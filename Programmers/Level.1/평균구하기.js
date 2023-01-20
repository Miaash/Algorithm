// 문제설명 : 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
// 입출력 예 :
// 1. arr = [1,2,3,4], result = 2.5
// 2. arr = [5, 5], result = 5
// 평균을 구하는 공식은 모든 수의 합을 주어진 수의 개수로 나누는 것이다.
// 각요소는 reduce메서드를 활용해 더한 뒤, arr.length로 나눠준다.
function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

// 추가적으로 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// 모질라사이트를 참고하면 reduce 함수의 다양한 활용을 볼 수 있다.
