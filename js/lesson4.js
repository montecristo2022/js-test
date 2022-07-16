// функция это мясорубка. какой-то аппарат который можно переиспользовать
// функция принимает что-то на вход и что-то возвращает

// это функциональное выражение. потому что мы берем функцию и присваиваем ее в переменную.
// функциональное выражение
// в круглых скобках напротив конст адд фанкшн у функции обьявляем параметры.
// это локальные переменные для функции доступные только внутри тела функции
// во время вызова функции передаем аргуенты. это значения для параметров
// аргуенты это хначения для параметров.
// если я в add допишу 5 и 9 консоль лох x и y даст в консоли 5 и 9
// что я обычно хочу от функции ?
//     вызвать функцию, что-то ей передать и получить результат ее работы
// для того чтобы что-то вернуть из функции у нас есть return
// функция не должна использовать ничего вне себя
// все что она использует мы должны передавать туда как аргуент


// const add = function (x, y) {
//     console.log(x)
//     console.log(y)

//     const result = x + y;
//     console.log("x + y:", result)

//     console.log("выполняется функцию add")
    
//     return x + y;
// }


// // снизу вызов функции по имени переменной
// // можно вызывать любое количество раз

// // микро-запись 1 аналог
// add(5, 3);
// add(10, 15);
// add(30, 50);



// микро-запись 1 аналог
// в переменную r1 записывается результат вызова фунции add.
// результат вызова функции add в return
// const r1 = add(5, 3);
// console.log("r1: ", r1);

// const r2 = add(5, 3);
//     console.log("r2: ", r2)

// const r3 = add(5, 3);
// console.log("r3: ", r3)



// когда интерпритатор встречает return он прекращает выполнение функции вообще
// в функции может быть только один return, но если используем иф там могут быть дополнительные ретерны

// const fn = function () {

//      return 444
//     console.log(1)

//     console.log(2)
    
//     console.log(3)
    
   
// };

// console.log("Результат функции :", fn());



// стек вызовов - механизм благодаря которому функции вообще работают в джаваскрипте.
// стек вызовов это как пачку листов.
//  на эту пачку можно только положить что - то сверху или снять


//     const fnA = function () {
//         console.log("Выполняется функция A")
        
//         fnB();
// };

//  const fnB = function () {
//      console.log("Выполняется функция B")
     
//      fnC();
// };

//   const fnC = function () {
//       console.log("Выполняется функция C")
      
  
// };

// fnA()



// тут должна быть ошибка. консоль лог вэлью не существует

//     const fnA = function () {
//         console.log("Выполняется функция A")
        
//         fnB();
// };

//  const fnB = function () {
//      console.log("Выполняется функция B")
     

//      fnC();
// };

//   const fnC = function () {
//       console.log("Выполняется функция C")
      
//   console.log(value)
// };

// fnA()




// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90]
// let total = 0;
// for (const value of cart) {
//     total += value;
// }

// console.log("Total: ", total);



// return возвращает значение функции за пределы хуйни в которой находится.
// результат добавления выводится в консоль

// const calculateTotalPrice = function (items) {
//     console.log("items внутри функции: ", items)

//     let total = 0;
//     for (const item of items) {
//         total += item;
//     }

//     return total;
// }

// console.log(calculateTotalPrice([1, 2, 3]))
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));





// напиши функцию LogItems(items)
//  которая получает массив айтемов для перебора и логинования массива

// все три массива будут записывать в локальную переменную items, которая в конст рядом с фанкшн


// const logItems = function (items) {
// for (const item of items) {
//     console.log(item);
// }
// }

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);





// поиск пользователя через функцию

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];


// const findLogin = function (allLogins, loginToFind) {
 

//     let message = `Пользователь ${loginToFind} не найден`
//     for (const login of allLogins) {
       
//         if (login === loginToFind) {
//             message = `Пользователь ${loginToFind} найден.`
//         }
//     }
//     return message;

// }


// // там где логинс это значение. сверху напротив функции параметр alllogins
// // в allLogins записывается то что я передал в logins
// // allLogins = logins
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));





// // более качественный аналог записи выше
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];



// const findLogin = function (allLogins, loginToFind) {
// // говорим сразу что пользователь не найден
//     let message = `Пользователь ${loginToFind} не найден`
//     for (const login of allLogins) {
       
//         if (login === loginToFind) {
//         //   нашли пользователя и возвращаем через ретерн месседж
//             message = `Пользователь ${loginToFind} найден`
//               // ретерн здесь - при первом совпадении выходи из этой функции
//             return message
//         }
//     }

