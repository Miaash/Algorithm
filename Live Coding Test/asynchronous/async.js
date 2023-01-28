// 문제: delay 함수를 구현하시오
// const delay = () => {}

// const main = async() => {
// 	console.log('1번')
//   	delay(4)
//     // 첫번째 콘솔('1번')이 찍힌 후 4초 후에 찍힘`
//   	// output
//   	// '1번'
//     // ...4초 후...
//   	// '2번!!!'
//     console.log('2번!!!')
//   };
// main();

// 코드:
// promise 객체는 내부 프로퍼티를 갖는데 state와 result가 있다.
// state는 처음에는 pending(보류)였다가 resolve가 호출되면 fulfilled, reject가 호출되면 rejected로 변한다.
// result는 undefined였다가 resolve(value)가 호출되면 value, reject(error)가 호출되면 error로 변한다.
const delay = (n) => {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
};

const main = async () => {
  console.log("1번");
  await delay(4);
  console.log("2번!!!");
};

console.log(main());

// 참고: https://velog.io/@gogo78/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EB%B9%84%EB%8F%99%EA%B8%B0%EB%A5%BC-%EC%B2%98%EB%A6%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95
