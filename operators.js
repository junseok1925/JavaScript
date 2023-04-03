//산술 연산자(arithmetic operators)

//더하기 연산자(+)

console.log(2 + 3);       // 5
console.log("2" + "3");   // "23"
console.log("2" + 3);     // "23"
console.log(2 + "3");     // "23"
//더하기 연산자는 숫자와 문자열을 함께 사용할 경우, 자동으로 문자열로 변환.


//빼기 연산자(-)

console.log(5 - 2);       // 3
console.log("5" - "2");   // 3
console.log("5" - 2);     // 3
console.log(5 - "2");     // 3
console.log("five" - 2);  // NaN
//빼기 연산자는 숫자와 문자열을 함께 사용할 경우, 자동으로 숫자로 변환

//곱하기 연산자(*)
console.log(2 * 3);       // 6
console.log("2" * "3");   // 6
console.log("2" * 3);     // 6
console.log(2 * "3");     // 6
console.log("two" * 3);   // NaN
//곱하기 연산자는 숫자와 문자열을 함께 사용할 경우, 자동으로 숫자로 변환

//나누기 연산자(/)
console.log(6 / 3);       // 2
console.log("6" / "3");   // 2
console.log("6" / 3);     // 2
console.log(6 / "3");     // 2
console.log("six" / 3);   // NaN
//나누기 연산자는 숫자와 문자열을 함께 사용할 경우, 자동으로 숫자

//나머지 연산자(%)
console.log(7 % 3);       // 1
console.log("7" % "3");   // 1
console.log("7" % 3);     // 1
console.log(7 % "3");     // 1
console.log("seven" % 3); // NaN
//나머지 연산자는 숫자와 문자열을 함께 사용할 경우, 자동으로 숫자로 변환합니다

//할당 연산자(assignment operators)

//등호 연산자(=)
let x = 10;
console.log(x);   // 10

x = 5;
console.log(x);   // 5


//더하기 등호 연산자(+=)

let x = 10;
console.log(x);   // 10

x += 5;
console.log(x);   // 15


//빼기 등호 연산자(-=)
let x = 10;
console.log(x);   // 10

x -= 5;
console.log(x);   // 5


//곱하기 등호 연산자(-=)
let x = 10;
console.log(x);   // 10

x *= 5;
console.log(x);   // 50


//나누기 등호 연산자(/=)

let x = 10;
console.log(x);   // 10

x /= 5;
console.log(x);   // 2


//나머지 등호 연산자(%=)

let x = 10;
console.log(x);   // 10

x %= 3;
console.log(x);   // 1


//비교 연산자(comparison operators)

//일치 연산자(===)
console.log(2 === 2);   // true
console.log("2" === 2);   // false
console.log(2 === "2");   // false
//일치 연산자는 자료형까지 비교


//불일치 연산자(!==)
console.log(2 !== 2);   // false
console.log("2" !== 2);   // true
console.log(2 !== "2");   // true

//작다(<) 연산자
console.log(2 < 3);   // true
console.log(2 < "3");   // true
console.log("2" < 3);   // true
//작다 연산자는 숫자와 문자열을 함께 사용할 경우, 자동으로 숫자로 변환


//작거나 같다(<=) 연산자
console.log(2 <= 3);   // true
console.log(2 <= "3");   // true
console.log("2" <= 3);   // true
console.log(2 <= 2);   // true
//작거나 같다 연산자는 숫자와 문자열을 함께 사용할 경우, 자동으로 숫자로 변환

//크거나 같다(>=) 연산자
console.log(2 >= 3);   // false
console.log(2 >= "3");   // false
console.log("2" >= 3);   // false
console.log(2 >= 2);   // true
//크거나 같다 연산자는 숫자와 문자열을 함께 사용할 경우, 자동으로 숫자로 변환

//논리곱(&&) 연산자
console.log(true && true);   // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);   // false
//논리곱 연산자는 두 값이 모두 true일 경우에만 true를 반환


//논리합(||) 연산자
console.log(true || true);   // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);   // false
//논리합 연산자는 두 값 중 하나라도 true일 경우 true를 반환


//논리부정(!) 연산자
console.log(!true);   // false
console.log(!false);   // true
console.log(!(2 > 1));   // false


//삼항 연산자(ternary operator)

//삼항 연산자(?:)
let x = 10;
let result = (x > 5) ? "크다" : "작다";
console.log(result);   // "크다"


//typeof 연산자
console.log(typeof 123);   // "number"
console.log(typeof "123");   // "string"
console.log(typeof true);   // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);   // "object"
console.log(typeof {});   // "object"
console.log(typeof []);   // "object"
console.log(typeof function(){});   // "function"
// typeof 연산자를 사용하여 값의 자료형을 확인