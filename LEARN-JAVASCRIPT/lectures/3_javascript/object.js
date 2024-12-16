'use strict';

// 객체 리터럴 문법
/*
const person = {
  name: '짐코딩',
  age: 25,
};
person.job = '개발자'; // 현업에서는 객체를 생성할 때 프로퍼티도 지정해주면 좋다.
객체 생성자 문법
const person = new Object();
person.name = '짐코딩'
person.age = 40

const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'health'],
  hello: function () {
    alert('Hello!');
  },
  greeting: function () {
    alert('Hi!');
  },
  hobby: {
    name: 'programing',
    alert: function () {
      alert('programing');
    },
  },
};
console.log(person.name[0]);
console.log(person.name[1]);
person.hello();
console.log(person.hobby.name);
console.log(person.hobby.alert());
person['name'][0] = '값변경';
console.log(person['name'][0]);
console.log(person['name'][1]);
person['hello']();
console.log(person['hobby']['name']);
person['hobby']['alert']();
delete person.name;
delete person['age'];
console.log(person);

function printPerson({ hobby, name, age }) {
  console.log(
    `제 이름은 ${name}이며, 나이는 ${age}살 입니다.그리고 취미는 ${hobby} 입니다.`
  );
}
function createPerson(name, age, hobby) {
  return {
    name, // name: name,
    age, // age: age,
    hobby, // hobby: hobby,
  };
}
*/

// ES5
/*
function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}
const person = new Person('짐코딩', 20, '헬스');
printPerson(person);

// ES6
class Person {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
}
const person = new Person('짐코딩', 20, '헬스');
printPerson(person);

const person1 = createPerson('김길동1', 1, '아무거나');
const person2 = createPerson('김길동2', 2, '아무거나');
const person3 = createPerson('김길동3', 3, '아무거나');
const person4 = createPerson('김길동4', 4, '아무거나');
printPerson(person1);
printPerson(person2);
printPerson(person3);
printPerson(person4);
*/

// const person = {
//   name: '짐코딩',
//   age: 10,
//   hobby: '헬스',
// };
// printPerson(person);

// const { hobby, name, age } = person;
// console.log('name: ', name);
// console.log('age: ', age);
// console.log('hobby: ', hobby);

const fruits = ['사과', '포도', '딸기'];
const [a, b] = fruits;
console.log(a);
console.log(b);

let username = '짐코딩';
console.log(username);
changeName(username);
console.log(username);

function changeName(name) {
  name = '홍길동';
  console.log(name);
}
console.log('======');

const person1 = {
  name: '짐코딩',
  age: 25,
};
console.log('name2' in person1);
if ('name2' in person1) {
  console.log('존재합니다.');
} else {
  console.log('존재하지 않습니다.');
}
// let person2 = { ...person1 };

let person2 = Object.assign({}, person1);
person2.name = '홍길동';
console.log(person1);
console.log(person2);

person1.name = '홍길동'; // const지만 주소값을 활용해서 name을 수정
person1 = { job: '개발자' }; // const의 주소값이 바뀌므로 불가

console.log(person);
changePersonName(person);
console.log(person);
function changePersonName(person) {
  person.name = '홍길동';
  person.age = 60;
}

const person = {
  name: '짐코딩',
};
console.log(person.hasOwnProperty('name')); // true
console.log(Object.hasOwn(person, 'name')); // true

console.log(person.name2);
if (person.name2) {
  console.log('true~~');
}
