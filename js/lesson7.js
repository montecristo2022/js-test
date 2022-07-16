// функция обратного вызова callback

// const fnA = function (message, callback) {
//     console.log(message)

//     console.log(callback)
//     callback(100);
// }

// const fnB = function (number) {

// console.log("это лог при вызове fnB", number)
// }

// fnA("hello world!", fnB)

// const doMath = function (a, b, callback) {
//     const result = callback(a, b)

//     console.log(result)
//  }

// doMath (2, 3)

// const onGetPositionSuccess = function (position) {
//     console.log('Это вызов onGetPositionSuccess');
//     console.log(position);
// };

// const onGetPositionError = function (error) {
//     console.log('Это вызов onGetPositionError');
//     console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );

// const callback = function () {
//     console.log('Через 5 секунд внутри колбека в таймауте');
// };

// console.log('В коде перед таймаутом');
// setTimeout(callback, 5000);
// console.log('В коде после таймаута');

// в консоли так потому что интерпритатор идет сверху вниз и выполняет коллбек только через 2000 милесекунд. а коллбек у нас это функция сверху
// В коде перед таймаутом
//  В коде после таймаута
// Через 2 секунды внутри колбека в таймауте

//  функция фильтр для фильтрации массива ( вернуть 2 массива, в одном числа больше трех, во втором числа меньше 4)

// const filter = function (array, test) {
//     const filteredArray = [];
//     for (const el of array) {
//         console.log(el);
//         const passed = (test(el))

//         if (passed) {
//             filteredArray.push(el)
//         }
//     }

//     return  filteredArray
// }

// const callback1 = function (value) {
//     return value >= 3;
// }

// const result1 = filter([1, 2, 3, 4, 5], callback1);

// console.log(result1)

// const callback2 = function (value) {
//     return value <=4
// }

// const result2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);

// console.log(result2)

// function greet(name, obj) {
//   return `Добро пожаловать ${name}, тут наша ${obj}.`;
// }

// // Вызываем функцию greet и выводим результат в консоль
// console.log(greet("Манго", "корзина")); // Добро пожаловать Манго.

// // Выводим функцию greet в консоль не вызывая её
// console.log(greet("киви", "добычна")); // ƒ greet() { return `Добро пожаловать ${name}.`; }

// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback, pizda) {
//   console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
//     callback(pizda)
// }

// registerGuest("Манго", greet, "Hui");

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

// домашка 4. задание 4. вариант 1

// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//         for (const pizza of this.pizzas) {
//             if (pizza === pizzaName) {

//                 console.log(onSuccess(pizzaName))

//             } else if (pizza !== pizzaName) {

// console.log(onError())

//             }
//         }
//     },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }

//     return onError(
//       There is no pizza with a name ${pizzaName} in the assortment.
//     );
//   },
// };

/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

// const myLib = {
//     value: 0,
//     add(num) {
//         myLib.value += num

//     }

// }

// myLib.add(7)

// console.log(myLib.value)

// стрелочная функция

// const add = function (a, b, c) {
//     return a + b + c;
// }

// console.log(add(5, 10, 15))

// const Addarrow = (a, b, c) => a + b + c;

// console.log(Addarrow(20, 30, 40))

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Mango", function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Poly", function notify(name) {
//   consle.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza(); //Значение переменной result получено с помощью вызова функции
// console.log(makePizza())
// const pointer = makePizza; // это ссылка на функцию makePizza
// console.log(makePizza)

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function test(pizzaName) {
//   return ` ${pizzaName} is ready.`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {

//     console.log(callback(pizzaName))

//   return callback(pizzaName);
// }

// makeMessage("Royal Grand", makePizza)
// makeMessage("Ultracheese", deliverPizza)
// makeMessage("paprika", test)

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Change code above this line
//   return totalPrice;
// }

// const numbers = [5, 10, 15, 20, 25]

// let total = 0;

// //index и array в данном случае не нужны

// numbers.forEach(function (number, index, array) {
//     console.log("number: ", number)

//     total += number
// })

// console.log(total)

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

// orderedItems.forEach(function (number) {

//     totalPrice += number
// })

//   // Change code above this line
//     console.log(totalPrice)
//   return totalPrice;
// }

// calculateTotalPrice([412, 371, 94, 63, 176])
// calculateTotalPrice([164, 48, 291])
// calculateTotalPrice([164, 48, 291])

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   // Change code above this line
//     console.log(filteredNumbers)
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4)
// filterArray([1, 2, 3, 4, 5], 5)
//  filterArray([12, 24, 8, 41, 76], 38)

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number)
//         }
// })

