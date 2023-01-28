// 문제설명: 문자열을 뒤집는 함수를 구현하시오
// 1. 글자별로 뒤집기
// 2. 단어별로 뒤집기

// 코드:
// reverse()메서드로 순서를 뒤집는다.
function reverseStrBySeparator(str, separator) {
  return str.split(separator).reverse().join(separator);
}

// 1. 글자별로 뒤집기 => .gnihtyna em ksA .goleV ym ot emocleW !olleH
let reverseEntireSentence = reverseStrBySeparator(
  "Hello! Welcome to my Velog. Ask me anything.",
  ""
);
console.log(reverseEntireSentence);

// 2. 단어별로 뒤집기 => !olleH emocleW ot ym .goleV ksA em .gnihtyna (첫번째 매개변수에 reverseEntireSentence를 전달했을때)
// => anything. me Ask Velog. my to Welcome Hello! (첫번째 매개변수에 "Hello! Welcome to my Velog. Ask me anything."을 전달했을때)
let reverseEachWord = reverseStrBySeparator(
  "Hello! Welcome to my Velog. Ask me anything.",
  " "
);
console.log(reverseEachWord);
