// // 5/48

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
  
//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //   totalPrice += orderedItems[i];
//     // }
  
//     // forEach
  
//     orderedItems.forEach(function (number, index) {
//       totalPrice += orderedItems[index];
//     });
  
//     // Change code above this line
//     // console.log(totalPrice);
//     return totalPrice;
//   }

//   console.log(calculateTotalPrice([12, 85, 37, 4]));

// // // 6/48
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     //   }
//     // }

//     // forEach

//     numbers.forEach(function (number, index) {
//         if (numbers[index] > value){
//             filteredNumbers.push(numbers[index]);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// // // 7/48

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //     if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //     }
//     // }

//     // forEach

//     firstArray.forEach(function (number, i){
//         if (secondArray.includes(firstArray[i])) {
//             commonElements.push(firstArray[i]);
//         }
//     });

//     return commonElements;
//     // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));


// // // 10/48

// // Change code below this line
// const calculateTotalPrice = ((orderedItems) => {
//     let totalPrice = 0;

//         orderedItems.forEach((item) => {
//             totalPrice += item;
//     });

//     return totalPrice;
// });
//   // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// // 13/48

// const changeEven = (numbers, value) => {
//     // Change code below this line
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //     if (numbers[i] % 2 === 0) {
//     //         numbers[i] = numbers[i] + value;
//     //     }
//     // }

//     const newArray = [];

//     // for (let i = 0; i < numbers.length; i +=1) {
//     //     if (numbers[i] % 2 === 0) {
//     //         newArray[i] = numbers[i] + value;
//     //     }
//     // }
//     // return newArray;
//     // forEach
//         numbers.forEach((item, i) => {
//             if (numbers[i] % 2 === 0) {
//                 newArray.push(numbers[i] + value);
//             }
//             return newArray;
//         });
//     // Change code above this line
// }


// // // 13/48

// const changeEven = (numbers, value) => {
//     // Change code below this line
//     const newArray = [];
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] % 2 === 0) {
//     //     numbers[i] = numbers[i] + value;
//     //   }
//     // }
//         numbers.forEach(function(element, i) {
//         if ((numbers[i] % 2 === 0)) {
//             newArray.push(element + value)
//         }
//         return newArray;
//     });
//     // Change code above this line
// }


// // log test

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));

// // // 19/48

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(numbers);
// console.log(evenNumbers);
// console.log(oddNumbers);

// // console.log(17 % 2 === 0);

// // const test = numbers


// //  35/48

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player, game) => {
//   return total + player.playtime / player.gamesPlayed;
// },0);

// console.log(totalAveragePlaytimePerGame);


// // 36/48
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // const calculateTotalBalance = users => users.reduce((total, users) => {
// //   return total + users.balance;
// // },0);

// // console.log(calculateTotalBalance);

// const getTotalFriendCount = users => users.reduce((total, users) => {
//     return total + users.friends;
// },0);

// console.log(getTotalFriendCount);

// // 38/48 sort()
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = releaseDates;

// const alphabeticalAuthors = authors;

// // // // 41/48 
// // // Example
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);


// // TASK
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => 
//   firstBook.author.localeCompare(secondBook.author));

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => 
// secondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
//   );

// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
//   );

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// const foo = () => console.log(this) {
//   cinst 
//   () {
//     console.log(this)
//   }
// }


// // // 42/48
// // Change code below this line

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const sortByAscendingBalance = users => {
//   const ascendingBalance = [...users].sort(
//     (firstUser, secondUser) => secondUser.balance - firstUser.balance 
//   );
//     return ascendingBalance; 
// };
// // Change code above this line
// console.log(users);
// console.log(sortByAscendingBalance());


// // 43/48

// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friend.length - a.friend.length); 
// };
// console.log(users);
// console.log(sortByDescendingFriendCount);



// // 47/48

// const getSortedFriends = users => {
//   return [...users]
//   .flatMap(users => users.friends)
//   .filter((friend, index) => users.indexOf(friend) === index)
//   .sort((a, b) => a.localeCompate(b))
// };

// console.log(getSortedFriends);


// // // Module 5 - Autocheck - 1/20

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));


// // 2/20

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// // // 3/20
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));


// // // 5/20
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;


// console.log(parent.hasOwnProperty("surname"));
// console.log(parent.hasOwnProperty("heritage"));
// console.log(child.hasOwnProperty("name"));
// console.log(child.hasOwnProperty("age"));
// console.log(child.hasOwnProperty("surname"));
// console.log(child.hasOwnProperty("heritage"));
// console.log(parent.isPrototypeOf(child));

// // // 5/20

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(ancestor);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line


// console.log(`Is prot of parent: ${ancestor.isPrototypeOf("parent")}`);
// console.log(`Is prot of child: ${parent.isPrototypeOf("child")}`);
// console.log(`Ancestor has own surname: ${ancestor.hasOwnProperty("surname")}`);
// console.log(`Parent has own surname: ${parent.hasOwnProperty("surname")}`);
// console.log(`Child has own surname: ${child.hasOwnProperty("surname")}`);
// console.log(`Ancestor has own heritage: ${ancestor.hasOwnProperty("heritage")}`);
// console.log(`Parent has own heritage: ${parent.hasOwnProperty("heritage")}`);
// console.log(`Child has own heritage: ${child.hasOwnProperty("heritage")}`);


