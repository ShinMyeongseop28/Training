'use strict';
let text = '';
/*
console.log(1 + 2);
console.log('javascript' + 'hello');
console.log('javascript' + 2);
*/

for (let i = 0; i < 10; i++) {
  if (i == 3) {
    // continue;
    break;
  }
  text = text + i;
  // console.log(`text[${i}]: `, text);
}
console.log(text);
