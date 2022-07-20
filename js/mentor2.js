// MODULE-2: МАСИВИ та ФУКЕЦІЇ
// ===========================
// PART - 1

// // const a = {};
// const b = {};

// const c = {
//     d:1,
//     e:2,
// };

// c[a] = 3;
// c[b] = 4;

// console.log(c);

// const obj = {
//     name: "Max",
//     age: 56,
// };

// obj.age

// "12345678910".indexOf;

// const arr = [1,2,3];

// const length = arr.

// arr.push(6);
// console.log(arr);

// Реалізуйте result
// const a = ['a', 'b', 'c'];
// const b = [1, [2, 3]];
// const c = 0;

// const result = [].concat(a, c, ...b);
// // test data from variables
// // console.log(a);
// // console.log(b);
// // console.log(c);
// // test a b c
// console.log(result); // ['a', 'b', 'c', 0, 1, 2, 3]

// Реалізуйте result
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// const deleted = a.splice(3, 3);
// const tail = a.splice(-2);
// // test
// console.log(a);
// console.log(deleted);
// // test 
// let result = a.concat(a, tail);

// console.log(result); // ["a", "b", "c", "a", "b", "c", "g", "h"]

// task 

// У нас есть объект, в котором храняться зарплаты 
// команды.
// Напишите код для сумирования всех зарплат и 
// сохраните его результат в переменной sum.
// Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };

// // My solution
// const values = Object.values(salaries);
//     let sum = 0;
//     for (const value of values) {
//         sum += value;
// }   
// console.log(sum);

// // solution from blended member
// let sum = 0;
// if (Object.keys(salaries).length) {
//     console.log(sum);
// }

// const arr = Object.values(salaries);
//     // console.log(arr);
//     sum = arr.reduce((acc, salary) => {
//         return acc + salary
//     }, 0)
//     console.log(sum);
// // solution from blended member


// // task Vadim
// // Об'єднати два обєкти між собою:
// //
// const users = [
//     { name: "Victor", score: 20 },
//     { name: "Mario", score: 10 },
//     { name: "Tatiana", score: 30 },
// ];

// const moreUsers = [
//     { name: "Laura", score: 50 },
//     { name: "Jasmine", score: 70 },
//     { name: "Peter", score: 60 },
// ];

// const allUsers = [...users, ...moreUsers];

// console.log(allUsers);


// // task Alena
// // Создайте объект calculator с тремя методами:
// // - read(a, b) - принимает два аргумента и сохраняет 
// // их как свойства объекта.
// // - sum() - возвращает сумму сохраненных значений.
// // - mult() - переумножает сохраненные значения и 
// // возвращает результат.

// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mult() {
//         return this.a * this.b;
//     },
// };

// calculator.read(3, 5);
// calculator.sum();
// calculator.mult();

// console.log(calculator.mult());

