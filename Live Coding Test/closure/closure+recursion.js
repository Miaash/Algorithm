// 문제: 다음을 구현하시오.
// sum(1)(2)(); /// 3
// sum(1)(2)(3)(4)(); // 10
// mul(2)(3)(4); // 24
// mul(4)(3)(4); // 48

// 문제해석: 재귀와 클로저를 활용해 해결할 수 있다.
// 첫번째 sum 함수의 경우, 처음 1이 들어오게 되면 함수를 반환하는데 이 함수는 b가 존재하면 sum(a+b)를 반환하고 b가 없다면 a만 반환한다. 이것을 반복한다.

// 코드:
const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(1)());
console.log(sum(1)(2)());
console.log(sum(1)(2)(3)(4)());

// 코드:
const mul = function (a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
};

console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));
