undefined와 null
** 둘 다 없음을 나타내는 값, 하지만 미세하게 다르고, 그 목적 또한 다르다.**

1. undefined
    * 사용자(=개발자)가 직접 지정할 수도 있지만 일반적으로는 자바스크립트 엔진에서 **값이 있어야 할 것 같은데 없는 경우**, 자동으로 부여한다
    * 변수에 값이 지정되지 않은 경우, 데이터 영역의 메모리 주소를 지정하지 않은 식별자에 접근할 때
    * .이나 [  ]로 접근하려 할 때, 해당 데이터가 존재하지 않는 경우
    * return 문이 없거나 호출되지 않는 함수의 실행 결과

예시

var a;
console.log(a); // (1) 값을 대입하지 않은 변수에 접근

var obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.b); // (2) 존재하지 않는 property에 접근
// console.log(b); // 오류 발생

var func = function() { };
var c = func(); // (3) 반환 값이 없는 function
console.log(c); // undefined

** undefined는 '없다'를 명시적으로 표현할 때는 사용하지 않는다. **

2. null
    * 용도 : ‘없다’를 명시적으로 표현할 때
    * 주의 : typeof null
        
        typeof null이 object인 것은 유명한 javascript 자체 버그이다.
        
예시


var n = null;
console.log(typeof n); // object

//동등연산자(equality operator)
console.log(n == undefined); // true
console.log(n == null); // true

//일치연산자(identity operator)
console.log(n === undefined);
console.log(n === null);
