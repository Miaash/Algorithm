// 문제설명 : 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
// 입출력 예시 :
// 1.
// 2.
// 첫번째 드는 생각은 split('')을 통해 각 자릿수를 나눠주고 더할 때에는 각 자릿수를 숫자로 바꿔 더해준다.
// 여기서 처음 주어진 수는 자연수이므로 이 자연수를 먼저 문자열로 바꾸는 과정이 선행되어야 한다.
// parseInt와 toString()메서드를 사용한다.
// solution 1) map메서드를 추가로 사용해 모든 요소를 숫자로 바꿔준 뒤, reduce 메서드로 모든 요소를 더한다.
function solution(n) {
  return (n + "")
    .split("")
    .map((el) => parseInt(el))
    .reduce((acc, cur) => acc + cur);
}
// 여기서 (n + "")를 하는 이유는 자바스크립트에서 숫자와 문자열에 + 연산자를 사용하게 되면 문자열로 type을 변환하기 때문에 toString()의 결과와 같다.
// 즉, 피연산자 중 1개가 문자열이면 문자열로 type을 변환한다.

// solution 2) reduce메서드로 모든 요소를 더할 때 각 요소를 숫자로 바꿔준 뒤, 더한다.
function solution(n) {
  return (n + "").split("").reduce((acc, cur) => acc + parseInt(cur), 0);
}

// 궁금한 점 : acc는 초깃값이다. 그러면 parseInt(acc)를 해주게 되면 초깃값 0을 써주지 않아도 상관없는 것 아닐까? => 초깃값 0을 지정해주지 않으면 마지막 test fail
// parseInt(acc)를 해주지 않고 초깃값 0을 지정해주면 모든 테스트 success

// 결과적으로 반복 메서드를 두번 사용하는 solution1보다 solution2의 경우 약 0.03ms 정도 더 적게 나왔다..
