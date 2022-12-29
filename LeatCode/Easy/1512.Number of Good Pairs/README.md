# [Easy] Number of Good Pairs - 1512

문제바로가기 : (https://leetcode.com/problems/number-of-good-pairs/)

### 성능

solution 1)

- Runtime : 72ms
- Memory : 41.8MB

### 구분

- 중첩반복문 활용

### 채점결과

- Accepted

### 문제내용

    Given an array of integers nums, return the number of good pairs.
    A pair (i, j) is called good if nums[i] == nums[j] and i < j.

#### Example 1 :

`Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.`

#### Example 2 :

`Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.`