//   // Change code above this line
//     console.log(filteredNumbers)
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4)
// filterArray([1, 2, 3, 4, 5], 5)
//  filterArray([12, 24, 8, 41, 76], 38)

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }
// console.log(commonElements)
//   return commonElements;
//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4])
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
// getCommonElements([1, 2, 3], [10, 20, 30])

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//     firstArray.forEach(function (number) {
//         if (secondArray.includes(number)) {
//    commonElements.push(number)
// }
// })

// console.log(commonElements)
//   return commonElements;
//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4])
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
// getCommonElements([1, 2, 3], [10, 20, 30])

// Change code below this line

// Change code below this line

//эту хуйню я написал
// const add = (a, b) => {
//    this.add2 = a + b
//     console.log(add2)
// }

// add(2, 3)

// const add = (...args) => {
//     console.log(args)
// }

// add(2, 3, 5, 7)

// const user = {
//     full: "Mango",
//     showName() {
//         console.log("this.full: ", this.full);
//     },

// }

// user.showName()

// const numbers = [6, 9, 12, 7]

// const doubleNumber = numbers.map(function (number) {
//     console.log(number)
//     // return number * 2
// })

// console.log(doubleNumber)

//filter
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает новый массив.
// Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
// Если коллбек вернул true элемент добавляется в возвращаемый массив.
// Если коллбек вернул false элемент не добавляется в возвращаемый массив.
// Если ни один элемент не удовлетворил условию, возвращает пустой массив.

// const numbers = [5, 10, 15, 20, 25, 30]

// //528 строка намбер это коллбек
// const filteredNumbers = numbers.filter(number => {
//     console.log(number)

//     return number > 15 || number < 7
// })
// console.log(filteredNumbers)

// //ниже оригинальный массив. он не изменен
// console.log(numbers)

// //тоже самое но со стрелками
// const numbers = [5, 10, 15, 20, 25, 30]

// const filteredNumbers = numbers.filter(number => number > 15 || number < 7)
// console.log(filteredNumbers)

// //ниже оригинальный массив. он не изменен
// console.log(numbers)

// const players = [
//     { id: "player-1", name: "mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "chelsey", timePlayed: 280, points: 48, online: true },
// ];

// const onlinePlayers = players.filter(player => player.online) ;
// console.table(onlinePlayers)

// //аналог записи выше
// const onlinePlayers1 = players.filter(({online}) => online) ;
// console.table(onlinePlayers1)

// const offlinePlayers = players.filter(player => !player.online);
// console.table(offlinePlayers)

// const bestPlayers = players.filter(player => player.points > 70)
// console.table(bestPlayers)






//find
//с помощью find получаем первый элемент, который удовлетворяет условие (в консоли 15)

// const numbers = [5, 10, 15, 20, 25, 30];

// const number = numbers.find(number => number > 10);
// console.log(number)








// const players = [
//     { id: "player-1", name: "mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "chelsey", timePlayed: 280, points: 48, online: true },
// ];

// const playerToFind = "player-3";
// const playerId = players.find(player => player.id === "player-3")
// console.log(playerId)

// const findPlayerById = (allPlayers, playerId) => {
//     return allPlayers.find(player => player.id === playerId)
// }

// console.log(findPlayerById(players, "player-1"))
// console.log(findPlayerById(players, "player-4"))

//every
//every - поэлементно перебирает массив и возвращает true если все элементы массива удовлетворяют условие

// const players = [
//     { id: "player-1", name: "mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "chelsey", timePlayed: 280, points: 48, online: true },
// ];

// const isAllOnline = players.every(player => player.online);

// //в консоли false потому что как минимум один игрок не онлайн.
// console.log("isAllOnline :", isAllOnline)

//some
//Не изменяет оригинальный массив.
//Поэлементно перебирает оригинальный массив.
//Возвращает true если хотя бы один элемент массива удовлетворяет условию.
//Возвращает false если ни один элемент массив не удовлетворяет условию.
//Перебор массива прекращается если коллбек возвращает true.

// const players = [
//     { id: "player-1", name: "mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "chelsey", timePlayed: 280, points: 48, online: true },
// ];

// const isAnyOnline = players.some(player => player.online)
// console.log("isAnyOnline: ", isAnyOnline)

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         numbers[i] = numbers[i] + value;

//       }

//     }
//      console.log(numbers)
//   // Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10)
// changeEven([2, 8, 3, 7, 4, 6], 10)
// changeEven([17, 24, 68, 31, 42], 100)
// changeEven([44, 13, 81, 92, 36, 54], 100)

