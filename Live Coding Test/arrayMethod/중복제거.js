// 문제설명:
// 1. 배열의 중복 요소를 제거한 뒤 출력하세요.
// 2. 문자열의 중복 요소를 제거한 뒤 출력하세요.

// 코드:
// 1. 배열의 중복 요소 제거
function newArr(arr) {
  return arr.filter((el, idx) => {
    return arr.indexOf(el) === idx;
  });
}

console.log(newArr([4, 2, 9, 2, 4, 6, 8, 9]));

// 2. 문자열의 중복 요소 제거
function newStr(str) {
  const strArr = str.split("");
  return strArr
    .filter((el, idx) => {
      return strArr.indexOf(el) === idx;
    })
    .join("");
}

console.log(newStr("aabbbeedudaacca"));
