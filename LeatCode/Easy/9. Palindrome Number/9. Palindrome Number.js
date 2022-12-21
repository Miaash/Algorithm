// Palindrome (역순)
// palindrome (회문)
// 기러기, 토마토, 우영우 같은 단어나 문장. (앞으로 읽으나, 뒤로 읽으나 똑같음)
// 1. 음수는 false, 길이가 2 이하면 false, 하지만 0은 true
// 2. 배열의 길이가 3이고 0번째, 2번째 문자열이 같으면 true
// 세자릿수, 첫번째 숫자와 두번째 숫자가 같아야함. (문자열로 바꾸고 split('') - 배열로 담김)
var isPalindrome = function (x) {
  return x === parseInt(x.toString().split("").reverse().join(""));
};
