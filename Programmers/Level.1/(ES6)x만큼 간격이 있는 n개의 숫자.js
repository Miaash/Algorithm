// 문제설명 : 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
// 입출력 예 :
// 1. x = 2, n = 5, answer = [2, 4, 6, 8, 10]
// 2. x = 4, n = 3, answer = [4,8,12]
// 3. x = -4, n = 2, answer = [-4, -8]
// 0부터 시작해서 x를 더한다. n번 반복 ==> x의 배수가 들어가야함

//solution 1) Array.from을 이용한 요소 채우기 (ES6에서 도입)
// Array.from메서드는 두번째 인수로 전달한 콜백함수를 통해 값을 만들면서 요소를 채울 수 있음
// 문제점은 0부터 시작되기 때문에 shift를 한 번 더 해줘야하는 번거로움
// 시간이 조금 더 걸림
function solution(x, n) {
  let newArr = Array.from({ length: n + 1 }, (_, i) => i * x);
  newArr.shift();
  return newArr;
}

// solution 2) Array.fill을 이용한 요소 채우기 (ES6에서 도입)
// fill 메서드로 x요소를 n개 만큼 채운 뒤, map메서드를 통해 인덱스 i에 1씩 더해가면서 v 요소만큼 더해준다. (x만큼 더해주는 꼴)
// 시간이 단축된다.
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

// solution 2의 방법이 1보다 약 0.1 ms 덜 걸린다. 메모리 공간을 덜 차지한다. (변수선언이 없어서?)