// function changeEven(numbers, value) {
//   // Change code below this line
//  const newArray = []
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         newArray.push(numbers[i] + value)

//     }
//     }
//       console.log(newArray)
//   return newArray
//   // Change code above this line
// }

//reduce
//reduce берет много из этого много делает что-то одно

// const numbers = [5, 10, 15, 20, 25];

//первым аргументом мы передаем функцию которая будет вызываться для каждого элемента ()
//acc - это как будто тотал при переборе через for. будет из предыдушего вызова функции передоваться в следующий.

// const total = numbers.reduce((acc, value) => {
//     console.log("value: ", value)
//     console.log("acc: ", acc)

//     return 100;
// },800);

// const total = numbers.reduce((acc, value) => {
//     return acc + value;

//     //0 это второй аргумент (первый аргумент функция) и начальное значение acc
// },0);

// console.log("total: ", total)





// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// // const values = Object.values(salary);
// // const totalSalary = values.reduce((total, value) => {
// //     return total + value
// // }, 0)
// // console.log(totalSalary)

// //более короткая запись. аналог записи выше
// const totalSalary = Object.values(salary).reduce((total, value) => {
//   return total + value;
// }, 0);
// console.log(totalSalary);






// const cart = [
//     { label: "Apples", price: 100, quantity: 2 },
//      { label: "Banana", price: 150, quantity: 3 },
// ]

// const totalAmount = cart.reduce((total, item) => {
//     return total + item.price * item.quantity
// }, 0)

// console.log(totalAmount)


// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);










// const getUsersWithAge = (users, minAge, maxAge) => {
 

//      users.filter(user => {
//         if (user === minAge && user === maxAge) {
//          return user
//      }
        
// })


// };




// const getUsersWithAge = (users, minAge, maxAge) => {
 


//      users.filter(user => {
//         if (user === minAge && user === maxAge) {
//
//      }
// })
// };















// const getUsersWithAge = (users, minAge, maxAge) => {
 
//     const usersArray = users.filter(user => user.age >= minAge && user.age <= maxAge);
//     console.log(usersArray)
//     return usersArray;

// };




// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]





// getUsersWithAge(users, 20, 30); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// getUsersWithAge(users, 30, 40);
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]










// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви


// // const worst = students.filter(student => student.score < LOW_SCORE);
// const worst = students.filter(({ score }) => score < LOW_SCORE)


// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );


// console.log(average); // Массив объектов с именами Поли и Хьюстон





//sort
//sort изменяет оригинальный массив
// sort сортирует по возрастанию
//sort приводит все значения к строке и сортирует по UNICODE (найди в интернете сайт)

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log("numbers", numbers);


// curEl получает текущий элемент, nextEl следующий.
//1 и 9. 9 и 6. 6 и 2. 2 и 3

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort((curEl, nextEl) => {
//     // от кар ел отнимаем некст ел, если эта штука возвращает отрицательное значение
//     //это значит что следующий элемент больше текущего
//     //поэтому текущий ставит левее, а следующий правее
//     return curEl - nextEl
// })


// console.log(numbers)





// console.log("abcz".charCodeAt(1))



// const tweets = [
//     { id: "1", likes: 50, tags: ["js", "node.js"] },
//      { id: "2", likes: 15, tags: ["js", "node.js"] },
//       { id: "3", likes: 25, tags: ["js", "node.js"] },
//        { id: "4", likes: 35, tags: ["js", "node.js"] },
//         { id: "5", likes: 7, tags: ["js", "node.js"]},
// ]


// const tags1 = tweets.map(tweet => tweet.tags).flat()


// аналог записи выше
// const tags1 = tweets.flatMap(tweet => tweet.tags)
// console.log(tags1)



// const players = [
//     { id: "player-1", name: "mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "kiwi", timePlayed: 230, points: 48, online: false },
//     { id: "player-4", name: "ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "chelsey", timePlayed: 280, points: 48, online: true },
// ];



// const onlineSorted = players.filter(player => player.online)
//     .sort((firstPlayer, nextPlayer) => firstPlayer.rank - nextPlayer.rank)
//     console.table(onlineSorted)








// const players = [
//     { id: "player-1", name: "mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "kiwi", timePlayed: 230, points: 48, online: false },
//     { id: "player-4", name: "ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "chelsey", timePlayed: 280, points: 48, online: true },
// ];



// const onlineSorted = players.filter(player => player.online)
 
//     console.log(onlineSorted)













































// const getFriends = (users) => {
//     const allFriends = users.flatMap(friend => friend.friends)
//     console.log(allFriends)
//     const uniqueFriends = allFriends.filter((el, index, array) => array.indexOf(el) === index)
//     console.log(uniqueFriends)
//    return uniqueFriends
// };




// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]



// getFriends(users)







// const getActiveUsers = (users) => {
   
// const onlineSorted = users.filter(player => player.isActive)
//   console.log(onlineSorted)
// return onlineSorted

// };

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]


// getActiveUsers(users)







// const getUsersWithFriend = (users, friendName) => {
//     const newUser = users.filter(obj => obj.friends.includes(friendName))
   
//    return newUser
// };
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]


