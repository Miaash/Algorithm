// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

// 입출력 예
// arr1: [[1,2],[2,3]], arr2: [[3,4],[5,6]], return [[4,6],[7,9]]
// arr1: [[1],[2]], arr2: [[3],[4]], return [[4],[6]]

// solution 1) 중첩 for문 사용, arr.push()
function solution(arr1, arr2) {
    let result = [];
    for(let i = 0; i < arr1.length; i++) {
        let sum = []
        for(let j = 0; j < arr1[i].length; j++) {
            sum.push(arr1[i][j] + arr2[i][j])
        }
        result.push(sum)
    }
    return result;
}

// solution 2) 중첩 for문 사용, 매개변수 배열 형식 재사용.
// 굳이 새배열에 배열을 push해줄 필요없음.
function solution(arr1, arr2) {
    let result = arr1;
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr1[i].length; j++) {
            result[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return result;
}
