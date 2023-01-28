// 문제: createBase(integer)을 구현하시오.
// let addSix = createBase(6);
// addSix(10); // 16
// addSix(21); // 27

// 코드:
function createBase(baseNumber) {
  return function (n) {
    return baseNumber + n;
  };
}

let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
