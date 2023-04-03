//문자 : string (문자열 = 문자의 나열)
// ' ' = " " 로 감싸서 표현


//1. 문자열 길이(length) 확인하기
    

    let str = "Hello, world!";
    console.log(str.length); // 13

    
//2. 문자열 결합(concatenation)
    

    let str1 = "Hello, ";
    let str2 = "world!";
    let result = str1.concat(str2);
    console.log(result); // "Hello, world!"

    
//3. 문자열 자르기(substr, slice)
    

    let str3 = "Hello, world!";
    console.log(str3.substr(7, 5)); // "world"
    console.log(str3.slice(7, 12)); // "world"
    
    
//4. 문자열 검색(search)
    

    let str4 = "Hello, world!";
    console.log(str4.search("world")); // 7

    
//5. 문자열 대체(replace)
    

    let str5 = "Hello, world!";
    let result2 = str5.replace("world", "JavaScript");
    console.log(result); // "Hello, JavaScript!"

    
//6. 문자열 분할(split)
let str6 = "apple, banana, kiwi";
let result3 = str6.split(",");
console.log(result); // ["apple", " banana", " kiwi"]