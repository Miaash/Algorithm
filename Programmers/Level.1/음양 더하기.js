// 문제
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
// absolutes	    signs	        result
// [4,7,12]	  [true,false,true]	      9
// [1,2,3]	  [false,false,true]	  0

// 코드
// sign[i]가 true면 absolutes[i]는 양수, false면 음수
// sign[i] === false 이면 absolutes[i] * (-1)
// 배열의 요소를 모두 바꾸고 배열의 전체 합을 구하기

// solution 1)
// 반복문을 통해 false일 경우, absolutes의 해당 요소를 -1을 곱하여 바꿔준뒤, 배열의 합을 구함
function solution(absolutes, signs) {
  for (let i = 0; i <= absolutes.length; i++) {
    if (signs[i] === false) {
      let idx = absolutes.findIndex((el) => el === absolutes[i]);
      absolutes.splice(idx, 1, absolutes[i] * -1);
    }
  }
  return absolutes.reduce((acc, cur) => acc + cur, 0);
}


//solution 1-2)
// 반복문과 조건문을 통해 새로운 배열에 push  후, 배열의 모든 요소를 더한 뒤 반환. 
function solution(absolutes, signs) {
    let sum = 0;
    let newArr = [];
    for(let i = 0; i < absolutes.length; i++) {
      signs[i] === true ? newArr.push(absolutes[i] * 1) : newArr.push(absolutes[i] * -1);
    }
    return newArr.reduce((acc, cur) => acc + cur, 0);
}

//solution 2)
// reduce 메서드의 인덱스 매개변수를 활용한 방법
// reduce메서드로 더하면서 sign의 요소가 false면 -1을 더하고 아니면 1을 더하고 그 값을 acc와 더하여 배열의 합을 구한다.
function solution(absolutes, signs) {
  return absolutes.reduce((acc, x, i) => acc + x * (signs[i] ? 1 : -1), 0);
  // 위의 메서드를 아래와 같이 줄일 수 있음.
  // return absolutes.reduce((acc, x, i) => acc + (signs[i] ? x : -x), 0)
}
