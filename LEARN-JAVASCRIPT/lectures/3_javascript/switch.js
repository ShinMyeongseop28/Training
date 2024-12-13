let score = prompt('수학 점수를 입력하세요!');
let value = Math.floor(score / 10);
console.log(value);
switch (value) {
  case 10:
  case 9:
    console.log('A 학점 입니다.');
    break;
  case 8:
  case 7:
    console.log('B 학점 입니다.');
    break;
  case 6:
  case 5:
    console.log('C 학점 입니다.');
    break;
  default:
    console.log('D 학점 입니다.');
}
