// for, while -> ~동안 반복문
// for (초기값; 조건식; 증감식){
//}

//변수 i는 0부터 시작
//i<10될때까지 반복
//i는 한사이클이 돌고 나면 1을 더함
for(let i = 0; i < 10; i++){
  console.log(i);
} //1,2,3,4,5,6,7,8,9,10

//배열과 for문
const arr = ["one","two","three","four","five"];
for(let i = 0; i < arr.length; i++){
  console.log(i);
  console.log(arr[i]);
}

//if문과 for문
for(let i = 0; i < 11; i++){
  if(i >= 2){ //2부터 출력가능하게
    if(i % 2 === 0 ){
      //2의 배수
      console.log(i + "는 2의 배수입니다")
    }
  }
}

//for ~in문
//객체의 속성을 출력하는 문법
let Teemo = {
  name : "티모",
  age : 27,
  line : "top"
};
for(let key in Teemo){
  console.log(key + " : " + Teemo[key]) //key + Teemo의 key의 값(value)
}

//while
//무한 조건식에 맞을때까지 무한반복
let i = 0;
while ( i < 10 ){
  console.log(i);
  i++;
} // -> 0 1 2 3 ... 9

//1초과 100미만 숫자 중 5의 배수인 것만 출력
while( i < 100){
  if( i % 5 === 0 && i >= 5){
    console.log(i + "는 5의 배수이다.");
  }
  i++;
}

// do ~while문
let a = 0;

do {
  console.log(a);
  a++;
} while (a < 10);

//break
for(let i = 0; i < 10; i++){
  if( i === 5){
    break; //5가되면 for문을 벗어난다 멈춘다
  }
  console.log(i); // 0 1 2 3 4
}

//continue
for(let i = 0; i < 10; i++){
  if( i === 5){
    continue; //5가되면 다음 순서로 넘어간다
  }
  console.log(i); // 0 1 2 3 4 6 7 8 9
}