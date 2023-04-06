// - 컴퓨터는 0과 9 사이의 서로 다른 숫자 3개를 무작위로 뽑습니다. (ex) 123, 759

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function chooseNum() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = 0

  for (let i = 0; i < 3; i++) {
      let num1 = getRandomInt(0, 8 - i);
      result += array[num1] * Math.pow(10, i);
      array.splice(num1, 1);
  }

  return result.toString(); //문자열로 변환하여 반환
}

// - 사용자는 컴퓨터가 뽑은 숫자를 맞추기 위해 시도합니다.
// - 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.
//     - 숫자의 값과 위치가 모두 일치하면 S
//     - 숫자의 값은 일치하지만 위치가 틀렸으면 B

function tryNum(submit, answer) {
  var cnt = 0;
  for (var i = 0; i < submit.length; i++) {
      var idx = answer.indexOf(submit[i]);
      if (idx == i) {
          cnt += 10;
      } else if (idx != -1) {
          cnt++;
      }
  }
  return cnt;
}

// - 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.
// - 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var subgame = function (count, baseball) {
  rl.question(`${count}번째 시도 : `, function (answer) { // 사용자 입력
      if (answer.length == 3) {
          result = tryNum(answer.toString(), baseball);
          console.log(`${result % 10}B ${parseInt(result / 10)}S`);
          if (result / 10 == 3) {
              console.log(`${count}번만에 맞히셨습니다.`);
              console.log("게임을 종료합니다.")
              process.exit();
          } else {
              subgame(++count, baseball);
          }
      } else {
          console.log("세자릿수를 입력해주세요!");
          process.exit();
      }
  });
}

function maingame() {
  let answer = chooseNum();
  console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");
  subgame(1, answer);
}


maingame();