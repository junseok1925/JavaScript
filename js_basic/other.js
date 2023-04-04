//불리언(Boolean) 불리언은 참(true)과 거짓(false)을 나타내는 데이터 타입입니다.

    let bool1 = true;
    console.log(bool1); // true
    console.log(typeof bool1); // "boolean"

    let bool2 = false;
    console.log(bool2); // false
    console.log(typeof bool2); // "boolean"

    
    //불리언 데이터 타입은 조건문(if, else, switch 등)과 논리 연산자(&&, ||, !)와 함께 많이 사용됩니다. 예를 들어, 다음과 같은 코드를 작성할 수 있습니다.
    
    let x = 10;
    let y = 5;
    
    if (x > y) {
      console.log("x is greater than y");
    } else {
      console.log("x is less than or equal to y");
    }
    
    let a = true;
    let b = false;
    
    console.log(a && b); // false
    console.log(a || b); // true
    console.log(!a); // false
    
    //위 코드에서는 if 조건문을 사용하여 x가 y보다 큰 경우에는 "x is greater than y"를 출력하고, 그렇지 않은 경우에는 "x is less than or equal to y"를 출력합니다. 또한, 논리 연산자를 사용하여 a와 b의 논리적인 AND(&&)와 OR(||) 연산을 수행하고, NOT(!) 연산을 수행합니다.
    
//undefined undefined는 값이 할당되지 않은 변수를 의미합니다.
    

    let x;
    console.log(x); // undefined

    
//null null은 값이 존재하지 않음을 의미합니다. undefined와는 다릅니다.

    let y = null;

    
//객체(Object) 자바스크립트에서는 객체가 매우 중요한 역할을 합니다. 객체는 속성과 메소드를 가지는 컨테이너입니다. 중괄호({})를 사용하여 객체를 생성합니다. 1주차 말미에 자세히 배웁니다 🙂
    

    let person = { name: 'Alice', age: 20 };
    person.name // 'Alice'
    person.age // 20

    
//배열(Array) 배열은 여러 개의 데이터를 순서대로 저장하는 데이터 타입입니다. 대괄호([])를 사용하여 배열을 생성합니다. 역시 1주차 말미에 자세히 배워요 🙂
