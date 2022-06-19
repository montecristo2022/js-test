// const a = `Переменная «a» в script1.js`;

// console.log(a);

// const b = `Переменная «b» в script1.js`;

// console.log(b);

// const age = 10;
// const totalPrice = 200.75;
// const isOpen = true;

// const type = typeof isOpen;
// console.log(type);

// console.log("До")
// alert("wetpussy")
// console.log("После")


// const shouldRenew = confirm("продлеваете?");
// console.log(shouldRenew);




// let quantity = prompt("сколько хотите купить?");
// quantity = Number (quantity)
// console.log(quantity);
// console.log(typeof quantity);





// let elementWidth = "50px";
// const result = Number.parseInt(elementWidth)
// console.log(result);

// let elementWidth = "50px";
// elementWidth = Number.parseInt(elementWidth);
// console.log("elementWidthhh:", elementWidth)

// let elementWidth = "50.67px";
// elementWidth = Number.parseFloat(elementWidth);
// console.log("elementWidthhh:", elementWidth)

// let salary = 1300.16472;
// salary = salary.toFixed(2);
// console.log(salary);


// идентично записи выше
// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));
// console.log(salary)


// console.log(Number("njbhb"));


// показывает число pi
// console.log(Math.PI)


// возведение в степень
// const base = 2;
// const power = 3;

// const result = Math.pow(base, power)
// console.log(result)

// этот оператор является экспонентом. тоже возводит в степень
// console.log(2 ** 3);


// пользователь дает числе и дает степень.
// затем числу и степень считаются блягодаря последней формуле с конст

// let base = prompt("давай число");
// // base = Number(base);
// console.log(base);

// let power = prompt("давай степень");
// // power = Number(power);
// console.log(power)

// const result = base ** power;
// console.log(result);


// дает произвольное (рандомное) числе
// console.log(Math.random())


// дает рандомное число от 50 до 45. максимальное число - минимальное число + за скобками минимальное число
// console.log(Math.random() * (50-45) +45)


// аналог записи выше. более качественный вариант
// const max = 50;
// const min = 45;
// console.log(Math.random() * (max - min) + min);



// матс раунд округляет. обернул в него матс рендом и появляются целые числа в консоли
// const max = 80;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);


// считает количество символов в строке. пробел тоже символ
// const message = "в этой строке 24 символа";
// console.log(message.length);


// сшитие строки. в консоли происходит конкретинация и итог qweasd
// console.log("qwe" + "asd");



// сшили ферст нейт и ласт нейм в одну строку в консоли
// const firstName = "leonel"
// const lastName = "Messi"
// const fullName = firstName + lastName
// console.log(fullName)


// сшитие строк с пробелом Leonel Messi
// const firstName = "leonel"
// const lastName = "Messi"
// const fullName = firstName + " " + lastName
// console.log(fullName)



// в консоли это Гость Leo Messiпоселяется в VIP номер 716
// const firstName = "Leo"
// const lastName = "Messi"
// const room = 716;
// const type = "VIP";
// const welcomeMsg = "Гость " + firstName + " " + lastName + "поселяется в " + type + " номер " + room;
// console.log(welcomeMsg)


// в консоли Вы заказываете 5 холодильников.
// const quantity = 5;
// const orderMsg = `Вы заказываете ${quantity} холодильников.`;
// console.log(orderMsg)



// в консоль выводится самсунг с маленькой буквы
// const brand = "SamsUNg"
// const normalizedBrand = brand.toLocaleLowerCase();
// console.log(normalizedBrand);




// ответ пользователя будет малыми буквами
// let brand = prompt("давай бренд");
// brand = brand.toLowerCase();
// console.log(brand);


// в консоли нет буквы S. Все остальные буквы маленькие
// let brand = "SamSUnG"
// console.log(brand.slice(1) .toLowerCase());


// Все буквы маленькие кроме первой
// let brand = "SamSUnG"
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);




// в консоли получает true false fasle true false false.ответ на то есть ли там слова из блек листа.
// в стринге2 мы сделали все буквы маленькими для консоли и поэтому консоль дала true.
// если бы мы не уменьшили все буквы в стринге 2 слово РАСПРОАЖА дала бы ответ false

