배열

생성하기
let fruits = ["사과", "바나나", "오렌지"];

배열의 크기 지정
let numbers = new Array(5);

배열 요소 접근
let fruits = ["사과", "바나나", "오렌지"];
console.log(fruits[0]);   // "사과"
console.log(fruits[1]);   // "바나나"
console.log(fruits[2]);   // "오렌지"

배열 메소드
//배열 fruits의 끝에 "오렌지"를 추가
push() 메소드
let fruits = ["사과", "바나나"];
fruits.push("오렌지");
console.log(fruits);   // ["사과", "바나나", "오렌지"]\

pop() 메소드
//pop() 메소드를 사용하여 배열 fruits의 마지막 요소를 삭제
let fruits = ["사과", "바나나", "오렌지"];
fruits.pop();
console.log(fruits);   // ["사과", "바나나"]

shift() 메소드
//shift() 메소드를 사용하여 배열 fruits의 첫 번째 요소를 삭제
let fruits = ["사과", "바나나", "오렌지"];
fruits.shift();
console.log(fruits);   // ["바나나", "오렌지"]

unshift() 메소드
//unshift() 메소드를 사용하여 배열 fruits의 맨 앞에 "사과"를 추가
let fruits = ["바나나", "오렌지"];
fruits.unshift("사과");
console.log(fruits);   // ["사과", "바나나", "오렌지"]

splice() 메소드
//splice() 메소드를 사용하여 배열 fruits의 두 번째 요소를 삭제하고, 그 자리에 "포도"를 추가
let fruits = ["사과", "바나나", "오렌지"];
fruits.splice(1, 1, "포도");
console.log(fruits);   // ["사과", "포도", "오렌지"]

slice() 메소드
//1번배열부터 2번배열 전까지 요소로 새로운 배열을 만든다
let fruits = ["사과", "바나나", "오렌지"];
let slicedFruits = fruits.slice(1, 2);
console.log(slicedFruits);   // ["바나나"]

forEach() 메소드
// forEach() 메소드를 사용하여 배열 numbers의 모든 요소를 출력
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(item) {
  console.log(number);
});

map() 메소드
//기존의 배열을 가공해서 새로운 배열을 만든다(return 필수)
//기존 배열값들에게 2씩 곱한 새로운 배열을 만들기
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function(item) {
  return number * 2;
});
console.log(squaredNumbers);   // [2, 4, 6, 8, 10 ]

filter() 메소드
//기존 배열값중 조건에 맞는 배열값만 뽑아 새로운 배열로 만든다(return 필수)
//짝수만 구하기
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(item) {
  return number % 2 === 0;
});
console.log(evenNumbers);   // [2, 4]

find() 메소드
//조건에 맞는 값중 첫번째 값만 새로운 배열로 만든다
let numbers = [1, 2, 3, 4, 5];
let foundNumber = numbers.find(function(item) {
  return number > 3;
});
console.log(foundNumber);   // 4
