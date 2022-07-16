

// нейм, эйдж, секс - ключ. имя ключа должно быть уникальное

// const userData = {
//     name: "Mont",
//     age: 10,
//     sex: "Male"
// }

// console.log(playlist)


// обьект дает возможность сгруппировать характеристики какой-то одной сущности (пример:пользователь, плейлист, квартира, машина итд)
// если я хочу у этого обьекта получить значение рейтинга, я обращаюсь к свойству.
// после имени переменной в которой хранится этот обьект мы ставим точку и потом записываем имя ключа console.log(playlist.rating)
// и оттуда мы получаем значение этого свойства


// const playlist = {
//     name: "мой супер плейслист",
//     rating: 5,
//     tracks: ["трек-1", "трек-2", "трек-3"],
//    tracCount: 3
// }


// console.log(playlist.rating)
// // аналоги
// console.log(playlist["rating"])





// const playlist = {
//     name: "мой супер плейслист",
//     rating: 5,
//     tracks: ["трек-1", "трек-2", "трек-3"],
//    tracCount: 3
// }

// const propertyName = "tracks"

// // не работает!!! ищет пропертинейм в плейлисте
// // console.log(playlist.tracks)


// // работает!!! сначала находит эту переменную, затем находит ее значение (в нашем случае трекс) и потом ищет трекс в плейлисте
// console.log(playlist[propertyName])




// const username = "Mango"
// const email = "mango@gmail.com"

// const signupData = {
//     // cлева ключ, справа имя переменной которая дает манго
//     username: username,
//     email: email

// }

// console.log(signupData)


// const username = "Mango"
// const email = "mango@gmail.com"

// const signupData = {
// //     если у вас имя свойства называется так же как имя переменной в которой лежит значение(манго или мангомейл)
// // мы можем оставить один юзернейм вместо    username: username
//     username,
//     email

// }

// console.log(signupData)




// это все вычисляемые свойства
// const inputName = "color123321"
// const intutValue = "tomato"
// const colorPickedData = {
//     // интерпритатор счиает что инпут нейм это имя переменной, он находит ее значение("color123321") подставляет это на свое место
//     // и в консоли {color123321: 'tomato'}
//     //  [inputName] - иди найди имя переменной и ее значение используй как ключ
    
//  [inputName]: intutValue
// }
// console.log(colorPickedData)
    



// массив и функция это обьект
// const a = [1, 2, 3];

// // hello - это ключ. смайлик значение
// a.hello = ":)"

// console.log(a)



// const fn = function () {
//     console.log("hello")

// }
// fn.hello = ":)"
// console.dir(fn.hello)




// как что-то изменить в playlist?


// const playlist = {
//     name: "мой супер плейслист",
//     rating: 5,
//     tracks: ["трек-1", "трек-2", "трек-3"],
//     tracCount: 3,

//     // гет нейм и далее - метод обьекта. нужен чтобы работать со свойствами
//     // обьект хранит в себе набор характеристик и набор методов для работы с этими характереистикми

//     // внутри пузатых скобок параметр
//     getName: function (a) {
//        console.log("ага, это getName", a)
//    }
// }

// // console.log(playlist);
// // все что вызываем через точку и ставим пузатые скобки это метод
// // 5 идет в скобки 130 строки, оттуда идет в 131 строку после запятой. самой запятой в консоли не будет
// playlist.getName(5);
// // 5 идет в скобки 130 строки, оттуда идет в 131 строку после запятой




// const playlist = {
//     name: "Мой супер плейлист",
//     rating: 5,
//     tracks: ["трек-1", "трек-2", "трек-3"],



//     // changeName меняет имя. то есть свойство самого обьекта
//     // внутри функции есть такая штука как this. пока что просто запомнить, разбираться потом
//     // если я хочу что-то имзенить я не использую имя переменной (playlist) я использую this
// // выичляемое свойство
//     changeName(newName) {
//         console.log("this внутри changeName", this);
//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track)
//         // сначала выше запушил новый трек в массив, а потом сказал возьми свойство трек-каунт и запиши туда новое значение длины массива
   
//     },

//     updatedRating(newRating) {
//         this.rating = newRating
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     }
// };



// //  выводит общее количество треков до добавления новый трек на две строки ниже
// console.log(playlist.getTrackCount())


// playlist.changeName("Новое имя")


// playlist.addTrack("новый трек")


// // записал общее количество треков после добавления новый трек на строке выше
// console.log(playlist.getTrackCount())


// playlist.updatedRating(4)


// console.log(playlist)




// перебор обьекта #1

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }


// let totalFeedback = 0;

// // получи массив ключей из обьекта фидбек
// const keys = Object.keys(feedback);

// console.log(keys);

// // перебрали обьект
// for (const key of keys) {


//   // в консоли имена ключей в столбик (гуд нейтрал бэд)
//     // console.log(key);

//     // в консоли 5 10 3
//     console.log(feedback[key]);
    
