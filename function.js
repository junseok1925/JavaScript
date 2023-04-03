//함수 선언문
function add(x, y) {
  return x + y;
}
console.log(add(2, 3));   // 5

//함수 표현식(function expression)
let add = function(x, y) {
  return x + y;
}
console.log(add(2, 3));   // 5

//함수 호출하기
function add(x, y) {
  return x + y;
}
console.log(add(2, 3));   // 5

//함수 매개변수
function add(x, y) {
  return x + y;
}
console.log(add(2, 3));   // 5

//함수 반환값
function add(x, y) {
  return x + y;
}
let result = add(2, 3);
console.log(result);   // 5

//스코프(전역변수, 지역변수, 화살표함수)

//전역변수
let x = 10;

function printX(){
  console.log(x); // x의 값 10이 출력
}
  console.log(x);
  print(x);

//지역변수
function printX() {
  let x = 10;
  console.log(x);
}

console.log(x);
printX();   //변수x가 함수안에서 선언되었기때문에 스코프(함수,지역)밖에선 

//화살표함수

//기본함수표현식
let add = (x, y) => {
  return x + y;
}
console.log(add(2, 3));   // 5

//화살표함수로 표현
let add = (x, y) => x + y;

console.log(add(2, 3));   // 5

//매개변수가 하나인 화살표 함수
let square = x => x * x;

console.log(square(3));   // 9