// const blacklistWord1 = "спам"
// const blacklistWord2 = "распродажа"

// const string1 = "Привет. Я саша, это не спам"
// const string2 = "огромная РАСПРОДАЖА"
// const string3 = "Рекламная компания #fatlivesmatter"

// console.log(string1.includes(blacklistWord1));
// console.log(string1.includes(blacklistWord2));

// console.log(string2.includes(blacklistWord1));
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2 .includes(blacklistWord2));

// console.log(string3.includes(blacklistWord1));
// console.log(string3.includes(blacklistWord2));



// это false
// console.log(5 > 15)

// это true
// > оператор
// то что слева и справа от него операнды
// console.log(25 > 15)



// строка приводится к числу. 10 больше 5. это true
// console.log("10" > 5)


// оператор не строго равенства
// слева и справа приводится к числу значение
// const isEqual = 5 == 5;
// console.log(isEqual)

// когда мы хотим сравнить два значения мы используем строгое равенство или строгое неравенство.
// в таких сравнениях не происходит преобразование типов
// оператор строго равенства
// const isEqual = 1 === "1";
// console.log(isEqual)

    
//     не равно
// !==



// булевое значение это когда любое значение пытается преобразоваться к true или false
// к ложным значениям, false, относятся 0, nan, null, undefined, "", false
// все остальное относится к true!!!!
// console.log(Boolean());


// && - операторю аналог "и"
// если все значения правильные, true, то возвращается значение последнего операнда. в нашем случае строка хелло
// console.log(5 && 6 && 7 && "hello");


// запианется  на правде. в консоли 5. 5 - это первое значение true
// console.log(5 || 7 || 9 || 11)
// в консоли 9. первое значение true
// console.log(false || false || 9 || 11)
// если все false, в консоли будет последнее
// console.log(false || false || 0 || null)

// ! - не. в консоли true. не false = true
// console.log(!false);

// это false
// console.log(!true)


// false число 50 больше числа 10
// const x1 = 10;
// const x2 = 30;
// const number = 50;
// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);

// true. число 5 менее 10.
// const x1 = 10;
// const x2 = 30;
// const number = 5;
// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);


// Число 5 попадает в отрезок после 30? нет, не попадает. False
// const x1 = 10;
// const x2 = 30;
// const number = 5;
// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number > x2);


// Число 5 попадает в отрезок после 30? да, число 50 после 30. true.
// const x1 = 10;
// const x2 = 30;
// const number = 50;
// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number > x2);



// false. 50 не входит в отрезок с 10 до 30
// const x1 = 10;
// const x2 = 30;
// const number = 50;
// console.log(`Число ${number} попадает в отрезок до ${x1} до ${x2}?`, number > x1 && number < x2);



// это true. 15 входит в отрезок с 10 до 30
// const x1 = 10;
// const x2 = 30;
// const number = 15;
// console.log(`Число ${number} попадает в отрезок до ${x1} до ${x2}?`, number > x1 && number < x2);




// isDnd = режим онлайн.Скрипт в котором мы проверяем можем ли мы написать другу
// для этого друг должен быть
//     - онлайн
//     - другом
//     - без режима не беспокоить.
// мы можем написать другу. все сходится
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("Можно открыть чат? ", canOpenChat)



// саб = про. он может получить доступ
// const sub = "pro";

// const canAccessContent = sub === "pro" || sub === "vip"
// console.log("Есть доступ к контенту? ", canAccessContent)


// саб не может получить доступ к контену. он не про или вип.
// const sub = "free";

// const canAccessContent = sub === "pro" || sub === "vip"
// console.log("Есть доступ к контенту? ", canAccessContent)



// if работает так. true выполняется. false не выполяется. 3 меньше 5. if не выполняется
// if (3 > 5) {
//     console.log("qwe")
// }




// выполнится if потому что 50 больше 30. в консоли будет один.
//     если вместо 50 поставить 5, в консоли будет два.
// if (50 > 30) {
//     console.log("один")
// } else {
//     console.log("два")
// }