//     // если цикл закончился и ни разу фор не нашел, мы записываем месседж который не перезаписался т.е. не найден
//     return message;

// }

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));






// лучший вариант решения задачи сверху (сверху два аналога)

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];


// логин ту файнд параметр
// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;
// };


// логинс и avocod3r аргумент
// значение аргумента записывается во второй параметр
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));






// // поиск самого маленького числа!!!
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
    
//     if (number < smallestNumber) {
//         smallestNumber = number
//         }
// }

// console.log("smallestNumber: ", smallestNumber)







// const findSmallestNumber = function (numbers) {

//     let smallestNumber = numbers[0];
//     for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number
//         }
//     }
    
//     return smallestNumber;
// }

// console.log(findSmallestNumber([16, 17, 18, 19]))
// console.log(findSmallestNumber([9, 11, -1, -2]))
// console.log(findSmallestNumber([3, 8, 12, 26]))




// const slugify = function (string) {
//   const normalizedString = string.toLowerCase();
//   const words = string.toLowerCase().split(' ');
//   const slug = words.join('-');
//   return slug;
    
//     };

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));



// const fn = function () {
//   console.log(arguments);

  
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);


//  const cart = [5, 2, 10, 7, 2, 1, 2];
// // // сделали переменную тотал до цикла
// let total = 0;
// // перебираем массив
// // в консоли все числа из массива друг под другом
// for (let i = 0; i < cart.length; i += 1) {
//     total = total + cart[i];
// }
// console.log("Total:",total);


// const employees = ['Dennis', 'Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];
// const filteredEmployees = [];



// for (let i = 0; i < employees.length; i += 1) {
//   if (i === employees.indexOf(employees[i])) {
//     filteredEmployees.push(employees[i]);
//   }
// }

//  console.log(filteredEmployees);



// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(1, 3)
// const nonExtremeEls = ['plum', 'pear', 'orange',];
// const lastThreeEls = ['pear', 'orange', 'banana'];

// console.log(firstTwoEls)
// console.log(nonExtremeEls)
// console.log(lastThreeEls)


// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[0, fruits.length]; // Change this line
//   console.log(fruit);
// }



// const order = 5; {
//   let total = 0;
//   // Change code below this line
// for (i = 0; i < order; i += 1) {
//   total += i
// }
//   // Change code above this line
//   console.log(total)
// }




//  const cart = [5, 2, 10, 7, 2, 1, 2];

// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     total = total + cart[i];
// }
// console.log(total);




 
//   const fruits = ["apple", "plum", "pear", "orange"];
// const fruit = "apple"
//   console.log( fruits.includes(fruit)); // Change this line




// const employees = ['Dennis', 'Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];
// const filteredEmployees = [];



// for (let i = 0; i < employees.length; i += 1) {
//   if (i === employees.indexOf(employees[i])) {
//     filteredEmployees.push(employees[i]);
//   }
// }

// console.log(filteredEmployees);

// ? Співробітник Shaw звільнився, видаліть його з масиву
// const idxOfShaw = filteredEmployees.indexOf('Shaw');
// filteredEmployees.splice(idxOfShaw, 1);

// console.log(filteredEmployees);
// ? Додати нового співробітника Thornton, перед Watkins;
// const idxOfWatkins = filteredEmployees.indexOf('Watkins');

// filteredEmployees.splice(idxOfWatkins, 0, 'Thornton');
// console.log(filteredEmployees);



// function getExtremeElements(array) {
// //   // Change code below this line
// //     const lastElementIndex = array.length - 1
// //     const lastElement = array[lastElementIndex]
// //     console.log(lastElement)

// // const firstElementIndex = array[0]
// // console.log(firstElementIndex)
// //   // Change code above this line
    
//     const firstElementIndex = array[0]
//     const lastElementIndex = array.length - 1
//       const lastElement = array[lastElementIndex]
//     // return [firstElementIndex, lastElementIndex]
// console.log(firstElementIndex, lastElement)
// }


// getExtremeElements([1, 2, 3, 4, 5])
// getExtremeElements(["Earth", "Mars", "Venus"])



// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]






// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line


// const totalArray = firstArray.concat(secondArray)
//     if (totalArray.length > maxLength) {
//     console.log(totalArray.slice(0, maxLength))
// //   return totalArray.slice(0, maxLength)
// } else {
//   return totalArray
//     }
    
