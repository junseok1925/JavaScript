//map
// js -> 객채, 배열 : 많고, 다양하고, 복잡한 프로그램을 만든다
// 그럼에도, 현실세계를 반영하기엔 어렵다
// Map, Set -> 추가적인 자료구조가 등장

// Map, Set의 목적 : 데이터의 구성, 검색, 사용을 효율적으로 처리 -> 기존의 객체또는 배열보다 효율적인 처리 가능

// 1. Map
// -key / value
// -key에 어떤 데이터타입(유형)도 다 들어올 수 있다.
// -Map은 키가 정렬된 순서로 저장되기 때문에

const myMap = new Map();
//map생성
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

//Iteratot(for ... of 반복문)
//keys
console.log(myMap.keys());
for (const key of myMap.keys()) {
    console.log(key);
}
//values
console.log(myMap.values());
for (const key of myMap.values()) {
    console.log(value);
}
//entries
console.log(myMap.entries());
for (const key of myMap.entries()) {
    console.log(entries);
}
//size : map의 사이즈(길이)
console.log(myMap.size);

//key기반으로 검색
console.log(myMap.has("one")); //true
console.log(myMap.has("one123")); //false
