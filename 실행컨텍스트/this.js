// 런타임
// 코드가 돌아가는 그 환경
// 1. 노드
// 2. 브라우저
// 전역 환경에서 this -> 노드(global 객체), 브라우저(window 객체)

//브라우저 환경 this 확인 
console.log(this);
console.log(window);
console.log(this === window);
//노드 환경 this 확인
console.log(this);
console.log(global);
console.log(this === global);

//this의 할당
// CASE1 : 함수
// 호출 주체를 명시할 수 없기 때문에 this는 전역 객체를 의미해요.
var func = function (x) {
	console.log(this, x);
};
func(1); // Window { ... } 1

//함수로서의 호출과 메서드로서의 호출 구분 기준
var obj = {
	method: function (x) { console.log(this, x) }
};
obj.method(1); // { method: f } 1
obj['method'](2); // { method: f } 2

//메서드 내부에서의 this
var obj = {
	methodA: function () { console.log(this) },
	inner: {
		methodB: function() { console.log(this) },
	}
};

obj.methodA();             // this === obj
obj['methodA']();          // this === obj

obj.inner.methodB();       // this === obj.inner
obj.inner['methodB']();    // this === obj.inner
obj['inner'].methodB();    // this === obj.inner
obj['inner']['methodB'](); // this === obj.inner

//=========================================================

var obj1 = {
	outer: function() {
		console.log(this); // (1)
		var innerFunc = function() {
			console.log(this); // (2), (3)
		}
		innerFunc();

		var obj2 = {
			innerMethod: innerFunc
		};
		obj2.innerMethod();
	}
};
obj1.outer();

//=========================================================
//내부 스코프에 이미 존재하는 this를 별도의 변수에 할당하는 방법
var obj1 = {
	outer: function() {
		console.log(this); // (1) outer

		// AS-IS
		var innerFunc1 = function() {
			console.log(this); // (2) 전역객체
		}
		innerFunc1();

		// TO-BE
		var self = this;
		var innerFunc2 = function() {
			console.log(self); // (3) outer
		};
		innerFunc2();
	}
};
//=========================================================

//콜백 함수 호출 시 그 함수 내부에서의 this
// 별도 지정 없음 : 전역객체
setTimeout(function () { console.log(this) }, 300);

// 별도 지정 없음 : 전역객체
[1, 2, 3, 4, 5].forEach(function(x) {
	console.log(this, x);
});

// addListener 안에서의 this는 항상 호출한 주체의 element를 return하도록 설계되었음
// 따라서 this는 button을 의미함
document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a').addEventListener('click', function(e) {
	console.log(this, e);
});

//=========================================================

//생성자 함수 내부에서의 this

var Cat = function (name, age) {
	this.bark = '야옹';
	this.name = name;
	this.age = age;
};

var choco = new Cat('초코', 7); //this : choco
var nabi = new Cat('나비', 5);  //this : nabi
//=========================================================
//apply
var func = function (a, b, c) {
	console.log(this, a, b, c);
};
func.apply({ x: 1 }, [4, 5, 6]); // { x: 1 } 4 5 6

var obj = {
	a: 1,
	method: function (x, y) {
		console.log(this.a, x, y);
	}
};

obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6
//=========================================================
//call, slice
//객체에는 배열 메서드를 직접 적용할 수 없어요.
//유사배열객체에는 call 또는 apply 메서드를 이용해 배열 메서드를 차용할 수 있어요.
var obj = {
	0: 'a',
	1: 'b',
	2: 'c',
	length: 3
};
Array.prototype.push.call(obj, 'd');
console.log(obj); // { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4 }

var arr = Array.prototype.slice.call(obj);
console.log(arr); // [ 'a', 'b', 'c', 'd' ]

//=========================================================
// Array.form 메서드
// 유사배열
var obj = {
	0: 'a',
	1: 'b',
	2: 'c',
	length: 3
};

// 객체 -> 배열
var arr = Array.from(obj);

// 찍어보면 배열이 출력됩니다.
console.log(arr);

//=========================================================
//생성자 내부에서 다른 생성자를 호출(공통된 내용의 반복 제거)
function Person(name, gender) {
	this.name = name;
	this.gender = gender;
}
function Student(name, gender, school) {
	Person.call(this, name, gender); // 여기서 this는 student 인스턴스!
	this.school = school;
}
function Employee(name, gender, company) {
	Person.apply(this, [name, gender]); // 여기서 this는 employee 인스턴스!
	this.company = company;
}
var kd = new Student('길동', 'male', '서울대');
var ks = new Employee('길순', 'female', '삼성');

//=========================================================
//apply를 활용해서 최댓값 최솟값 구하기
//효율
var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min);

// 펼치기 연산자(Spread Operation)를 통하면 더 간편하게 해결도 가능해요
const numbers = [10, 20, 3, 16, 45];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max min);
//=========================================================
//bind
var func = function (a, b, c, d) {
	console.log(this, a, b, c, d);
};
func(1, 2, 3, 4); // window객체

// 함수에 this 미리 적용
var bindFunc1 = func.bind({ x: 1 }); // 바로 호출되지는 않아요! 그 외에는 같아요.
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

// 부분 적용 함수 구현
var bindFunc2 = func.bind({ x: 1 }, 4, 5); // 4와 5를 미리 적용
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(8, 9); // { x: 1 } 4 5 8 9

//=========================================================
// 메서드 호출 부분
obj1.outer();

// CASE2 : 메서드
// 호출 주체를 명시할 수 있기 때문에 this는 해당 객체(obj)를 의미해요.
// obj는 곧 { method: f }를 의미하죠?
var obj = {
	method: func,
};
obj.method(2); // { method: f } 2


var obj1 = {
	outer: function() {
		console.log(this); // (1) 메서드의 호출이기때문에 obj1 호출의 주체 (자기 자신)이 찍힘 outer
		var innerFunc = function() {
			console.log(this); // (2) 함수자체의 호출이기때문에 전역객체 node이기때문에 global출력 
                               // (4)아래 obj2가 호출되면서 innerFunc함수 그리고 이번엔 this가 가리키는 건 obj2가된다 
		}
		innerFunc();

		var obj2 = {
			innerMethod: innerFunc
		};
		obj2.innerMethod(); // (3) 메서드의 호출이기때문에 자기 자신이 호출 즉 innerMethod: innerFunc가 호출되면서 위에 innerFunc함수 호출
	}
};
obj1.outer(); // 먼저 실행 (1)먼 실행됨



// 나이든 유저
// 가장 아래 코드가 실행되었을때 "passed~"가 출력되도록 getAge함수를 채워라

var user = {
    name: "john",
    age: 20,
}

var getAged = function (user, passedTime) {


}


var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
    if (!user2) {
		    console.log("Failed! user2 doesn't exist!");
	  } else if (user1 !== user2) { 
        console.log("Passed! If you become older, you will be different from you in the past!")
    } else {
        console.log("Failed! User same with past one");
    }
}

agedUserMustBeDifferentFromUser(user, agedUser);
