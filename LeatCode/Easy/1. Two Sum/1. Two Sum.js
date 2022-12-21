var twoSum = function (nums, target) {
  // Sudo Code
  // input: 정수배열 nums, taget지수
  // 졍수배열에 있는 숫자들의 합으로 target을 만들어야함
  // output은 배열 속 숫자들의 합이 target이 되는 숫자의 인덱스를 담은 배열
  // nums = [1, 2, 3, 4] , target = 7 , output = [2, 3]
  // 1. 배열 속 각 요소의 합이 7이 되는 것부터 해보자
  // 2. 합이 7이 되는 요소의 인덱스를 빈배열에 담자.
  // 3. i = 0, nums[0] + num[1] = 3, nums[0] + num[2] = 4, nums[0] + num[3] = 4
  // i = 1, nums[1] + num[2] = 5, nums[1] + num[3] = 6
  // i = 2, nums[2] + num[3] = 7
  // 이때 합이 7이 되는 인덱스는 nums[2], nums[3] => 이것의 인덱스를 어떻게 빈배열에 담을 것인가?
  // [2, 3] => output

  // 중첩된 반복문의 사용
  for (let i = 0; i < nums.length; i++) {
    let first = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let second = nums[j];
      if (first + second === target) {
        return [i, j];
      }
    }
  }
};
