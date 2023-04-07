const readline = require('readline'); //require = ()안의 내용을 가져온다

const rl = readline.createInterface({
input: process.stdin,   //입력한 값을 가져온다
output: process.stdout  //값을 출력한다
});

rl.on('line', input => {
const [n, m] = input.split(' ').map(Number);
if (n > 1000 || m > 1000) {
console.log("n과 m은 각각 1000 이하인 자연수여야 합니다.");
rl.close();
return;
}
for (let i = 0; i < m; i++) {
console.log('*'.repeat(n));
}
rl.close();
});


// 문제 1) 

// 1. 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성하라
//   * num은 int 범위의 정수
//   * 0은 짝수

//   입출력 예
//   num	return
//   3	"Odd"
//   4	"Even"

function solution(num) {
    if(num % 2 === 0 || num === 0){ 
      // 짝수는 2로 나눴을때 나머지가 무족건0이다, 0은 짝수라는 조건이 있다
        return "Even"; //짝수일때(0포함), "Even" 리턴
    }else{
        return "Odd"; //그 외(홀수일 경우만 남았다), "Odd" 리턴
    }
    
    return answer;
}



// 문제2)
// 1. 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
// 2. s는 길이가 1 이상, 100이하인 스트링입니다.

// * 입출력예

// s	return
// "abcde"	"c"
// "qwer"	"we"



function solution(s) {
    var answer = '';
    
    if(s.length % 2 == 0){ //글자수가 짝수일 경우
        answer = s[s.length/2 - 1] + s[s.length/2];
      	//단어s의 길이기 짝수일 경우 2개의 글자를 출력하기 위해 2로 나눈 값과 그 값에 -1을 한 값을 더함
    }else{
        answer = s[Math.floor(s.length/2)];
      //만약 글자수가 3이라면 2로 나누면 1.5이다 하지만 글자수는 0부터 시작이므로 반내림을 한다
    }
    return answer;
}


// 문제3) 핸드폰번호 가리기
//1. 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 * 으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.


function solution(phone_number) {
    let len = phone_number.length - 4; 
    //phone_number의 문자열보다 4개 작은 문자열 생성
    return "*".repeat(len) + phone_number.substring(len);
    //"넣을문자".repeat(넣을객체)
}


// 문제4) x만큼 간격이 있는 n개의 숫자
//1. 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

function solution(x, n) {
    var answer = [];
    let arr = x; //arr를 x로 초기화 x의 초기값으로 시작해야하기때문
    for(let i = 0; i < n; i++){
        answer.push(arr); //처음시작은 x값으로 시작해야하기때문에 먼저 선언
        arr += x;
    }
    return answer;
}

// 문제5)부족한 금액 계산하기

// * 놀이기구의 이용료는 price, 놀이기구를 N번 째 이용한다면 원래 이용료에 N배를 받는다
// 처음금액:100 -> 2번째금액:200 -> 3번째금액:300 ...... 으로 인상된다
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 money에서 얼마가 모자라는지를 return하도록
// 함수를 완성하라 단, 금액이 부족하지 않으면 0을 return하시오


function solution(price, money, count) {
    let totalPrice = 0;
    
    for(let i=1;i<=count;i++){ //놀이기구는 1번타는 것 부터 시작으므로
        totalPrice += price * i;
        //총액 = 총액 + (가격 * 놀이기구탄 횟수) = 총 놀이기구를 탈때 쓴 금액
    }
    
    return money > totalPrice ? 0 : totalPrice-money
    //자신이 가진 금액이 놀이기구탑승총액보다 크면 0을 리턴
    //적으면 총액 - 자신이 가진 돈
}


// 문제6) 2016년 a월 b일은 무슨 요일일까
// * 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
// 예를 들어 a=6, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 리턴
// * 2016은 윤년이다


function solution(a, b) {
    // 윤년은 2월이 29일까지 1년이 366일이다.
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const dayofMonths = [31,29,31,30,31,30,31,31,30,31,30,31]; 
    let day = b+4; // 1월 1일이 금요일 이므로 b가 1일 때 기본인덱스는 5
    // 1월은 이전 월의 일수를 더하지 않음으로 a-1 조건으로 해야한다.(배열은0부터 시작이기때문)
    for(let i = 0; i < a-1; ++i){
        day += dayofMonths[i];
    }
    return week[day%7];


// 문제7) 나누어 떨어지는 숫자 배열

// * array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수를 작성
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 리턴


function solution(arr, divisor) {
    var answer = [];
    
    for(i=0; i<arr.length; i++) { //arr길이 만큼 반복
      if(arr[i] % divisor == 0) { // = arr[i]가 divisor의 배수이다.
        answer.push(arr[i]);      //divisor의 배수인 arr[i]의 값을 리턴
      }
    }
    if(answer.length == 0) { //나눠 떨어지지않는다면 
      answer.push(-1); //배열에 1을 답아 반환
    }
    answer.sort((a,b) => a - b); //오름차순, b - a면 내림차순
    return answer;
}


