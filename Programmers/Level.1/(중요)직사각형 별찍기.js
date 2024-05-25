// 문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.

// 예시
// 입력: 5 3
// 출력: *****
//      *****
//      *****

// solution 1) str.repeat(number) 활용
// b만큼 *을 a번씩 반복해서 출력. 
// b만큼 반복할때마다 줄바꿈 필요. => 템플릿 리터럴 사용해서 줄바꿈 시켜줌.
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let result = ''
    let str = '*'
    for(let i = 0; i < b; i++) {
        result = result +  `${str.repeat(a)} \n`
    }
    console.log(result)
});

// solution 2) solution 1을 좀 더 간결하게 표현
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let str = '*'.repeat(a);
    for(let i = 0; i < b; i++) {
        console.log(str)
    }
});
