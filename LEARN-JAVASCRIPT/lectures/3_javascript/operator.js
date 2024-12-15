console.log('Hello ' + 'world!');
console.log('3' + 3); // number -> string
console.log(typeof ('3' + 3)); // number -> string
console.log('3' + 5 + 8); // "358" 왼쪽부터 더해지므로 문자열로 처리
console.log(3 + 5 + '8'); // "88"

/*
let number = prompt('숫자를 입력해주세요!');
if (number % 2 === 1) {
  alert('홀수 입니다!');
} else {
  alert('짝수 입니다!');
}
*/

let x = 10;
let y = 20;
let result = x + y--;
console.log('x: ', x);
console.log('y: ', y);
console.log('result: ', result);

let a = 30;
let b = '30';
console.log(a !== b); // ==> true
console.log(a != b); // ==> false

// 1부터 10까지 더하는 할당연산자
let sum = 0;
for (let i = 1; i <= 10; i++) {
  // sum = sum + i;
  sum += i;
  console.log(`${i} 번째 sum = ${sum}`);
}

let btn = document.querySelector('#btn');
let emailEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');

btn.addEventListener('click', function () {
  let email = emailEl.value;
  let password = passwordEl.value;
  // console.log('emial: ', email === '');
  // console.log('password: ', password);
  password = null;
  if (password && password.length === 8) {
    console.log('성공');
  } else {
    console.log('실패');
  }

  if (email === '' || validateEmail(email)) {
    console.log('이메일이 유효하지 않습니다.');
  } else if (!password) {
    console.log('비밀번호를 입력해주세요!');
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    console.log('비밀번호는 8~16자 입니다.');
  } else {
    console.log('로그인 성공');
  }
});

function validateEmail(email) {
  // ....
  // 5분
  return true;
}

let number = 9;
let message = number % 2 === 1 ? '홀수 입니다.' : '짝수 입니다.';

// if (number % 2 === 1) {
//   message = '홀수 입니다.';
// } else {
//   message = '짝수 입니다.';
// }
console.log(message);
