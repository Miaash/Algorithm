/**
 * @param {string[]} sentences
 * @return {number}
 */
// 1. 각 요소의 길이를 비교해서 가장 긴 길이의 요소를 골라낸다.
// 2. 길이가 가장 긴 요소를 split(" ") 메서드를 이용해 문자열을 띄어쓰기를 기준으로 나눈 배열로 바꾼다.
// 3. ['this', 'is', 'great', 'thanks', 'very', 'much']
// 4. 그 나뉜 배열의 길이를 리턴한다.
// solution 1) 반목문을 통해 split() 메서드와 정렬 메서드 사용
// var mostWordsFound = function(sentences) {
//     let result = []
//     for(let i = 0; i < sentences.length; i++) {
//         result.push(sentences[i].split(" ").length)
//         result.sort((a, b) => a - b)
//     }

//     return result[result.length - 1];
// };

// solution 2) spread 연산자와 최댓값을 구하는 Math.max()의 활용
var mostWordsFound = function (sentences) {
  return Math.max(...sentences.map((sen) => sen.split(" ").length));
};

// 시간, 공간 모두 solution 1보다 2가 적게 나왔으며, 코드도 깔끔하다.
