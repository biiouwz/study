// let person={
// 	name:"박수진",
// 	age:20,
// 	height:160
// };

// let arr=Object.keys(person);
// for (let i=0; i<arr.length; i++){
// 	console.log(arr[i]+":"+person[arr[i]]);
// };

// let person={
// 	name:"박수진",
// 	age:20,
// 	height:160
// };

// console.log(Object.values(person));

// let person={
// 	name:"박수진",
// 	age:20,
// 	height:160
// };

// console.log(Object.entries(person));

// let person={
// 	name:"박수진",
// 	age:20,
// 	height:160
// };

// let arr = Object.values(person);
// for (let i=0; i<arr.length; i++){
// 	console.log(arr[i]);
// };

// let person={
// 	name:"박수진",
// 	age:20,
// 	height:160
// };

// let arr = Object.entries(person);
// for (let i=0; i<arr.length; i++){
// 	console.log(arr[i][0]+":"+arr[i][1]);
// };

// const fruits = ["사과", "바나나", "포도"];

// for (let index in fruits) {
//     console.log(index);
// }

// const person = {
//     name: "박수진",
//     age: 20
// };
// for (let key in person) {
//     console.log(key);
// }

// const fruits = ["사과", "바나나", "포도"];

// fruits.forEach((fruit, index, array) => {
//     console.log(index + " : " + fruit);
//     console.log(array);
// });

// const users = [
//     { name: "철수", age: 20 },
//     { name: "영희", age: 21 },
//     { name: "민수", age: 22 }
// ];

// users.forEach((user) => {
//     console.log(user.name);
// });

/*결과: 
철수 
영희 
민수*/

// let colors=[
// 	{id:1, color:'green'},
// 	{id:2, color:'blue'},
// 	{id:3, color:'purple'}
// ];

// let idx=colors.findIndex((elm) => elm.color ==='purple');

// console.log(idx);

// let colors=[
// 	{id:1, color:'green',
// 	 id:2, color:'blue',
// 	 id:3, color:'purple'}
// ];

// let filterArray=colors.filter((elm, idx, array)=> elm.id>1)

// console.log(filterArray);

// const fruits = ["사과", "바나나", "포도", "딸기", "수박"];

// const result = fruits.slice(1, 4);

// console.log(result);
// //결과 ["바나나", "포도", "딸기"]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const result = arr1.concat(arr2);

// console.log(result);

// //결과 [1, 2, 3, 4, 5, 6]

// const fruits = ["사과", "바나나", "포도"];

// const result = fruits.join();

// console.log(result);

// //사과,바나나,포도 기본적으로 , 가 들어가고 join 안에 원하는 구분자를 넣을 수 있음

// const numbers = [10, 20, 30, 40];

// const result = numbers.reduce((sum, num) => {
//     return sum + num;
// }, 0);

// console.log(result);

// //결과 100

// //1.
// const fruits= ["사과","바나나","포도","딸기"];

// for (let i of fruits){
//     console.log(i);
// }

// //2.
// const person= {
//     name:"박수진",
//     age:20,
//     height:160
// };

// for (key in person){
//     console.log(key);
// }

// //3.
// const students= [
//     { name:"철수", age:20 },
//     { name:"영희", age:21 },
//     { name:"민수", age:22 }
// ];

// students.forEach((student, index, array) => {
//     console.log(student.name);
// });

// //4.
// const numbers= [1,2,3,4,5];

// const result = numbers.map((num) => {
//     return num * 2;
// });

// console.log(result);

// //5.
// const fruits= ["사과","바나나","포도","딸기"];

// console.log(fruits.at(2));
// console.log(fruits.at(-1));

// //6.
// const colors= ["green","blue","purple"];

// console.log(colors.includes("blue"));
// console.log(colors.includes("yellow"));

// //7.
// const colors= ["green","blue","purple"];

// console.log(colors.indexOf("purple"));
// console.log(colors.indexOf("yellow"));


// //8.
// const colors= [
//     { id:1, color:"green" },
//     { id:2, color:"blue" },
//     { id:3, color:"purple" }
// ];

// let idx=colors.findIndex((elm) => elm.color ==='purple');
// console.log(idx);

// //9.
// const students= [
//     { name:"철수", score:90 },
//     { name:"영희", score:50 },
//     { name:"민수", score:80 },
//     { name:"수진", score:40 }
// ];

// let passStudents=students.filter((elm, idx, array)=> elm.score>60);
// console.log(passStudents);

// //10.
// const fruits= ["사과","바나나","포도","딸기","수박"];

// const result=fruits.slice(1,4);
// console.log(result);

// //11.
// const classA= ["철수","영희"];
// const classB= ["민수","수진"];

// const students=classA.concat(classB);
// console.log(students);

// //12.
// const fruits= ["사과","바나나","포도"];

// const result=fruits.join(' - ');
// console.log(result);

// //13.
// const numbers= [10,20,30,40,50];

// const result = numbers.reduce((sum, num) => {
//     return sum + num;
// }, 0);
// console.log(result);

// let colors={
// 	c1: 'green',
// 	c2: 'blue',
// 	c3:'purple'};

// let {c1:color1, c2:color2, c3:color3}=colors;//이 부분에서 코드를 추가해서 과제를 해결해보세요!

// console.log(color1);
// console.log(color2);
// console.log(color3);

// const color1=["red","orange","yellow"];
// const color2=["blue", "navy","purple"];

// const rainbow=[...color1,"green",...color2];

// console.log(rainbow);

const student = {
  name: "김민수",
  age: 18
};

// spread 문법을 사용하여 student2026을 완성하세요.
const student2026 = {
  ...student,
  grade:3,
  classNumber:1
};

console.log(student2026);

const printNumbers = (first, second, ...others) => {
  console.log(first);
  console.log(second);
  console.log(others);
};

printNumbers(10, 20, 30, 40, 50);
const {first, second, ...rest} = printNumbers;
console.log(rest);

// 출력 결과
// 10
// 20
// [30, 40, 50]