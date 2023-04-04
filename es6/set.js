//set
//고유한 값을 저장하는 자료구조이다.
//값(value)만 저장한다.
//키를 저장하지않는다.
//값이 중복되지 않는 유일한 요소로만 구성된다
//값 추가, 값 삭제, 모든 값 제거, 존재 여부 확인

const mySet = new Set(); //set생성
mySet.add("Value1");
mySet.add("Value2");
mySet.add("Value3");
mySet.add("Value4");
mySet.add("Value5");

console.log(mySet.size); //저장된 값의 크기(갯수)
console.log(mySet.has("Value1")); //저장된 값 조회 (true / false로 출력)
console.log(mySet.has("Value2")); //true 
console.log(mySet.has("Value10")); //false

//Iteratot(for ... of 반복문)
//map은 key로 하지만 set은 value만 있기때문에 value로 한다
for (const value of mySet.values()){
    console.log(value);
}