// else if позволяет записать какое-то новое условие, которое применяется.
// если значение выходит за рамки 3000, то передается значение уровень БОГ.
// const salary = 1000;
// if (salary <= 500) {
//     console.log("уровень 1")
// } else if (salary > 500 && salary <= 1500) {
//     console.log("уровень 2");
// } else if (salary > 1500 && salary < 3000) {
//     console.log("уровень 3")
// } else {
//     console.log("уровень БОГ")
// }


// тернанрный оператор используется только для записи в переменные по условиям
// если баланс негативный, появляется тебе пизда. если баланс позитивный, появляется баланс позитивный
// const balance = -1000;
// let message;
// if (balance >= 0) {
//      message = "Позитивный Баланс"
// } else {
//     message = "тебе пизда, друг"
// }
 
// console.log(message);



// аналог записи выше
// используется только если есть два вариант!!
// const balance = -1000;

// const message = balance >= 0 ? "позитивный баланс" : "тебе пизда, друг";
// console.log(message);


// не работает!!!
// переменные обьявленные через const или через let подчиняются блочной области видимости. такие скобки {}
//  создают новую вложенную область видимости.
// то что находится вне скобок создает новую область видимости
// в моем примере переменная а есть только в теле if, во внешнем коде она не видна




// if (true) {
//     const a = 5;
// }

// console.log(a);


// НЕ РАБОТАЕТ. НЕТ ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ. message виден только в скобках.
// как нужно сделать ниже
// ТО ЧТО ВНУТРИ НЕ ВИДНО СНАРУЖИ, ТО ЧТО СНАРУЖИ ВИДНО ВНУТРИ


// const balance = 1000;
// if (balance >= 0) {
//     let message = "Позитивный баланс"
// } else {
//     let message = "тебе пизда, друг"
// }

// console.log(message);


// const balance = 1000;
// let message;
// if (balance >= 0) {
//     message = "Позитивный баланс"
// } else {
//     message = "тебе пизда, друг"
// }

// console.log(message);





// ЗАНЯТИЕ ДВА, МОДУЛЬ 1!!!!!!!
// выбирает цену при выборе отеля с разным количеством звездв
// const stars = 1;
// let price;


// if (stars === 1) {
//     price = 20;
// } else if(stars === 2) {
//     price = 30;
// }  else if(stars === 3) {
//     price = 50;
// }  else if(stars === 4) {
//     price = 70;
// }  else if(stars === 5) {
//     price = 120;
// } else {
//     console.log("ваше место в клоповнике, сэр")
// }

// console.log(price)


// в первые скобки ставим значение которое хотим сравнивать
// каждый кейс должен заканчивать оператором break. прерывание.
// если количество звезд 1 и в первом case не поставить break,
//  то в консоли будет 30. первое условие совпало, второе уже не проверяет, но во втором кейсе стоит брейк и дальше происходит прерывание
// в том случае если мы ставим в const количество звезд для которой нет примера в case в консоль выведется значение указанное в default
// const stars = 1;
// let price;
// switch (stars) {
//     case 1:
//         price = 20;
//         break;
    
//      case 2:
//         price = 30;
//         break;
    
//         case 3:
//         price = 50;
//         break;
    
//         case 4:
//         price = 70;
//         break;
    
//         case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log("ваше место в клоповнике, сэр")
// }

// console.log(price)




// количество звезд 1 или 2 = 20
// количество звезд 3 или 4 = 30
// const stars = 4;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if(stars === 3 || stars === 4) {
//     price = 30;
// }  else if(stars === 5) {
//     price = 120;
// } else {
//     console.log("ваше место в клоповнике, сэр")
// }

// console.log(price)





// аналог записи выше
// const stars = 3;
// let price;
// switch (stars) {
//     case 1:
//         case 2:
//         price = 20;
//         break;
     
//     case 3:
//         case 4:
//         price = 30;
//         break;
    
//         case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log("ваше место в клоповнике, сэр")
// }

// console.log(price)


// const option = 3;
// let message = ""
// switch (option) {
//     case 1:
//         message = "заберите в 12 в офисе";
//         break;
    
    
//     case 2:
//         message = "курьер доставит вам с 9 до 19";
//         break;
    
//     case 3:
//         message = "посылка будет отправлена вашей мамке";
//         break;
    
//     default:
//         message = ("Вам перезвонят")

// }

// console.log(message)



