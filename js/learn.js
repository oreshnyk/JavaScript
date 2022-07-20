// Example 1 - Базовые математические операторы

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = grapes - apples;
// console.log(diff)

// Example 2 - Комбинированные операторы

// let students = 100;
// students += 50;
// students += 50;
// console.log(students);

// Example 3 - Приоритет операторов

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. 
// значения переменной value.Используй методы Math.floor(), Math.ceil() и Math.round().
// Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.5;

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// let weight = '88,3';
// let height = '1.75';

// const bmi = ;

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// let rainForests = ["Amazon", "Borneo", "Cerrado", "Congo"];
// rainForests.splice(0, 2);
// console.log(rainForests);

// class Animal {
//     static belly = [];
//     eat() { Animal.belly.push("food"); }
// }

// let a = new Animal();
// a.eat();
// console.log(/);

// let rainForestAcres = 10;
// let animals = 0;
// while (rainForestAcres < 13 || animals <= 2) {
//     rainForestAcres++
//     animals += 2;
// }
// console.log(animals);

// var sound = "grunt";
// var bear = { sound: "roar" };

// function roar() {
//     console.log(this.sound);
// }

// class RainForest {
//     static minimumRainFall = 60;
// }

// let congo = new RainForest();
// RainForest.minimumRainFall = 80;
// console.log(congo.minimumRainFall);

// let animals = ["eagle", "ospey", "salmon"];
// let key = animal => animal === "salmon";

// if

// // obj.a?.b
// const a = { x: 1 };
// const b = { x: 1 };

// var pokedex = ["Snorlax", "Jigglepuff", "Charmander", "Squirtle"];
// pokedex.pop();
// console.log(pokedex.pop());

// 3 === '3';
// [3] == [3];
// 3 == '3';
// 3 != '3';

// const x = 6 % 2;
// const y = x ? 'One' : 'Two';
// console.log(y);

// var flagsJSON = '{"countries": [' + '{"country": "Ireland", "lag"}]}
// var cat = { name: "Athena" };
// function swap(feline) {
//     feline.name = "Wild";
//     feline = {
//         name: "Tabby"
//     };
// }

// swap(cat);
// console.log(cat.name);

// for (let i = 0; i < 10; i += 1) {
//     console.log(i);
//     if (i === 5) {
//         break;
//     }
// }

// if (-1 + 1) {
//     console.log('ásd')
// }

// const userInput = Number(prompt('Gime me number'));
// if (!isNaN(userInput)) {
//     if (userInput > 0) {
//         console.log('Positive number');
//     } else if (userInput < 0) {
//         console.log('Negative number');
//     } else {
//         console.log('Zero');
//     }
// }

// const hours = 22;
// if (hours < 17) {
//     console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//     console.log("Expires");
// } else {
//     console.log("Overdue")
// }

// const daysUntilDeadLine = 5;

// if (daysUntilDeadLine === 0) {
//     console.log("Today");
// } else if {

// }
// let pricePerDroid = prompt();
// let orderedQuantity = prompt();
// let customerCredits = prompt();


// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
//     if (totalSpent >= 50000) {
//         discount === GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount === SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount === BRONZE_DISCOUNT;
//     } else {
//         discount === BASE_DISCOUNT;
//     }
//     // Change code above this line
//     return discount;
// }

// console.log(getDiscount(3000));
// let message = prompt();

// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line

//     /// Change code above this line
//     return result;
// }

// 1. vars

// 2 
// const message = "Curabitur ligula sapien";
// const maxLength = 16;

// function formatMessage(message, maxLength) {
//     let result;

//     if (message.length > maxLength) {
//         message = message.slice(0, maxLength);
//         result = message += '...';
//     } else {
//         result = message;
//     }
//     return result;
// }
// console.log(formatMessage(message, maxLength));
// const userInput = (prompt("Дай сообщение"));
// const message = userInput.toLowerCase();

// function checkForSpam(message) {
//     let result;
//     // Change code below this line
//     const normalizedMessage = message.toLowerCase();
//     const blacklistedWord1 = 'spam';
//     const blacklistedWord2 = 'sale';
//     console.log(normalizedMessage);
//     if (normalizedMessage.includes(blacklistedWord1)) {
//         result = true;
//         console.log(message);
//     } else if (normalizedMessage.includes(blacklistedWord2)) {
//         result = true;
//     } else {
//         result = false;
//         console.log(message);
//     }
//     // Change code above this line
//     return result;
// }

// console.log(checkForSpam("sale"));
// // console.log('message');

// Setup
// const myArray = [["John", 23], ["cat", 2]];

// // Only change code below this line
// myArray.push(["happy", "joy"]);

// // 
// const myList = [["orange", 3]["cabbage", 1]["candys", 10]["muffin", 7]["sugar", 1]];

// console.log(myList);

// function funcionWithArgs(a, b) {
//     console.log(a + b);
// }

// funcionWithArgs(5, 5);


// greet()

// const greet = function()


// tasks from 18/06 with mentor
// Напишите 2 цикла:
// - цикл, который выводит в консоль числа от max до min по убыванию
// - цикл, который выводит в консоль все четные числа от min до max
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {
//     console.log(i);
// }
// for (let i = min; i <= max; i++) {
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }


