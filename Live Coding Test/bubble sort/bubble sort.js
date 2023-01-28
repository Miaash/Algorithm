// 배열의 인덱스 별로 크기를 비교하여 0번째 인덱스가 1번째 인덱스보다 크다면 교체하고 그게 아니라면 다음 인덱스와 비교하는 오름차순 정렬 방법
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 순차적으로 비교하기 위한 반복문
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
      if (arr[j] > arr[j + 1]) {
        // 두 수를 비교하여 앞 수가 뒷 수보다 크면
        let temp = arr[j]; // 두 수를 서로 바꿔준다
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort2(arr) {
  let swaps;
  do {
    swaps = false;
    // swaps가 false면 do~while문 중단
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1]; // 두 요소를 바꿔준다
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swaps = true; // 두 요소를 바꿔줬으면 swaps를 true로 바꿔 다음 반복문을 진행시킨다.
      }
    }
  } while (swaps);

  return arr;
}

console.log(bubbleSort([5, 1, 7, 4, 6, 3, 2, 8]));
console.log(bubbleSort2([5, 1, 7, 4, 6, 3, 2, 8]));

// 연습
function bubbleSort3(arr) {
  let swaps;
  do {
    swaps = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swaps = true;
      }
    }
  } while (swaps);
  return arr;
}

console.log(bubbleSort3([5, 1, 7, 4, 6, 3, 2, 8]));
