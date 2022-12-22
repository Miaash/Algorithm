/**
 * @param {string} address
 * @return {string}
 */
// '.' 만 배열에 담긴 문자열 반환해야함
// 1. split('.')을 통해 '.'으로 문자열을 배열로
// 2. join('[.]')을 통해 '[.]'로 배열을 문자열로 합치기
var defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};