//     // cчитаем общий тотал фидбеков
//     totalFeedback += feedback[key];
// }

// console.log("totalFeedback: ", totalFeedback);





// перебор обьекта №2
// если обджект кис (пример выше) возвращает массив ключей, то обжект вэлью возвращает массив значений
// то есть 3 5 10

// обджект вэлью нужен тогда когда хочешь что-то сделать со значением(к примеру узнать сумму)
// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }

// let totalFeedback = 0;

// const values = Object.values(feedback);

// console.log(values);



// for (const value of values) {

//     totalFeedback += value
// }

// console.log("totalFeedback: ", totalFeedback)





// массив обьектов
// это все массив друзей, каждый друг это сущность, описан обьектом (имя и статус онлайн или не онлайн)
// const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: true },
//     { name: "Ajax", online: false },
// ]

// console.table(friends)


// // на каждой итерации мы получаем доступ к каждому элементу массива (ко всем четырем обьектам)
// for (const friend of friends) {
//     console.log(friend)

// // добавили столбец newprop 555 в тейбл
//     friend.newprop = 555;
// }

// console.table(friends)




// первая задача ищем друга по имени

// const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: true },
//     { name: "Ajax", online: false },
// ]


// // перебрали массив, получили доступ к каждому элементу (то есть к каждому обьекту)
// const findFriendByName = function (allFriends, name) {
//     for (const friend of allFriends) {
//         console.log(friend.name === name)
//     }
// }


// console.log(findFriendByName(friends, "Poly"))
// // console.log (findFriendByName(friends, "Chelsy"))









// const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: true },
//     { name: "Ajax", online: false },
// ]


// // перебрали массив, получили доступ к каждому элементу (то есть к каждому обьекту) и можем посмотреть его свойство на каждой итерации
// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//            console.log(friend)
//         console.log(friend.name)

// // friend.name свойство. friendName - параметр
//         if (friend.name === friendName) {
//             return "Нашли"
//         }
//     }

//     return "не нашли"
// }


// console.log(findFriendByName(friends, "Poly"))
// // console.log (findFriendByName(friends, "Chelsy"))



// задача # 2 получаем из нашего массива друзей все имена наших друзей.

// const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: true },
//     { name: "Ajax", online: false },
// ]



// const getAllNames = function (allFriends) {
//     const names = []

// for (const friend of allFriends) {
//     console.log(friend.name)
//     names.push(friend.name)
//     }
//     // console.log(names)
//     return names;
// }

// console.log(getAllNames(friends))

// // френдс с 350 строки передали в 370 строку и оно записалось как аргуент в оллфрендс 359 строка




// задача №3. получить всех друзей которые онлайн

// const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: true },
//     { name: "Ajax", online: false },
// ]



// const getOnlineFriends = function (allFriends) {

// const onlineFriends = []

//     for (const friend of allFriends) {
//         console.log(friend)
//         // смотрим значение свойства онлайн. выводит тру или фолз
//         console.log(friend.online)

//         if (friend.online) {
//             onlineFriends.push(friend)
//         }
//     }

//     return onlineFriends
//  }

// console.log(getOnlineFriends(friends))





// задача №4. получаем оффлайн друзей


// const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: true },
//     { name: "Ajax", online: false },
// ]

// const getOfflineFriends = function (allFriends) {
//       const offlineFriends = []
//     for (const friend of allFriends) {
      
//         console.log(friend.online)

//         if (!friend.online) {
//             offlineFriends.push(friend)
//         }


//     }
//  return offlineFriends
// }

// console.log(getOfflineFriends(friends))




// 5 хотим узнать количество свойств в обьекте

// const x = {
//     a: 1,
//     b: 2,
//     с: 50,
//     d: 100
// }

// // в консоли 4
// console.log(Object.keys(x).length);








// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }


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
// ];


// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }




// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line



// for (const color of colors) {

//     hexColors.push(color.hex)
//     console.log(hexColors)
// }

// for (const color of colors) {
//     rgbColors.push(color.rgb)
//     console.log(rgbColors)
// }





// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

// if (productName === "Radar") {
//     console.log(1300)
//         return 1300
       
//     } else if (productName === "Scanner") {
        
//         return 2700
//     } else if (productName === "Droid") {
//         return 400
//     } else if (productName === "Grip") {
//        return 1200
//     } else {
//         return null
//     }

//   // Change code above this line
// }


// getProductPrice("Radar")
// getProductPrice("Grip")
// getProductPrice("Scanner")
// getProductPrice("Droid")
// getProductPrice("Engine")








// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//    const allValues = []
    
// for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
// //  console.log(product[propName])
//     allValues.push(product[propName])
//     }
//     }
//    console.log(allValues)
// return allValues
//   // Change code above this line
// }


// getAllPropValues("name")
// getAllPropValues("price")
// getAllPropValues("quantity")
// getAllPropValues("category")