// Task 2
// Запитайте у користувача якого він року народження. Поточний рік візьміть за константу.
// Виведіть через alert повідомлення для юзера з інформацією, яка вказує на його вік.
// Наприклад: "Ваш вік - хх років"
// Для автоматичного визначення поточного року можете використати слідуючий функціонал:
// const date = new Date();
// console.log(date.getFullYear());

// const currentYear = 2022;
// const birthYear = prompt('At what year you was born?')
// console.log(Number(birthYear))
// console.log(alert(`Ваш вiк: ${currentYear-(Number(birthYear))}`))

// Task 3
// Реалізуйте result
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const result = a.splice(3, 3);
// console.log(result); // ["a", "b", "c", "a", "b", "c", "g", "h"]

// function checkStorage(available, ordered) {
//     // Change code below this line

//     if (ordered === 0) {
//       return "Your order is empty!";
//     } else if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     } else {
//       return "The order is accepted, our manager will contact you";
//     }
//     // Change code above this line
// }


// console.log(checkStorage(150, 0));

// function getExtremeElements(array) {
//     // Change code below this line
//     const e = array.length - 2;
//     const newArray = array.splice(1, e)
//     return array;
//     // console.log(e);
//     // console.log(array);
//     // console.log(newArray);
//     // console.log(array.length);
//     // console.log(newArray.length);
//     // return array;
//     // Change code above this line
//   }


// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// function calculateEngravingPrice(message, pricePerWord) {
//   let result;
//   message = message.split(" ");
//   result = message.length * pricePerWord;
//   return result;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// function slugify(title) {
//   // Change code below this line
//   let result;
//   const lowTitle = title.toLowerCase();
//   result = lowTitle.split(" ").join("-");
//   return result;
//   // Change code above this line
// }

// slugify("How to become a JUNIOR developer in TWO WEEKS");

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2, 5);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let newArray;
//   newArray = firstArray.concat(secondArray);
//   console.log(newArray.slice(0, maxLength));
//   return newArray.slice(0, maxLength);
//   // console.log(smashArray);
//   // let newArrayLength = smashArray.length + maxLength;
  
  
//   // console.log(transformedArray);
//   // return transformedArray;
//   // Change code above this line
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);


// function calculateTotal(number) {
//   // Change code below this line
//     for(let i = 0; i <= number; i += 1) {
//       // console.log(i);
//       let result = (i*(i+1)/2);
//       let formula = (number*(number+1)/2);

//       // console.log(result);
//       // console.log(formula);
//       if (result === formula){
//         return formula;
//       }
//       // if (result === (i*(i+1)/2)) {
//       // console.log(result);
//       // return result;
//        // console.log(i);
//       // }
//     }
//    // Change code above this line
// }

// calculateTotal(7); 

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = ;) { // Change this line
//   const fruit = fruits[]; // Change this line
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i <order.length; i += 1){
//     total += order[i];
//   }
//   console.log(total);
//   // Change code above this line
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);

// function findLongestWord(string) {
//   var strSplit = str.split(' ');
//   var longestWord = 0;
//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord){
// 	longestWord = strSplit[i].length;
//     }
//   }
//   return longestWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function findLongestWord(string) {
//   const stringSplit = string.split(" ");
//   let longestWord = stringSplit[0];

//   for (const word of stringSplit) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = min; i <= max; i += 1)
//     numbers.push(i);
//   // Change code above this line
//   // console.log(min, max);
//   // console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(14, 17);

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (const number of numbers){
//     if (number > value) {
//       newArray.push(number);
//     }
//   }

//   return newArray;
//  // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const commonElements = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     for(let j = 0; i < array2.length; j += 1) {
//       if(array1[i] === array2[j]) {
//         commonElements.push();
//       }
//     }
//   }
//   console.log(commonElements);
//   return commonElements;
//  // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]);

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// function includes(array, value) {
//   // Change code below this line
  
//   // Change code above this line
// }
// includes([1, 2, 3, 4, 5], 3);

// const userA = {
//   username: "mango",
//   age: 20
// };

// const userB = userA;
// userB.age = 30;
// console.log(userA.age, userB.age);



// Модуль 3. Занятие 1. Объекты
// task 1

// const user = {
//   name: 'mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// console.log(user.hobby);

// user["mood"] = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// console.log('user', user);

// const userKeys = Object.keys(user);
// console.log('userKeys', userKeys)

// for (const key of userKeys) {
//   console.log(`${key}; ${user[key]}`);
// }


// TASK 2

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// 1st resolution
// const values = Object.values(salaries);
// let sum = 0;
// for (const value of values) {
//   sum += value;
// }
// console.log(sum);


// task 3 


// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) { 
//   const stone = stones.find(funcion (stone) { return stone.name === stoneName});
//   const price = stone.price;
//   const quantity = stone.quantity;
//   return { totalPrice: price * quantity, price, quantity }
// }

// console.log(calcTotalPrice(stones, 'Сапфир'));


// task 4


// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };

// const user = {
//     email: "asd",
//     age: 20,
//     location: { lat: 10, lon: 20 },

// };
// const { location: { lat, lon } } = user;
// console.log();

// function foo({a, b, c, ...props}) {
//     console.log(props);
// }

// foo({ a:1, b: 2, c: 3, d: 4, e: 5});

// const profile = {
// username: "Mango",
// age: 2
// };

// const profileUpdate = {
//     username: ""
// }

// const testObj = {
//     a: undefined
// }

// console.log("a" in testObj);
// const { a = 10 } = testObj;

// console.log(a);


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.owner.tags;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags.length;

//   console.log(ownerName);
//   console.log(ownerPhone);
//   console.log(ownerEmail);
//   console.log(numberOfTags);
//   console.log(firstTag);
//   console.log(lastTag);
//   // Change code above this line
  

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//     [emailInputName]: ,
//     [passwordInputName]: ,
//   // Change code above this line
// };

// console.log(credentials.email);
// console.log(credentials.password);

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);
//   // Change code below this line
// //   const keys = Object.keys(apartment);
//   for (const keys in apartment) {
//     // console.log(keys);
//     console.log(values);
//     // console.log(apartment[keys]);
//   }