// console.log(getUsersWithFriend(users, "Briana Decker"))
// console.log(getUsersWithFriend(users, "Goldie Gentry"))
// console.log(getUsersWithFriend(users, "Adrian Cross"))





// const getUserWithEmail = (users, email) => {
   
// const findUsers = users.find((user) => user.email === email)

//    return findUsers


// };




// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]




// // console.log(getUserWithEmail(users, "moorehensley@indexia.com"))
// // console.log(getUserWithEmail(users, "sharlenebush@tubesys.com"))
// // console.log(getUserWithEmail(users, "rossvazquez@xinware.com"))
// console.log(getUserWithEmail(users, "elmahead@omatom.com"))
// // console.log(getUserWithEmail(users, "careybarr@nurali.com"))
// console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"))
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"))








// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => {
//     console.log(course)
//     console.log(index)
//      console.log(array)
//   }
  
// );

// console.log(uniqueCourses)

// //Используя array.indexOf(course) выполняем поиск
// // первого совпадения текущего элемента course и получаем его индекс в оригинальном массиве всех курсов.В параметре index
// // хранится индекс текущего элемента course при переборе массива методом filter.

// // Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение
// // встречается в массиве и на текущей итерации фильтр обрабатывает именно его.






// const greet = function (username, callback) {
//     callback(username)

// }

// const boss = function (rr) {
//     console.log(`hello ${rr}`)

// }

// const worker = function (mm) {
//     console.log(`go to work ${mm}`)
// }


// greet("King", boss)
// greet("Vitya", worker)








// const numbers = [2, 4, 8, 10, 15]

// const each = function (array, callback) {
//     for (const item of array) {
//         callback(item)
//     }
// }

// const multi = function (el) {
//     console.log(el * 2)
// }

// const three = function (number3) {
//     console.log(number3 * 3)
// }

// each(numbers, multi)
// each(numbers, three)








// const numbers = [3, 7, 12, 20]

// const empty = []

// const doubleN = arr => {
//     const copyArr = [...arr];

//     // for (const el of copyArr) {
//     //   empty.push(el * 2)
//     // }





//     for (let i = 0; i < copyArr.length; i += 1) {
//         copyArr[i] *= 2
//     }


//     // return empty
//     return copyArr
// }


// console.log(numbers)
// console.log(doubleN(numbers))


// const doubleN = numbers.map((el, index, array) => {
//   return el * 2
// })


// console.log(doubleN)












// const numbers = [3, 7, 12, 20]

// const empty = []

// const doubleN = arr => {
//     const copyArr = [...arr];

//     for (const el of copyArr) {
//       empty.push(el * 2)
//     }


//     return empty
// }


// console.log(numbers)
// console.log(doubleN(numbers))




// const numbers = [7, 9, 16, 12, 3, 11]
// const copyNumbers = [...numbers].sort((a, b) => {
//     return a - b
// })

// console.log(numbers)
// console.log(copyNumbers)



// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// const getTotalAmount = hui => {
//   const totalAmount = cars.reduce((acc, el, idx, arr) => {
//     return acc + el.amount;
//   }, 0);

//   return totalAmount;
// };

// console.log(getTotalAmount(cars));




// const numbers = [4, 2, 9, 3, 5]


// const totalNumbers = numbers.reduce((acc, el) =>   acc + el)

// console.log(totalNumbers)




















// const createProduct = function (product, callback) {
//     const copyProduct = {id: 785, ...product}
//   callback(copyProduct)
// }

// const logProduct = function (hui) {
//     console.log(hui)
   
// }

// const totalPrice = function ({ price, quantity } = {}) {
// console.log(`totalPrice ${price * quantity}`)
// }


// createProduct({name: "tomato", price: 90, quantity: 4}, logProduct)
// createProduct({name: "tomato", price: 90, quantity: 4}, totalPrice)





// const minNumbers = 1;
// const maxNumbers = 100;

// for (let i = minNumbers; i <= maxNumbers; i += 1) {
//     console.log(i)
// }


