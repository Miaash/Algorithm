## Bubble Sort

### 🫧 버블정렬이란?
![버블정렬](https://user-images.githubusercontent.com/98681659/215251830-d0eab4eb-6e53-42a0-b248-c2042df35255.gif)

버블정렬은 항목 별로 크기를 비교하여 0번째 인덱스가 1번째 인덱스보다 크다면 교체하고 그게 아니라면 다음 인덱스와 비교하는 오름차순 정렬 방법이다.

### ⚙️ 복잡도 분석

```
- Time: O(n2)
- Space: O(1)
```

버블정렬은 평균 복잡도가 O(n2)인 비효율적인 케이스이다.
중첩으로 반복문을 쓰기 때문에 성능이 좋지 않을 수 밖에 없다.
구현하기는 간단한 편이지만 성능면에서 매우 떨어진다.
(여기서 n은 정렬되는 항목의 수라고 할 수 있다.)
항목이 이미 정렬되어 있을 때, 버블정렬의 복잡도는 O(n)이다.
버블정렬의 공간 복잡도는 O(1)이다. 그 이유는 하나의 싱글 메모리 공간을 차지하고 있기 때문이다.