// console.log(keys);
// console.log(values);


// quiz 11/41
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }


// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line

//     // Change code above this line
//     return propCount;
// }

// propCount({})
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
  
//   for ( const key of values) {
//     values.push(values[key]);
//   }
//   for (const key in apartment) {
//     values.push(apartment[key]);
//   }


// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
  
//     const keys = Object.keys(object);
  
//     for (const key of keys) {
//       propCount += 1;
//     }
  
//     return propCount;
//     // Change code above this line
//   }
  

//   countProps({})


// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//         for (const key of Object.keys(salaries)) {
//             totalSalary += salaries[key];
//         }
//     // Change code above this line
//     return totalSalary;
// }

// // countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));


// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   let highTemperaturesValues = 0;
//   highTemperaturesValues = Object.values(highTemperatures);
//   console.log(Object.values(highTemperatures));
//   // Change code below this line
//   const { yesterday, today, tomorrow } = Object.values(highTemperatures);
//   console.log(highTemperatures);
//   for (const highTemperature of highTemperaturesValues) {
//       highTemperaturesValues += Object.values(highTemperatures);
//   }
// //   console.log(highTemperaturesValues);
// //   return highTemperaturesValues;
//   // const yesterday = yesterday;
//   // const today = today;
//   // const tomorrow = tomorrow;
  
//   // Change code above this line
//   let meanTemperature = 0;
//   meanTemperature = highTemperaturesValues / 3;
  

//   console.log(meanTemperature);


//  ПРИМЕР ДЕСТРУКТОРИЗАЦИИ С ВЛОЖЕННОСТЬЮ

// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
  
//   // const highToday = forecast.today.high;
//   // const lowToday = forecast.today.low;
//   // const todayIcon = forecast.today.icon;
  
//   // const highTomorrow = forecast.tomorrow.high;
//   // const lowTomorrow = forecast.tomorrow.low;
//   // const tomorrowIcon = forecast.tomorrow.icon;
  
//   const { 
//     today: {
//       high: highToday,
//       low: lowToday,
//       icon: todayIcon = 
//       "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },
//     tomorrow: {
//       high: highTomorrow,
//       low: lowTomorrow,
//       icon: tomorrowIcon = 
//       "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },
//   } = forecast;

// Change code below this line
// Change code below this line


// function calculateMeanTemperature(forecast) {

//     const { 
//       today: {
//         todayLow,
//         todayHigh,
//       },
//       tomorrow: {
//         tomorrowLow,
//         tomorrowHigh
//       },
//     } = forecast;
//     console.log(forecast);
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));


// Change code below this line
// Change code below this line
// function add(...args) {
//     const sum = 0;
//     for(const arg of args) {
//         sum += arg;
        
//     }
//     return sum;
//     // Change code above this line
// }

// Change code below this line
// function addOverNum(a,...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (a < arg) {
//             total += arg;
//         }
//     }
//     console.log(total);
//     return total;
//     // Change code above this line
// }


// Change code below this line
// function findMatches(array, ...args) {
//     const matches = []; // Don't change this line
//     for (const arg in args) {
//         if(array.includes(arg)) {
//             matches.push(arg);
//         }
//     }
//     console.log(matches);
//     // Change code above this line
//     return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); 
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); 
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); 
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));


// const bookShelf = {
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//         return "Returning all books";
//     },
//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`;
//     }
// };



// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (potion.name === newPotion.name) {
//             return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//     },
//     // remove
//     removePotion(potionName) {
//         let potionIndex = -1;
//         for (i = 0; i < this.potions.length; i += 1) {
//             if (this.potions[i].name === potionName) {
//                 potionIndex = i;
//                 break
//             }
//         }
//         const potionIndex1 = this.potions.indexOf(potionName);
//         if (potionIndex === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//         }
//         this.potions.splice(potionIndex, 1);
//     },
//     // remove done
//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//         if (potion.name === oldName) {
//             potion.name = newName;
//             return
//         }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
// };