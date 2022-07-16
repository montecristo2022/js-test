// массив это список.возможность хранить колекцию однотипных данных.
// не бывают массиов в которых хранится число, строка итд.
// массив открывается квадратными скобками
// снизу массив из одного элемента
// const friends = ["Mango"];
// console.log(friends);
// индекс манго 0 киви 1 поли 2 аякс 3 в консоли
// массив это набор ячеек памяти. массив это указатель на какой-то набор ячеек памяти
// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);
// // чтобы обратиться к элементу массива пишем переменную в которой находится массив.
// //  после этого ставим квадратные скобочки внутрь которых ставим индекс элемента к которому хотим обратиться.
// // на место этого вызова будет возвращено значение
// // в консоль выводится манго
// console.log(friends[0])
// const lastIndex = friends.length - 1;
// console.log(lastIndex)
// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);
// // как перезаписать массив
// friends[1] = "im not kiwi"
// console.log(friends);
// примитивы и сложные типы
// в консоли
// 10
// 10
// 20
// 10
// при обновлении одной ячейки вторая не обновляется. но обновление должно быть за консоль лог.
// это передача по значению
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);
// a = 20
// console.log(a);
// console.log(b);
// передача по ссылке. в переменной а сейчас сложный тип, массив.
// когда вы создаете сложный тип (массив, обект, функцию) под нее отдельно где-то выделяется место в памяти.
// к нему не привязана переменная в нашем случае(а).
// затем создается переменная и внутри ячейки памяти с переменной а хранится не сам массив, а указатель(ссылка на массив)
// const a = [1, 2, 3]
// // когда я пишу b = a это делает новую ячейку в памяти, где будет лежать переменная b и то что она туда копирует.
// // (она копирует ссылку с переменной а)
// const b = a;
// console.log("a", a)
// console.log("b", b)
// // что произошло при операции ниже ?
// //     оно заходит в ячейку памяти(а) у которой есть ссылка на массив.находит наш массив[1, 2, 3]
// //     берет у него нулевой элемент и меняет его на 500
// a[0] = 500;
// console.log("a", a)
// console.log("b", b)
// // за этой консолью (которая выше) будет 500 вместо 1. за консолью на 67 строке останется 1 потому что  a[0] = 500; указано после первой консоли
// // в консоли тру. они равны
// console.log(a === b)
// // false. одинаковые массивы но разные ячейки памяти. да, одинаковые элементы, но разные ячейки памяти
// // массивы сравниваются по месту в памяти.
// //     но к примеру числа сравниваются по значению
// console.log([1, 2, 3] === [1, 2, 3]);
// ИТОГ примитивы передаются по значению. делется точная копия и никак не связаны. + примитивы сравниваются по значению. 5 = 5
// сложные типы передаются по ссылке. сравниваются под адресу. поэтому два разных массива никогда не будут равны друг друг
// i является переменной счетчика for. можно использовать что угодно вместо этого
// friends[i] - адрес ячейки и место в памяти.не целового массива, а элемента этого массива и этот элемент мы изменяем
// добавляя в консоли к нему - 1
// если нам необходим индекс или необходимо изменить элемент массива мы используем цикл for
// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);
// const lastIndex = friends.length - 1;
// for (let i = 0; i <= lastIndex; i += 1) {
//     friends[i] += "-1";
// }
//  console.table(friends)
// там где iterable нужно написать элемент итерируегомог обьекта. ставим friends
// на месте variable пишем имя локальной переменнойю должно быть в одиночном числе. в нашем случае friend.
// for (const variable of iterable) {
// пишем локальную переменную доступную только внутри этих скобок
// }
// for of пройти еще раз. ниже записи про это нет
// используется в задачах где не нужен индекс или не нужно изменять элемент массива
// задачи с рпептой
// что мы сделали в итоге ? перебрали в цикле и получили доступ к каждому элементу,
//     создали общий тотал, на кажой литерации добавили cart i к тоталу
// после цикла вывели в консоль
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// // сделали переменную тотал до цикла
// let total = 0;
// // перебираем массив
// // в консоли все числа из массива друг под другом
// for (let i = 0; i < cart.length; i += 1) {
//     total = total + cart[i];
// }
// console.log("Total:",total);
// аналог записи выше
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (const value of cart) {
//     total += value;
// }
// console.log("Total: ", total)




// здесь мы перезаписали значение массива умнжив его на 1.1
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);





// в примере ниже мы посчитали сумму всех четных чисел.
// четные числа мы определили через ifю в том случае если число делится на два без остатка оно четное


// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// // 1 переменная тотал

// // 2 перебрать массив
// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i])
//     // 3 на каждой итерации проверить элемент на четность
//     if (numbers[i] % 2 === 0) {
//         console.log("Четное!!!!")


//         // 4 если четный плюсует к тоталу
//         total += numbers[i];
//     }
// }

// console.log("Total: ", total);



// аналог записи выше
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     const number = numbers[i]
//     console.log(number)


//     if (number % 2 === 0) {
//         console.log("Четное!!!!")



//         total += number;
//     }
// }

// console.log("Total: ", total);



// аналог двух записей выше

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11, 14];
// let total = 0;

// for (const number of numbers) {
//     console.log(number);
    

//     if (number % 2 === 0) {
//         console.log("Четное!!!!")



//         total += number;
//     }

// }

// console.log("Total: ", total);



// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         console.log("эту итерацию пропускаем", number)
//         continue;
//         // континью говорит если иф выполнился на текущей итерации больше код выполнять не нужно.
// //    другими словами. если не пропускаем !==
//     }



//     console.log(`${number} - четное!!?`)
//     total += number;
// }

// console.log("Total: ", total);





// Пишу скрипт поиска логина.Если логин найден
// если логина нет, пишу логин не найден.
// если логин есть, пишу логин найден

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = "poly1scute";
// let message = ""
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     // console.log(`Login: `, login);
//     // console.log(login === loginToFind)

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`
//         break;
//     }

   
//         message = `пользователь ${loginToFind} не найден.`;
   

// }

// console.log(message)



// аналог решения задачи выше.
// разница в том что в лет по умолчанию пользователь не найден, а если найден, статус меняется

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = "poly1scute";
// let message = `Пользователь ${loginToFind} не найден`;
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     // console.log(`Login: `, login);
//     // console.log(login === loginToFind)

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`
//         break;
//     }


// }

// console.log(message)




// аналог решения задачи выше
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = "poly1scute";
// let message = `Пользователь ${loginToFind} не найден`;

// for (const login of logins) {
    
//     console.log(`Login: `, login);
//     console.log(login === loginToFind)

//       if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`
//         break;
//     }
// }

// console.log(message)





// встроенный метод includes возвращает true или false



// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = "poly1scute";
// let message = `Пользователь ${loginToFind} не найден`;


// console.log(logins.includes(loginToFind))




// аналог записи выше
// инклудс - метод массива, который скрывает под капотом перебор массива, проверку на вхождение
// инкулдс используем только тогда когда нужно проверить есть ли в массиве приметивов какой-то приметив
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = "poly1scute";



// const message =  logins.includes(loginToFind) ? `пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;

// console.log(message)





// скрипт поиска самого маленького числа в массиве
// при условии уникальных числ

// const numbers = [51, 18, 13, 24, 7, 85, 19]
// let smallestNumber = numbers[0]


// // фор перебирает массив
// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log(`smallestNumber: `, smallestNumber)



// пишу скрипт который обьединяет все элементы массива в одно строковое значение
// элементы массива должны быть разделены запятой

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = "";

// for (const friend of friends) {
//     string += friend + ","
// }

// string = string.slice(0, string.length - 1)
// console.log(string)



// аналог примера выше.
// метод массива join вызывается на массиве. Он берет каждый элемент массива и сшивает в одну строку.
// если после френдс джоин в скабках поставить пробел, все будут разделены пробелом, но к последнему не применяется
// то есть после аякс пробела не будет
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// const string = friends.join(", ")
// console.log(string)



// пишу скрипт который меняет размер букв на противоположный
// стринг сплит разбирвает строку посимвольно

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";
// console.log(letters)


// // посимвольно перебрал массив
// for (const letter of letters) {
//     console.log(letter);

//     if (letter === letter.toLowerCase()) {
//         console.log("Эта буква в нижнем регистре! - ", letter)

//         invertedString += letter.toUpperCase();
//     } else {
//              console.log("Эта буква в верхнем регистре! - ", letter)
//         invertedString += letter.toLowerCase();
//     }
// }

// console.log("invertedString: ", invertedString)




// аналог задачи выше через тернарник



// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";
// console.log(letters)


// for (const letter of letters) {
//     console.log(letter);



//     invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()
// }

// console.log("invertedString: ", invertedString)


// join строку сшивает, split строку разбирвает




// // делаем slug в url (тире между словами)

// const title = "Top 10 benefits of React framework";

// // 1) сделали маленькие буквы
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// // 2) разбили на части
// const words = normalizedTitle.split(" ");
// console.log(words)