// foo();


// // Створи функцію, яка проводить пошук обєкта
// // в масиві по id та виводить його в консоль.
// //
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// const foo = (id) => {
//   return users.find(e => e.id === id);
// };

// console.log(foo(2));


// // // Виведи в консоль стрічку для кожного єлемента 
// // масива слідуючого типу: "Имя - позиция в массиве 
// // Х и сам массив"
// //
// const robots = ["Bender", "Awesom-O", "Johnny 5"];

// const foo = (robots) => { 
//   // return robots.map( 
//   //     (e, index, arr) => `${e} - ${index} ${JSON.stringify(arr)}` 
//   //   ).join(", ") 
  
// }

//   console.log(foo(robots));
//   console.log(robots);



// // // Напиши ф-цію positiveSum, яка приймає масив чисел та повертає їх суму.
// // // Але рахуватись мають лише позитивні числа!!!

// const positiveSum = (arr) => {
//   // const positive = arr.filter(el => el> 0);
//   // return positive.reduce((acc, element) => acc + element , 0);

//   // optimized
//   return arr.reduce((acc, element) => 
//   // {
//     // if(element > 0){
//     //   acc += element;
//     // }
//     // return acc;

//     element > 0 ? acc + element : acc
// // }
//     ,0);
// };

// console.log(positiveSum([2, 4, 6, 8]));
// console.log(positiveSum([0, -3, 5, 7]));

// positiveSum([2, 4, 6, 8]); // 20
// positiveSum([0, -3, 5, 7]); // 12



// ======

// // // Відсортуй обєкти по збільшеню та зменшеню score
// //
// const users = [
//   { name: "Victor", score: 20 },
//   { name: "Mario", score: 10 },
//   { name: "Tatiana", score: 30 },
// ];

// function usersSortedByScoreAsc() {
//   return [...users].sort((a, b) => a.score - b.score);
// }

// function usersSortedByScoreDesc() {
//   return [...users].sort((a, b) => b.score - a.score);
// }

// console.log(usersSortedByScoreAsc(users));   // [{name: "Tatiana", score: 30}, {name: "Victor", score: 20}, {name: "Mario", score: 10}]
// console.log(usersSortedByScoreDesc(users));  // [{name: "Mario", score: 10}, {name: "Victor", score: 20}, {name: "Tatiana", score: 30}]


// // // Напиши ф-цію, яка фільтрує масив та повертає елементи, окрім того, що був переданий в дану функцію в якості аргумента.
// //
// const animals = ["pigs", "goats", "sheep"];

// function userAnimal(item) {
//   return animals.filter((animal) => animal !== item)
// }

// console.log(animals);
// console.log(userAnimal("pigs"));

// userAnimal("pigs"); // ["goats", "sheep"]



// // // Створи функції, які:
// // // - знайдуть обєкт по найкращим score.
// // // - виведуть масив всіх score.
// // // - виведуть суму всіх score.
// //
// const users = [
//   { name: "Victor", score: 20 },
//   { name: "Mario", score: 10 },
//   { name: "Tatiana", score: 30 },
//   // { name: "Tatianaasda", score: 15 },
// ];

// // // знайдуть обєкт по найкращим score.
// function foo1() {
//   // // first try
//   // const newUsers = [...users].sort((a, b) => b.score - a.score);
//   // return newUsers[0];

//   // // second try
//     return users.reduce((acc, value) => {
//       return acc.score > value.score ? acc : value
//     })
// }

// // // виведуть масив всіх score.
// function foo2() {
//   return users.map(item => item.score);   
// }
// // // 
// function foo3() {
//   return users
//   .map(item => item.score)
//   .reduce((a, b) => {
//     return a + b;
//   })
// }

// console.log(foo1()); // { name: "Tatiana", score: 30 }
// console.log(foo2()); // [20, 10, 30]
// console.log(foo3()); // 60
// // console.log(value);


// // // Напишите две функции:
// // - letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает callback функцию
// // - greet(name) - коллбек, принимающий имя и логирующий в консоль строку "Привет <name>"
// // Реализуй проверку, что prompt не пустой

// letMeSeeYourName(greet); // Привет <name>

// function greet(name) {
//   console.log(`Привет ${name}`);
// }

// function letMeSeeYourName(callback) {
//   const givenName = prompt("Скажи имя")
//   if (givenName) {
//     callback(givenName)
//   } else {
//     console.log("Empty prompt");
//     letMeSeeYourName(callback);
//   } 
// }

// // =======================

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (Car.price > this.#MAX_PRICE){
//       console.log("Error! Price exceeds the maximum");
//     } else {
//       console.log("Success! Price is within acceptable limits");
//     }
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }
// // console.log(Car);
// console.dir(Car);
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(audi);
// console.log(bmw);
// console.log();
// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// // 20/20

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line
  blacklistedEmails = []

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };    
  
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklist(email) {
    return this.blacklistedEmails.push(email);
  }

  isBlacklisted = (email) => {
    
  }

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
