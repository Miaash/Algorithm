// 문제설명 : 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를 들어 ndl 12345면 [5, 4, 3, 2, 1]을 리턴합니다.
// 입출력 예 :
// 1. n = 12345, return [5, 4, 3, 2, 1]
// (n + "") 자연수를 문자열로 바꿔준 뒤, split을 통해 각각 나눠 배열에 담아준다.
// 그 후 reverse()를 통해 배열 전체의 순서를 반대로 만들고 map을 이용해 각 요소를 숫자로 바꿔준다.

// solution 1)
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((el) => parseInt(el));
}

// solution 2) do...while문 => 거짓으로 평가될 때까지 지정된 구문을 실행하는 루프
// n이 음수가 될 때까지 반복문을 반복, 아래와 같은 과정을 반복
// n을 10으로 나눈 나머지를 arr배열에 담고 n을 10으로 나눈 뒤 소숫점 뒷자리는 모두 버린 다 .
function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}

// solution 2의 방법이 0.01ms 정도 더 단축시켜주었다.


// 2024.05.14 이 문제를 다시 풀다가 solution2)에 설명을 보태자면...
// do...while문은 while문의 조건식이 거짓이 되면서 종료되는 반복문이다.
// while문과의 차이는 do문을 무조건 한번 실행하고 while문으로 내려가 조건식이 참으로 판별이 되면 do문을 반복하는것이다.
// 
function solution(n) {
  var arr = [];            
  do {
       arr.push(n%10); 
      // arr에 12345를 10으로 나눈 나머지를 push => [5] => 어떤수를 10으로 나누면 항상 끝에 수가 나머지.
      n = Math.floor(n/10); // 이렇게 하면 아까 나머지를 제외한 값이 n이됨. n이 12였을때 10으로 나누면 나머지2, 몫1!!!
    } while (n>0); // 이 조건식이 참이면 do문 반복.n이 0이 되는 순간 종료.
  
    return arr;
}