// // 3) сделали тирешки
// const slug = words.join("-")
// console.log(slug)


// // top-10-benefits-of-react-framework итог



// аналог записи выше, но в одну строку
// const title = "Top 10 benefits of React framework";
// const slug1 = title.toLowerCase().split(" ").join("-");
// console.log(slug1);




// напиши скрипт который считает сумму элементов двух массивов
// снизу  плохой вариант
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// for (let i = 0; i < array1.length; i += 1) {
//     total += array1[i]
// }

// for (let i = 0; i < array2.length; i += 1) {
//     total += array2[i]
// }

// console.log(total);



// аналог записи выше

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// // сшитие массивов
// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);



// работаем с коллекцией карточек в trello
// метод splice
// удалить
// добавить
// обрезать



// splice - первый деструктивный метод, который учим. он изменяет то на чем изменяется


// const cards = [
//     "Карточка-1",
//     "Карточка-2",
//     "Карточка-3",
//     "Карточка-4",
//     "Карточка-5"
    
// ]

// console.table(cards);



// // const cardToRemove = "Карточка-3"
// // const index = cards.indexOf(cardToRemove)
// // console.log(index)

// // // передал индекс и то сколько элементов удалить
// // cards.splice(index, 1)
// // console.table(cards)



// const cardToInsert = "Карточка-6"

// const cardToUpdate = "Карточка-4"


// splice добавление по индексу

// const cards = [
//     "Карточка-1",
//     "Карточка-2",
//     "Карточка-3",
//     "Карточка-4",
//     "Карточка-5"
    
// ]





// const cardToRemove = "Карточка-3"


// // (добавление по индексу)

// const cardToInsert = "Карточка-6"
// index = 3;
// cards.splice(index, 0, cardToInsert)

// console.table(cards);



// const cardToUpdate = "Карточка-4"






// const cards = [
//     "Карточка-1",
//     "Карточка-2",
//     "Карточка-3",
//     "Карточка-4",
//     "Карточка-5"
    
// ]





// const cardToRemove = "Карточка-3"




// const cardToInsert = "Карточка-6"

// // обнволение по индексу
// const cardToUpdate = "Карточка-4"
// const index = cards.indexOf(cardToUpdate)

// console.log(index);

// // хочу с индекса 1 удалить и заменить на "new"
// cards.splice(index, 1, "new-4")
// console.table(cards)































// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

// const totalArray = firstArray.concat(secondArray)

// if (totalArray.length > maxLength) {
//   return totalArray.slice(0, maxLength)
// } 
//   return  totalArray
//     // Change code above this line
//   }

























// let budget = prompt('What is your budget for the trip?')
// if (budget >= 20000) {
//         console.log("турцию")
// } else if (budget >= 15000) {
//     console.log("в Египет")
// } else if (budget >= 10000) {
//     console.log("в Болгарию")
// } else if (budget >= 5000) {
//     console.log("можешь покурить кальян")
// } else {
//     console.log("пора на работу")
//     }


// let age = prompt("возарст?")
// console.log(age)
// let sex = prompt("пол?")
// console.log(sex)
// let profession = prompt("профессия?")
// console.log(profession)

// console.log(`ваш возаст ${age} года, ваш пол ${sex}, ваша профессия ${profession}`)









// const question = prompt("спроси меня")
// const number = Math.floor(Math.random() * 5)
// let message
// switch (number) {
//     case 1:
//        message = "да"
//         break;
    
//     case 2:
//       message = "нет"
//         break;
    
//     case 3:
//       message = "как повезет"
//         break;
    
//     case 4:
//      message = "скорее да"
//         break;

//     case 5:
//             message = "скорее нет"
//         break;
// }

// console.log(`на этот вопрос: ${question}, я скажу тебе что ${message}`)













// const userLog = prompt('Вкажіть ваш логін');
// console.log(userLog);

// if (!userLog) {
//     console.log('Cancelled');
// } else if (userLog !== 'admin') {
//     console.log('I don`t know you');
// } else {
//     const userPass = prompt('Вкажіть ваш пароль');
//     if (userPass === 'I am the boss') {
//         console.log('Hello!');
//     }
//     else {
//         console.log('Wrong password');
//     }
// }

































// const login = prompt("Ваш логин?") 
//  console.log(login)
// if (login !== "admin") {
//     console.log("who are you?")
// } else {
//     const password = prompt ("ваш пароль?")
//  if (password === 'boss') {
//         console.log('Hello!');

//  }
//  else {
//      console.log("scammer")
//     }
//      }
    

