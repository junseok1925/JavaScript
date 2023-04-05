불변 객체
1. 불변 객체의 정의
**가변하다**와 **불변하다**라는 개념을 배웠다.
객체의 속성에 접근해서 값을 변경하면 __가변이 성립__ 반면,
객체 데이터 자체를 변경( 새로운 데이터를 할당 ) 하고자 한다면 기존의 데이터는 변경되지않는다.

2. 불변 객체의 중요성

객체의 가변성의 따른 문제점을 보여주는 코드


// user 객체를 생성
var user = {
	name: 'wonjang',
	gender: 'male',
};

// 이름을 변경하는 함수, 'changeName'을 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 프로퍼티(속성)에 접근해서 이름을 변경했네요! -> 가변
var changeName = function (user, newName) {
	var newUser = user;
	newUser.name = newName;
	return newUser;
};

// 변경한 user정보를 user2 변수에 할당하겠습니다.
// 가변이기 때문에 user1도 영향을 받게 될거에요.
var user2 = changeName(user, 'twojang');

// 결국 아래 로직은 skip하게 될겁니다.
if (user !== user2) {
	console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name); // twojang twojang
console.log(user === user2); // true


위의 예제를 개선

// user 객체를 생성
var user = {
	name: 'wonjang',
	gender: 'male',
};

// 이름을 변경하는 함수 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 프로퍼티에 접근하는 것이 아니라, 아에 새로운 객체를 반환 -> 불변
var changeName = function (user, newName) {
	return {
		name: newName,
		gender: user.gender,
	};
};

// 변경한 user정보를 user2 변수에 할당하겠습니다.
// 불변이기 때문에 user1은 영향이 없어요!
var user2 = changeName(user, 'twojang');

// 결국 아래 로직이 수행되겠네요.
if (user !== user2) {
	console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name); // wonjang twojang
console.log(user === user2); // false 


더 나은 방법 : 얕은 복사

//이런 패턴은 어떨까요?
var copyObject = function (target) {
	var result = {};

	// for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근할 수 있습니다.
	// 하드코딩을 하지 않아도 괜찮아요.
	// 이 copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면
	// 되겠죠!?
	for (var prop in target) {
		result[prop] = target[prop];
	}
	return result;
}


//위 패턴을 우리 예제에 적용해봅시다.
var user = {
	name: 'wonjang',
	gender: 'male',
};

var user2 = copyObject(user);
user2.name = 'twojang';

if (user !== user2) {
	console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name);
console.log(user === user2);

* 얕은 복사의 단점 : 중첩된 객체에 대해서는 완벽한 복사를 할 수 없기 때문
1. 얕은 복사 
	* 바로 아래 단계의 값만 복사
    * 문제점 : 중첩된 객체의 경우 참조형 데이터가 저장된 프로퍼티를 복사할 때, 주소값만 복사

2. 깊은 복사 : 내부의 모든 값들을 하나하나 다 찾아서 모두 복사하는 방법

중첩된 객체에 대한 얕은 복사 살펴보기

var user = {
	name: 'wonjang',
	urls: {
		portfolio: 'http://github.com/abc',
		blog: 'http://blog.com',
		facebook: 'http://facebook.com/abc',
	}
};

var user2 = copyObject(user);

user2.name = 'twojang';

// 바로 아래 단계에 대해서는 불변성을 유지하기 때문에 값이 달라지죠.
console.log(user.name === user2.name); // false

// 더 깊은 단계에 대해서는 불변성을 유지하지 못하기 때문에 값이 같아요.
// 더 혼란스러워 지는거죠 ㅠㅠ
user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio); // true

// 아래 예도 똑같아요.
user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog); // true


* ** 결국 user.url 프로퍼티도 불변 객체로 만들어야함 **

중첩된 객체에 대한 깊은 복사 살펴보기

var user = {
	name: 'wonjang',
	urls: {
		portfolio: 'http://github.com/abc',
		blog: 'http://blog.com',
		facebook: 'http://facebook.com/abc',
	}
};

// 1차 copy
var user2 = copyObject(user);

// 2차 copy -> 이렇게까지 해줘야만 해요..!!
user2.urls = copyObject(user.urls);

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio);

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);


* **결론 : 객체의 프로퍼티 중, 기본형 데이터는 그대로 복사 + 참조형 데이터는 다시 그 내부의 프로퍼티를 복사 => 재귀적 수행 이라고 함 **

