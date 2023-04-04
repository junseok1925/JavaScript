//if, else if, else, switch

//if
let x = 10;

if (x > 0){
   console.log("x는 양수입니다")
}

//y의 길이가 5보다 크거나 같으면 길이를 consol.log로 출력

let y = "hello";

if(y.length >= 5 ){
  console.log(y.length)
}

//if else, else
let z = 10; 

if(z < 0){
  console.log("조건에 맞지않다");
}else if(z >= 0 && z <10){
  console.log("조건에 맞지않다");
}else{
  console.log("위에 조건식에 y값이 다 맞지 않으므로 본 메세지 출력됨")  
}

//switch
//변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
//default
let fruit = "사과"

switch(fruit){
  case "사과":
    console.log("사과입니다");
    break;
  case "바나나":
    console.log("바나나입니다");
    break;
  default:
    console.log(fruit);
    break;
}

//조건문 중첩
let age = 20;
let gender = "남성"

if(age >= 20){
  console.log("성인인");
  if(gender == "남성"){
    console.log("남자입니다.")
  }else{
    console.log("여자입니다.")
  }
}else{
  console.log("미성년인");
  if(gender == "남성"){
    console.log("남자입니다.")
  }else{
    console.log("여자입니다.")
  }
}

//조건문 실행

if (age >= 20){
  console.log("성인입니다")
}
//and조건(&&)
age >= 20 && console.log("화살표함수로 작성. 성인입니다");

//삼항 연산자와 단축평가
let c; // y에는 undefined 상태
let  d = c || 20; //c가 undefined d에 20을 세팅하라
console.log(d);

//falsy한 값, truthy한 값
if(0){ //false한 값이라고 해석
  console.log("hello")
}
if(""){ //false한 값이라고 해석
  console.log("hello")
}
if(null){ //false한 값이라고 해석
  console.log("hello")
}
if(undefined){ //false한 값이라고 해석
  console.log("hello")
}
if(NaN){ //false한 값이라고 해석
  console.log("hello")
}
if(false){ //false한 값이라고 해석
  console.log("hello")
}
if(true){ 
  console.log("hello")
}