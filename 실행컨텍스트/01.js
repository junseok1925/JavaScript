 실행컨텍스트(스코프, 변수, 객체, 호이스팅)
* ** 자바스크립트의 실행 컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아 놓는 객체이다. **

1. 선언된 변수를 위로 끌어올린다 = 호이스팅(hoisting)
2. 외부 환경 정보를 구성
3. this값을 설정.

 실행 컨텍스트란?

* ** 실행 컨텍스트를 이해하기 위해서는, "콜 스텍"에 대한 이해가 필요.
그 전에 "스텍"이라는 개념을 이해해야한다. **

![](https://velog.velcdn.com/images/rkdwnstjr16/post/bf4a87a8-0952-480e-91cb-1187910a1769/image.png)

 콜스텍( call stack )
** 실행 컨텍스트란 실행할 코드에 제공할 환경 정보들을 모아놓은 객체이다.
그 객체, 즉 동일 환경에 있는 코드를 실행할 때 필요한 환경정보들을 모아 컨텍스트를 구성하고 이것을 위해 "스텍"의 한 종류인 "콜 스텍"에 쌓아 올림

 컨텍스트의 구성
1. 전역공간
2. ecal() 함수
3. 함수 (우리가 흔히 실행컨텍스트를 구성하는 방법)

 예시


// ---- 1번
var a = 1;
function outer() {
	function inner() {
		console.log(a); //undefined
		var a = 3;
	}
	inner(); // ---- 2번
	console.log(a);
}
outer(); // ---- 3번
console.log(a);


* 실행컨텍스트 구성 순서
    
    **위 코드는 아래 순서로 진행이 된다.**
    (콜 스택에 쌓이는 실행컨텍스트에 의해 순서가 보장)
    
    코드실행 → 전역(in) → 전역(중단) + outer(in) → outer(중단) + inner(in) → inner(out) + outer(재개) → outer(out) + 전역(재개) → 전역(out) → 코드종료
    
** 결국은 특정 실행 컨텍스트가 생성되는(또는 활성화되는) 시점이 콜 스택의 맨 위에 쌓이는(노출되는) 순간을 의미하구요. 곧, 현재 실행할 코드에 해당 실행 컨텍스트가 관여하게 되는 시점을 의미 **

---

 실행 컨텍스트 객체의 실체 ( = 담기는 정보 )
** 실행 컨텍스트 객체의 실체 3가지 **

 1. VariableEnvironment (VE)
* 현재 컨텍스트 내의 식별자 정보 ( = record)를 갖고 있다.
* 	식별자( record )는 ex) var a = 3 에서 var를 의미
* 외부 환경 정보(outer)를 갖고 있다.
* 선언 시점 LexicalEnvironment의 snapshot( 선언 시점 그때의 모습을 간직 변경사항 업데이트 x )

 2. LexicalEnvironment ( LE )
* VariableEnvironment( VE )와 동일하지만, 변경사항을 실시간으로 반영( 실질적으로 사용해야하는 것)

 3. ThisBinding
* this 식별자가 바라봐야할 객체

 LexicalEnvironment(1) - environmentRocord(=record)와 호이스팅

 개요
1. 현제 컨텍스트와 관련된 코드의 **식별자 정보**들이 저장(수집)됨(record)
2. 수집 대상 정보 : 함수에 지정된 매개변수 식별자, 함수 자체, var로 선언된 변수 식별자 등
3. 컨텍스트 내부를 처음부터 끝까지 **순서대로** 훎어가며 수집( 순서대로 수집되나, 코드는 실행되는것은 아님 )

 호이스팅( hoisting )
1. 변수정보 수집을 모두 마쳤더라도 아직 실행 컨텍스트가 관여할 코드는 실행 전의 상태이다
2. 변수 정보 수집 과정을 이해하기 쉽게 설명한 **'가상 개념'**


 호이스팅 규칙 (1)
** 매개변수 및 변수는 선언부를 호이스팅 한다. **

* 적용 전

//action point 1 : 매개변수 다시 쓰기(JS 엔진은 똑같이 이해한다)
//action point 2 : 결과 예상하기
//action point 3 : hoisting 적용해본 후 결과를 다시 예상해보기

function a (x) {
	console.log(x);
	var x;
	console.log(x);
	var x = 2;
	console.log(x);
}
a(1);


* 매개변수 적용


//action point 1 : 매개변수 다시 쓰기(JS 엔진은 똑같이 이해한다)
//action point 2 : 결과 예상하기
//action point 3 : hoisting 적용해본 후 결과를 다시 예상해보기

function a () {
	var x = 1;
	console.log(x);
	var x;
	console.log(x);
	var x = 2;
	console.log(x);
}
a(1);


* 호이스팅 적용

//action point 1 : 매개변수 다시 쓰기(JS 엔진은 똑같이 이해한다)
//action point 2 : 결과 예상하기
//action point 3 : hoisting 적용해본 후 결과를 다시 예상해보기

function a () {
	var x;
	var x;
	var x;

	x = 1;
	console.log(x);
	console.log(x);
	x = 2;
	console.log(x);
}
a(1);

** 예상을 1 -> undefined -> 2 했지만
실제로는 1,1,2 라는 결과가 나온다 **



 호이스팅 규칙 (2)

** 함수 선언은 전체를 호이스팅한다 **

* 적용전

//action point 1 : 결과 값 예상해보기
//action point 2 : hoisting 적용해본 후 결과를 다시 예상해보기

function a () {
	console.log(b);
	var b = 'bbb';
	console.log(b);
	function b() { }
	console.log(b);
}
a();


* 호이스팅 적용

//action point 1 : 결과 값 예상해보기
//action point 2 : hoisting 적용해본 후 결과를 다시 예상해보기

function a () {
	var b; // 변수 선언부 호이스팅
	function b() { } // 함수 선언은 전체를 호이스팅

	console.log(b);
	b = 'bbb'; // 변수의 할당부는 원래 자리에

	console.log(b);
	console.log(b);
}
a();

* 함수선언문을 함수표현식으로 바꿔보기

//action point 1 : 결과 값 예상해보기
//action point 2 : hoisting 적용해본 후 결과를 다시 예상해보기

function a () {
	var b; // 변수 선언부 호이스팅
	var b = function b() { } // 함수 선언은 전체를 호이스팅

	console.log(b);
	b = 'bbb'; // 변수의 할당부는 원래 자리에

	console.log(b);
	console.log(b);
}
a();

** 예상 : 에러(또는 undefined), ‘bbb’, b함수
실제 : b함수, ‘bbb’, ‘bbb’ **
