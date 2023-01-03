# [Easy] Minumum Sum of Four Digit Number After Splitting Digits - 2160

문제바로가기 : (https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/)

### 성능

solution 1)

- Runtime : 75ms
- Memory : 42.4MB

### 구분

- 나올 수 있는 합의 최솟값

### 채점결과

- Accepted

### 문제내용

    You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

    For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
    Return the minimum possible sum of new1 and new2.

#### Example 1 :

`Input: num = 2932
Output: 52
Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.`

#### Example 2 :

`Input: num = 4009
Output: 13
Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc. 
The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.
`

### Study :

`문자열을 숫자타입으로 바꿔주는 메서드 `parseInt()`와 `Number()`의 차이는 무엇일까?

1. '년도'가 포함된 문자열을 변환해보았다.
   여기서 보면 '년도'라는 문자를 parseInt()는 포함시키지 않고 2020부분만 숫자로 바꿔준다.
   `let test = '2020년도';
parseInt(test); // 2020
Number(test); // NaN
`

2. 소수점으로 길게 늘어진 숫자로 된 문자열을 변환해보자.
   `let test = '10.12345';
parseInt(test); // 10
Number(test); // 10.12345
`
   결국 `parseInt()`는 문자열에서 숫자(정수)만 뽑아서 변환해줌.
   `Number()`는 문자열 전체가 숫자일 때 변환해줌. (소수점까지 모두 변환 가능)
