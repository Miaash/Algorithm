# [Easy] Design Parking System - 1603 - 이진트리 자료구조에 대한 추가학습 필요

문제바로가기 : (https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/)

### 성능

solution 1)

- Runtime : ms
- Memory : MB

### 구분

- 해당 트리의 클론에서 이진트리의 해당 노드 찾기

### 채점결과

- Accepted

### 문제내용

    Given two binary trees original and cloned and given a reference to a node target in the original tree.

    The cloned tree is a copy of the original tree.

    Return a reference to the same node in the cloned tree.

    Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

#### Example 1 :

![Alt text](https://assets.leetcode.com/uploads/2020/02/21/e1.png)
`Input
["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
[[1, 1, 0], [1], [2], [3], [1]]
Output
[null, true, true, false, false]

Explanation
ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
parkingSystem.addCar(3); // return false because there is no available slot for a small car
parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.`

#### Example 2 :

![Alt text](https://assets.leetcode.com/uploads/2020/02/21/e2.png)
`Input: tree = [7], target =  7
Output: 7`

#### Example 2 :

`Input: tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4
Output: 4`
