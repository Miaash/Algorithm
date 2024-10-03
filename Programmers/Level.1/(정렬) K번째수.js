// [문제 설명]
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항]
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.
// [입출력 예]
// array	commands	return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
// 입출력 예 설명
// [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
// [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
// [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

// [문제풀이 1]
function solution(array, commands) {
    // array를 루프하면서 commmands 내부의 배열도 loop하는데 
    // commands배열이 array배열을 도는 기준이됨
    // 그렇다면 commands배열을 돌면서 array배열을 돌아아햠.
    // 여기서 array를 쓸 때, 주의: 복사해서 사용해야할듯. 아니면 원본배열 변경될듯.?
    // i = 0, commands[0] = [2, 5, 3] => array.slice(commands[0][0],commands[0][1]) 자르고 오름차순 정렬 후, array[command[0][2]]를 result배열에 push 
    // 주의! 문제에서 ~~번째라고 하는 부분을 직접 배열에서 사용하면 안됨. 배열에서는 1번째부터가 아니라 0번째부터 시작하기 때문임
    let result = [];
    for(let i = 0; i < commands.length; i++) {
        let slicedArray = array.slice(commands[i][0] - 1, commands[i][1]);
        let sortedArray = slicedArray.sort((a, b) => a - b);
        result.push(sortedArray[commands[i][2] - 1]);
    }
    
    return result;
}


solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]) // [5, 6, 3]


// [문제풀이 2] 배열구조분해할당 사용
// 배열 구조분해할당을 사용한 방법
function solution (array, command) {
    // 1. 이렇게 command 배열을 미리 정의하고 map으로 돌리는경우
    // 그러면 여기서 first는 [2, 5, 3]
    // const [first, last, position] = command;
    // return command.map((arr) => {
    //     const sortedArr = array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b).slice(arr[2] - 1, arr[2])[0];
    //     return sortedArr;
    //     }                     
    // )    

  // 2. map에서 구조분해해서 돌리는 방법이 있음
    return command.map(([first, last, position]) => {
        // 여기서 first는 [2, 4, 1] => 각배열을 [first, last, position] 이렇게 구조분해했기 때문에 first는 각 배열의 첫번째 요소.
        const sortedArr = array.slice(first - 1, last).sort((a, b) => a - b).slice(position - 1, position)[0];
        return sortedArr;
        }                     
    )
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]) // [5, 6, 3]
