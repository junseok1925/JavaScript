//객체
//key - value pair
//하나의 변수에 여러개의 값을 넣을 수 있다
//value의 값엔 함수, 조건식 등등 모두 들어갈 수 있다.
let person = {
  name: "티모",
  age: 27,
  gender: "수컷"
};

//생성자 함수를 이용한 객체 생성 방법
//한번에 여러개의 객체생성 가능
function personinfo(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender
}
let person1 = new personinfo("티모", 20, "수컷");
let person2 = new personinfo("베인", 23, "여성");
let person3 = new personinfo("가렌", 34, "남성");
let person4 = new personinfo("다리우스", 32, "남성");

//접근하는 방법
console.log(person.name);
console.log(person.age);
console.log(person.gender);

//객체 메소드(객체가 가진 여러가지 기능 : Object.~~~)
//Object.key() : key를 가져오는 메소드(배열형태로 가져옴)
let Ahri = {
  name: "아리",
  age: 27,
  gender: "여성"
};
let keys = Object.keys(Ahri);
console.log("key 값들 :", keys);
let values = Object.values(Ahri);
console.log("value 값들 : ",values)
// 나온값 : 
//key 값들 : [ 'name', 'age', 'gender' ]
//value 값들 :  [ '아리', 27, '여성' ]

// Object.entries() 메소드 : 키와 벨류가 각각 분리된 베열로 나눠져서 이차원배열로 출력
let Teemo = {
  name: "티모",
  age: 30,
  gender: "남자"
};
let entries = Object.entries(Teemo);
console.log(Teemo);

//Object.assign() 메소드 : 객체 복사
let newTeemo = {};
Object.assign(newTeemo, Teemo,{age: 20});
console.log("복사된 객체 :" ,newTeemo, "위에서 age를 수정 했음->",newTeemo.age )

//객체 비교
let Teemo1 = {
  name: "티모",
  age: 30,
  gender: "남자"
};
let Teemo2 = {
  name: "티모",
  age: 30,
  gender: "남자"
};

console.log("키와 벨류가같은 두 객체는 같은가요?", Teemo1 === Teemo2);
//객체는 데이터를 별도 공간에 저장하기때문에 키와 벨류는 같은 객체라도 저장된 주소가 달라서 같을 수 없다.
console.log(JSON.stringify(Teemo1) === JSON.stringify(Teemo2));
//객체를 stringify(문자화)로 형변환해서 비교하면 true

//객체 병합
let Teemo3 = {
  name: "티모",
  age: 30,
};
let Teemo4 = {
  gender: "남자"
};
let perfectTeemo = {...Teemo3, ...Teemo4};
console.log(perfectTeemo);