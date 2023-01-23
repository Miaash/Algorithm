// 문제설명 : 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
// 입출력 예 :
// 1. s = "pPoooyY", answer = true
// 2. s = "Pyy", answer = false
// 문자열에 p와 y의 개수를 비교해 같으면 Ture 반환, 다르면 False 반환
// 이때 대문자와 소문자는 구별하지 않는다.
// 문자열을 배열로 나눠 각각 대문자 또는 소문자로 통일 시킨다.
// 반복문으로 돌다가 p면 pCount++, y면 yCount++ 마지막에 두 수의 크기를 비교한다. 같으면 True, 다르면 False를 반환한다.

// solution 1) 반복문을 이용한 방법
function solution(s) {
  const newArr = s.split("").map((el) => el.toLowerCase());
  let pCount = 0;
  let yCount = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "p") pCount++;
    else if (newArr[i] === "y") yCount++;
  }
  return pCount === yCount ? true : false;
}

// solution 2) split 메서드를 사용한 방법
// split메서드는 string 객체를 지정한 구분자를 이용해 여러 개의 문자열로 나눔
// 따라서 주어진 문자열 "Pyy"를 모두 대문자로 바꾼 뒤, P로 나누게 되면 ['', 'YY'] 길이 2의 배열이 되고,
// Y로 나누게 되면 ['P', '', ''] 길이 3의 배열이 된다.
// p의 개수와 y의 개수가 일치하지 않으므로 false를 리턴하게 된다.
function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// solution 1보다 2의 방법이 약 0.1ms 속도로 느렸다. 따라서 위와 같은 경우 2번 방법이 더 효율적으로 보인다.
