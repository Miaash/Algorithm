# [Easy] Concatenation of Array - 1929

---

문제바로가기 : (https://leetcode.com/problems/concatenation-of-array/)

### 성능변화

- 첫번째 방법
- Runtime : 87ms
- Memory : 45.2MB

- 두번째 방법
- Runtime : 85ms
- Memory : 46.1MB

- 세번째 방법
- Runtime : 67ms
- Memory : 44.7MB

### 구분

- 배열

### 채점결과

- Accepted

### 문제내용

    Given an integer array nums of length n,
    you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
    Specifically, ans is the concatenation of two nums arrays.
    Return the array ans.

#### Example 1 :

`Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:

- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]`

#### Example 2 :

`Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:

- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]`
