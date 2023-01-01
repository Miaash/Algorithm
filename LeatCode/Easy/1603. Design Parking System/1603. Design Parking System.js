// 생성자함수의 활용
// 생성자함수에 대해 복습할 수 있었다.
// 참고: https://doitnow-man.tistory.com/132
// 참고: https://numucuwer.tistory.com/25

// solution 1) 생성자함수 사용
// var ParkingSystem = function(big, medium, small) {
//     this.count = [big, medium, small];
// };

// /**
//  * @param {number} carType
//  * @return {boolean}
//  */
// ParkingSystem.prototype.addCar = function(carType) {
//   return this.count[carType - 1]-- > 0;
// };

// solution 2) class 사용
class ParkingSystem {
  constructor(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  addCar(carType) {
    if (carType === 1) {
      this.big--;
      return this.big >= 0;
    } else if (carType === 2) {
      this.medium--;
      return this.medium >= 0;
    } else {
      this.small--;
      return this.small >= 0;
    }
  }
}

// new키워드를 통해
const parking = new ParkingSystem(1, 1, 0);
// new 키워드를 통해 ParkingSystem의 새로운 인스턴스 객체를 생성 (1, 1, 0) 후 parking이라는 변수에 할당
// constructor를 통해  => {big = 1, medium = 1, small = 0}
// 1. parking객체에 있는 addCar 메서드에 1을 매개변수로 전달.
// 2. 1은 addCar메서드 내부에서 조건문을 거쳐 true를 반환.
parking.addCar(1); // true
parking.addCar(2); // true
parking.addCar(3); // false
parking.addCar(1); // false
/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
