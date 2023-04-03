//암시적 형 변환(implicit coercion)
//암시적 형 변환은 자바스크립트에서 자동으로 수행되는 형 변환이며, 일반적으로 연산자를 사용할 때 발생합니다.

//문자열 변환
console.log(1 + "2");   // "12"
console.log("1" + true);   // "1true"
console.log("1" + {});   // "1[object Object]"
console.log("1" + null);   // "1null"
console.log("1" + undefined);   // "1undefined"
//자료형을 문자열로 변환한 후 연산을 수행

//숫자 변환
console.log(1 - "2");   // -1 (-빼기는 숫자형으로 우선 형변환)
console.log("2" * "3");   // 6
console.log(4 + "5");   // 9
// 연산자를 사용할 때, 문자열을 숫자로 변환. 이때, 빈 문자열("")이나 공백 문자열(" ")은 0으로 변환

//불리언 변환
console.log(Boolean(0));   // false
console.log(Boolean(""));   // false
console.log(Boolean(null));   // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));   // false
console.log(Boolean("false"));   // true
console.log(Boolean({}));   // true
//불리언 값으로 변환. 이때, 0, 빈 문자열(""), null, undefined, NaN은 false로 변환 그 외의 값은 true로 변환됩니다.

//명시적 형 변환(explicit coercion)
//명시적 형 변환은 개발자가 직접 자료형을 변환하는 것

//문자열 변환
console.log(String(123));       // "123"
console.log(String(true));      // "true"
console.log(String(false));     // "false"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
console.log(String({}));        // "[object Object]"
//String() 함수를 사용하여 다른 자료형을 문자열로 변환

//숫자 변환
console.log(Number("123"));   // 123
console.log(Number(""));      // 0
console.log(Number("  "));    // 0
console.log(Number(true));    // 1
console.log(Number(false));   // 0