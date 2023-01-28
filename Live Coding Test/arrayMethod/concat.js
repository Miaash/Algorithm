// 문제 : 다음을 구현하시오.
// duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

// 코드:
function duplicate(arr) {
  return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4, 5]));
