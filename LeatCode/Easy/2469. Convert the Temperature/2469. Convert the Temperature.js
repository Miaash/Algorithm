/**
 * @param {number} celsius
 * @return {number[]}
 */
// 문제에 나와있다시피 Kelvin과 화씨를 구하는 공식이 제공되었다.
// input은 섭씨값이고 output은 섭씨값을 이용해 켈빈, 화씨를 배열에 담아 반환하는 것이므로 해당 공식에 맞게 입력해주면 된다.
var convertTemperature = function (celsius) {
  return [celsius + 273.15, celsius * 1.8 + 32.0];
};
