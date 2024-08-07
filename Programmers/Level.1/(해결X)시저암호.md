문제설명
- 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
- 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. 
- "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한사항
- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

입출력 예
s	       n	 result
"AB"	   1	 "BC"
"z"	     1	 "a"
"a B z"	 4	 "e F d"

solution 1)
// 1. 아스키코드 사용해서 숫자하나씩 더해서 그 숫자에 해당하는 알파벳 반환.
// 2. 대소문자 체크. 
// 3. 65부터 A, 97부터 a
// 4. 공백은 아무리 밀어도 공백
// 5. z는 밀면 a.

```
function solution(s, n) {
    const formattedArr = s.split('');
    const newArr = () => {
        if(formattedArr.includes('z') || formattedArr.includes('Z') || formattedArr.includes(' ')) {
        return formattedArr.map((el) => {
            if(el === 'z') {
                return 96
            } else if(el === 'Z') {
                return 64
            } else if(el === ' '){
                return ' '
            }
            else {
                return el.charCodeAt()
            }
        })
    } else {
        return formattedArr.map((el) => el.charCodeAt())
    };
    } 
    const testArr = newArr();
    const numberArr = testArr.map((el) => {
        if(el === ' ') {
            return ' '
        } else {
            return el + n
        }
    });
    
    const stringArr = numberArr.map((el) => {
        if(el === ' ') {
            return el
        } else {
            return String.fromCharCode(el)
        }
    })
    
    return stringArr.join('');
    
}
```
