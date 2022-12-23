# [Easy] Running Sum of 1d Array - 1480

문제바로가기 : (https://leetcode.com/problems/running-sum-of-1d-array/)

### 성능

solution 1)

- Runtime : 99ms
- Memory : 42.1MB

solution 2)

- Runtime : 77ms
- Memory : 42.2MB

### 구분

- 배열 누적합 연산

### 채점결과

- Accepted

### 문제내용

    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Return the running sum of nums.

#### Example 1 :

`Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].`

#### Example 2 :

`Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].`