// цикл конструкция, которая позволяет выполнять один и тот же кусочек кода с минимальными изменениями
// условие - условие прекращения цикла
// инициализация - повторения
// выражение - увеличиваем или уменьшаем счетчик. я буду увеличить на один после каждой литерации.
// for (инициализация ; условие; пост - выражение) {

// }

// как выполняется этот пример.
//     i = 0. i меньше 5 ? да.в консоль идет 1.
//     счетчик начинает проверять заново.
//         1 меньше 5 ? да.в консоль 1.
//         дальше 2 меньше 5 ? да.в консоль 2.
        

//         добавление по 1 пункту происходит за счет i +=1



// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }

// console.log("qwe")


// i += 3
// аналоги
// i = i + 3




// const minSalary = 500;
// const maxSalary = 3000;
// const workers = 7;
// let totalSalary = 0;

// // перебор работников в цикле + дал рандомную зарплату
// for (let i = 1; i <= workers; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
//     console.log(`ЗП работника номер ${i} - ${salary}`);

//     totalSalary += salary;

// }

//     console.log("totalSalary: ", totalSalary )



// вывели в консоль это
// 6
//  четное:  6
//  7
//  8
//  четное:  8
//  9
//  10
//  четное:  10
//  11
//  12
//  четное:  12
//  13

// const min = 0;
// const max = 5;
// let total = 0;

// // фор от мин до макс с шагом 1

// for (let i = min; i <= max; i += 1) {


//     if (i % 2 !== 0) {
//         console.log("не четное: ", i)
//         continue;
//         // continue если это не четное число пропускай
//     }


// console.log("четное: ", i)
    
//         total += i;

// }

// console.log("total: ", total)




// решили задачу.в случае если стоимость покупки ниже баланса, списываются деньги и выводится сообщение окей.
// если денег недостаточно, выводится другое сообщение
// let balance = 10000;
// const payment = 2000;
// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);

// if (balance >= payment) {
//     console.log("окей");
//     balance -= payment;
//     console.log(`на счет осталось ${balance} кредитов`)
// } else {
//     console.log("хуй, а не покупки");
// }

// console.log("операция завершена")


// применяются скидки в зависимости от потраченных средств. пишется сумма остатка.
// const totalSpent = 50;
// let payment = 500;
// let discount = 0;


//   if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log("Бронзовый партнер, скидка 2%");
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log("Серебряный партнер, скидка 5%");
//     discount = 0.05;
// } else if (totalSpent > 5000) {
//     console.log("Золотой партнер, скидка 10%");
//     discount = 0.1;
//   } else {
//       console.log("Не партнер, скидка 0%");
// }

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`)




// // похоже на пример выше, но меняет общую сумму потраченных денег в консоли
// // Золотой партнер, скидка 10%
// // 717 Оформляем заказ на сумму 450 со скидкой 10%
// // 720 Общая сумма потраченного в магазине: 5450

// let totalSpent = 5000;
// let payment = 500;
// let discount = 0;


//   if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log("Бронзовый партнер, скидка 2%");
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log("Серебряный партнер, скидка 5%");
//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log("Золотой партнер, скидка 10%");
//     discount = 0.1;
//   } else {
//       console.log("Не партнер, скидка 0%");
// }


// // // 500 = 500 - 500 * 0.1
// // // payment = payment - payment * discount;
// // payment -= payment * discount;
// // // два аналога

// // // payment += payment * discount
// // аналоги
// // payment = payment + payment * discount




// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`)

// totalSpent += payment;
// console.log(`Общая сумма потраченного в магазине: ${totalSpent}`)






// это связано с индекс штмл

// const btnAdd = document.querySelector("button[data-add]")
// const resetBtn = document.querySelector("button[data-reset]")
// const valueInput = document.querySelector("input[data-value]")
// const outputEl = document.querySelector(".js-output span")



// let total = 0;

// btnAdd.addEventListener("click", function () {
//     console.log("на меня нажали");

//     const value = Number(valueInput.value);



//     console.log(value);

//     total += value;

//     outputEl.textContent = total;

//     valueInput.value = 0;
// })

// resetBtn.addEventListener('click', function () {
//   total = 0;
//   outputEl.textContent = total;
// });























