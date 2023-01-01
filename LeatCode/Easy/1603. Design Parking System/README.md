# [Easy] Design Parking System - 1603

문제바로가기 : (https://leetcode.com/problems/design-parking-system/)

### 성능

solution 1)

- Runtime : 129ms
- Memory : 48.8MB

solution 2)

- Runtime : 138ms
- Memory : 50.1MB

### 구분

- 배열

### 채점결과

- Accepted

### 문제내용

    Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

    Implement the ParkingSystem class:

    ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
    bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.

#### Example 1 :

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

#### Code
<img width="764" alt="스크린샷 2023-01-01 오후 5 36 50" src="https://user-images.githubusercontent.com/98681659/210172120-f4cb8d34-25b5-462f-b778-492265b57abe.png">


