## Recursion (재귀)

```
프로그래밍에서 재귀(Recursion)란 자신을 정의할 때 자기 자신을 재참조하는 것을 말한다. 따라서 재귀 함수란 함수가 호출되어 실행할 때, 함수 내부에서 자기 자신을 다시 호출하는 재귀 호출(Recursive call)의 형태를 말한다.
```

#### stack

- 호출 스택이라고 불리는 스택을 사용하여 함수를 실행한다. 호출 스택은 일반적인 프로그래밍에서도 중요하지만 재귀를 사용할 때 더욱 중요하다.
- 스택은 선입후출(FILO)의 방식을 따르고 있다. 처음 push된 자료는 가장 마지막에 pop할 수 있다. 가장 마지막에 push된 자료를 가장 먼저 pop할 수 있다.
- 자료를 한 쪽 끝에서만 push하거나 pop할 수 있는 선형구조이다.

#### Factorial(팩토리얼 예제)

팩토리얼이란 자기 자신부터 시작해서 1 감소한 숫자들을 곱한 값이다.

- iterative code

```
function factorial (n) {
    let result = 1;
    for(let i = n; i >= n; i--) {
        result *= i
    }
    return result;
}

console.log(factorial(5)) // 5 * 4 * 3 * 2 * 1
```

- recursion code
  => factorial(n) = n \* factorial(n-1);

```
function factorial (n) {
  if (n === 1) { 	// Base case, Termination case (재귀중단문장)
    return 1;
  }
  return n * factorial(n - 1);
}
factorial(3);
```

#### recursion code의 실행과정

1. 먼저 파라미터 n의 값으로 3이 전달된다.
2. stack에 3을 저장하고 factorial(3 - 1) = factorial(2)을 실행한다.
3. n의 값으로 2가 전달된다. stack에 2를 저장하고 factorial(2 - 1) = factorial(1)을 실행한다.
4. n의 값으로 1이 전달된다. n이 1이면 1을 리턴하고 함수를 종료한다.
5. factorial(1)이 1을 return하고 종료하였으므로 2 \* 1을 연산하고 그 값인 2를 return한다.
6. 리턴된 2와 3을 곱한 후 그 값인 6을 리턴하고 모든 함수가 종료된다.
