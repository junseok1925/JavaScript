// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
// 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.



function solution(s){
    var answer = true;
    //대문자로 변경
    s = s.toUpperCase();
    var num = 0;
    for(var i = 0; i < s.length; i++){
        //if문으로 문자열 s에 i번 배열에 'P'가 있으면 num++
        if(s[i] === 'P'){ 
            num++;
        }
        //if문으로 문자열 s에 i번 배열에 'P'가 있으면 num--
        if(s[i] === 'Y'){
            num--;
        }
    }
    if( num === 0 ){
        //최종적으로 'P'와 'Y'갯수가 같으면 num의 값은 0이 된다
        answer = true;
    }else{
        answer = false;
    }
    return answer;
}