//     // Change code above this line
//   }



// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)




// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1 ) { // Change this line
//   console.log(i);
// }



// function calculateTotal(number) {
//  // Change code below this line
// const totalNumber = 0
// for(let i = 0; i <= number; i += 1) {
//     totalNumber = totalNumber + i
 
// return totalNumber
// }

//   // Change code above this line
// }

// calculateTotal(5)





// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   for (const item of order) {
//     total += item
// }
// console.log(total)
//   // Change code above this line
//   return total;
// }

// calculateTotalPrice([412, 371, 94, 63, 176])
// calculateTotalPrice([164, 48, 291])




// function filterArray(numbers, value) {
//    // Change code below this line

//    const newArray = [];
    
//     for(let i = 0; numbers.length > i; i += 1){
       
//         if (numbers[i]>value){
//             newArray.push(numbers[i])
//         }
      
//     }
     
        
//         return newArray
// }
    

// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4)








// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
// console.log(filteredNumbers)
//   return filteredNumbers;
//   // Change code above this line
// }


// filterArray([12, 24, 8, 41, 76], 38)
// filterArray([12, 24, 8, 41, 76], 20)






// function filterArray(numbers, value) {

//  const  filteredNumbers = []
// for (const number of numbers) {
//     if (number > value) {
  
//         filteredNumbers.push(number)
           
//     }
// }
// }
// filterArray([12, 24, 8, 41, 76], 38)
//     filterArray([12, 24, 8, 41, 76], 20)





// function getEvenNumbers(start, end) {
//    // Change code below this line
// const newMassive = []
//     for (i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//          newMassive.push(i)
    
// }
//     }
//     console.log(newMassive)
//    return newMassive
//     // Change code above this line
//   }

// getEvenNumbers(2, 5)
// getEvenNumbers(3, 11)
// getEvenNumbers(8, 8)




// function includes(array, value) {
//   // Change code below this line

//   for (let i = 0; i <= array.length; i += 1) {
//     if (array.includes(value)) {
//       console.log("true")
//     } else {
//       console.log("false")
//     }
//   }


//   // Change code above this line
// }



// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// includes(["apple", "plum", "pear", "orange"], "plum")
// includes(["apple", "plum", "pear", "orange"], "plum")



// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i <= array.length; i += 1) {
//     if (array(i) === value) {
//       console.log("true")
//       return true
//     } else {
//       console.log("false")
     
//     }
//     return false
//   }
//   // Change code above this line
// }



// // function includes(array, value) {
// //   // Change code below this line
// //   for (const arr of array)  {
// //     if (arr === value) {
// //       console.log("true")
// //       return true
// //     }
// //     console.log("false")
     
    
// //   }
// //   return false
// //   // Change code above this line
// // }

// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// includes(["apple", "plum", "pear", "orange"], "plum")
// includes(["apple", "plum", "pear", "orange"], "plum")




// function positiveSum(arr) {
//   let totalPrice = 0
// for (const el of arr) {
//   if (el > 0) {
//     totalPrice += el
    
//   }
//   }
//   console.log(totalPrice)
// }


// positiveSum([1, -4, 7, 12])



// function positiveSum(arr) {
//   var total = 0;
//   for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//     if (arr[i] > 0) {                   // if arr[i] is greater than zero
//       total += arr[i];                  // add arr[i] to total
//     }
//   }
//   return total;                         // return total
// }
// ПОСМОТРИ ЗАВТРА


// function maps(x){
//   for (let i = 0; i <= x.length; i += 1){
//     if(x[i] === )
//   }
// }



// maps([1, 2, 3]), ([2, 4, 6])



// function getGrade (s1, s2, s3) {
//   // Code here
//   if ((s1 + s2 + s3) / 3 >= 90) {
//     console.log("A")
//   } else if ((s1 + s2 + s3) / 3 >= 80){
//     console.log("B")
//     }  else if ((s1 + s2 + s3) / 3 >= 70){
//     console.log("C")
//     } else if ((s1 + s2 + s3) / 3 >= 60){
//     console.log("D")
//   } else if ((s1 + s2 + s3) / 3 < 60)
//     console.log("F")
    
// }




// const numbers = [5, 10, 15, 20, 25]

// let total = 0;


// //index и array в данном случае не нужны

// numbers.forEach(function (number, index, array) {
//     console.log("number: ", number)

//     total += number
// })

// console.log(total)


//   const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });


// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);



