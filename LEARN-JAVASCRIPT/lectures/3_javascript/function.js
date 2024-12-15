'use strict';

// 함수 선언식 (호이스팅 영향 O)
/*
function sayHello() {
  console.log('이름과 나이를 출력해주세요');
  console.log('이름: 홍길동, 나이: 25살');
} 

// 함수 표현식 (호이스팅 영향 X)
const sayHello = function (name, age) {
  console.log('이름과 나이를 출력해주세요');
  console.log(`이름: ${name}, 나이: ${age}살`);
};
sayHello('짐코딩', 20);
sayHello('김길동', 45);

function sum(num1 = 0, num2 = 0) {
  console.log('num1: ', num1);
  console.log('num2: ', num2);
  return num1 + num2;
}
let result = sum(5, 3);
console.log('result: ', result);
let result2 = sum(5);
console.log('result2: ', result2);
console.log('-------함수스코프-------');
function aFunc() {
  let name = '짐코딩';
  let age = 20;
  function bFunc() {
    let job = '개발자';
    console.log('bFunc name: ', name);
    console.log('bFunc age: ', age);
    console.log('bFunc job: ', job);
  }
  bFunc();
  console.log('aFunc name: ', name);
  console.log('aFunc age: ', age);
  // console.log('job: ', job);
}
aFunc();
console.log('-------즉시실행함수--------');
(function () {
  console.log('hello');
})();
*/

const hello = (name) => `Hello ${name}`;
const str = hello('짐코딩');
console.log(str);

let fruits = ['사과', '바나나', '딸기'];
fruits.forEach((item, index) => {
  console.log('item: ', item);
});
