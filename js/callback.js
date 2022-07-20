// 27/06/2022  Модуль 4 - Занятие 7 - Коллбэки и стрелочные функции

// Kahoot Quiz

// function foo(callback) {
//     callback(10);
// }

// function logger(value) {
//     console.log(7);
//     console.log(value);
// }

// foo(logger)

// foo(logger(5));

// // Kahoot Quiz 7

// function f1() {
//     console.log(arg);
// }

// const f2 = () => {
//     console.log(arg);
// }

// f1(1,2)
// f2("a", "b")

// // Kahoot Quiz 8

// const foo = () => return "Mango";

// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-07.md

// Решение
// function createProduct(partialProduct, callback) {
//     const product = { id: Date.now(), ...partialProduct };
//     callback(product);
//   }

//   function logProduct(product) {
//     console.log(product);
//     // We can do
//     // return () => {
//     //     console.log(product);
//     // }
//   }

//   function logTotalPrice(product) {
//     console.log(product.price * product.quantity);
//   }

//   createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
//   createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// {
//     function foo1() {
//         return "foo2";
//     }

//     const foo2 = () => {
//         return "foo2";
//     }

// }

// console.log(foo1());
// console.log(foo2());



