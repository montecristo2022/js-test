
// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9])
// console.log(numbers)



// снизу spread. аналог конката сверху
// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];
// console.log(numbers)






// ищет самео большое число распылив его, без распыления не работает потому что тогда это единый массив
// операция  не меняет массив, а лишь делает его копию.
// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(...temps))





// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps)






// распыление обьекта
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = {
//     ...a,
//     ...b,
// }

// console.log(c) //{x: 0, y: 2, z: 3} консоль




// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings); //{theme: 'light', showNotifications: false, hideSidebar: true}




// деструктуризация
// учимся распоковывать обьекты и массивы

// const playlist = {
//     name: "мой супер плейслист",
//     rating: 5,
//     tracks: ["трек-1", "трек-2", "трек-3"],
//    tracCount: 3
// }


// // если слева от равно такие скобки это не литерал обьекта
// // это деструктиризация
// // имя локальной переменной должно совпадать с именем свойства этого обьекта
// const { rating, tracks, name, tracCount} = playlist
// console.log(rating)
// console.log(tracks)
// console.log(name)
// console.log(tracCount)




// аналог деструктиризации. некомфотрный, но работает
// console.log(playlist.name,
//     playlist.rating,
//     playlist.tracks,
//     playlist.tracCount
// );




// const playlist = {
//     name: "мой супер плейслист",
//     rating: 5,
//     tracks: ["трек-1", "трек-2", "трек-3"],
//    tracCount: 3
// }


// если слева от равно такие скобки это не литерал обьекта
// это деструктиризация
// имя локальной переменной должно совпадать с именем свойства этого обьекта
// прайс = 555 значение по умолчанию
// const { rating, tracks, name, tracCount, price = 555} = playlist

// console.log(rating)
// console.log(tracks)
// console.log(name)
// console.log(tracCount)
// console.log(price)












// const playlist = {
//     name: "мой супер плейслист",
//     rating: 5,
//     tracks: ["трек-1", "трек-2", "трек-3"],
//    tracCount: 3
// }

// // локальная переменная имеет другое имя чем свойство на обьекте
// // меняем имя
// const { rating,
//     tracks,
//     name,
//     // в локальную переменную numberOfTracksположи значение свойства tracCount из обьекта playlist
//     tracCount: numberOfTracks,
// } = playlist;
   


// console.log(numberOfTracks)







// глубокая деструктуризация






// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//  place: "Arizona",
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   avatar,
//   name,
//   tag,
// place,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, place, avatar, followers, views,  likes);






// деструктуризация массива происходит по порядку


// const rgb = [255, 100, 80]

// const [a, b, c] = rgb

// console.log(a, b, c) //255 100 80




// пропускаем b

// const rgb = [255, 100, 80]

// const [a, , c] = rgb

// console.log(a, c) //255 80







// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// // Object.entries возвращает массив массивов нулевым элементом которого стоит ключ, а первым значение
// // пример 'kiwi', 4 из консоли



// const entries = Object.entries(authors);

// // console.log(entries)

// for (const entry of entries) {


//     // мы говорим возьми массив энтри и деструктиризируй нулевой элемент в переменную нейм и первый элемент в переменную rating
//     // const [name, rating] = entry;

// // выне аналог
// //     const name = entry[0]
// //     const rating = entry[1]


//     console.log(name, rating)
// }










// операция rest (сбор)


// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//  place: "Arizona",
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };


// все что мы не деструкторизировали явно уходит на restProps.
// const { name, tag, place, ...restProps} = profile;



// console.log(name, tag, place)

// здесь avatar и stats
// console.log(restProps)








// const fn = function (params) { };

// // снизу запись паттерн обьект настроек
// fn({
//     age: 10,
//     friends: 5,
//     isOnline: true,
//     hobbies: [],
//     games: {},
//     rating: 6,
// })






// деструктуризация внутри функции
// при вызове этой функции в параметре userProfile будет обьект целиком этого пользователя (от нейм до лайкс)

// const showProfileInfo = function (userProfile) {
//     const { name, tag, place, avatar, stats: { followers, views, likes } } = userProfile
//     console.log(name, tag, place, avatar, followers, views, likes)
// }

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//  place: "Arizona",
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile)













// const cart = {
//   items: [],
//     getItems() {
//         // return this.items;
//   },
//     add(product) {
//       this.items.push(product)
//   },
//     remove(productName) {

//         for (let i = 0; i < this.items.length; i += 1) {
//             console.log(this.items[i]);
            
// const item = this.items[i]

//             if (productName === item.name) {
//                 console.log("нашли такой продукт", productName)
//             }

//         }

//     },
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// // console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// // console.table(cart.getItems());


// cart.remove('🍋')







// doStuffWithBook({
//   title: "Последнее королевство",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   public: true,
// });



// // Это можно сделать в теле функции.
// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, public } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   // И так далее
// }





// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = (Math.max(...scores));
// const worstScore = (Math.min(...scores));

// console.log(bestScore, worstScore)





// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = (Math.max(...allScores));
// const worstScore = (Math.min(...allScores));

// console.log(allScores)
// console.log(bestScore)
// console.log(worstScore)









// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     const newObject = {completed: completed, category:category, priority:priority, ...data};

//   // Change code above this line
// }


// makeTask({})
// //{ category: "General", priority: "Normal", completed: false }


// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// //{ category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// makeTask({ category: "Finance", text: "Take interest" })
// //{ category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// makeTask({ priority: "Low", text: "Choose shampoo" })
// //{ category: "General", priority: "Low", text: "Choose shampoo", completed: false }





// // Change code below this line
// function add(...args) {
//   // Change code above this line
//     let total = 0
//     for (const arg of args) {
//         total += arg
          
//     }
//     console.log(total)
//     return total
// }



// add(15, 27)
// add(12, 4, 11, 48)
// add(32, 6, 13, 19, 8)
// add(74, 11, 62, 46, 12, 36)








// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line

//     for (const arg of args) {
    
//     if (array.includes(arg) ) {
//         console.log(arg)
//         matches.push(arg)
//    }
// }
    
  
//   // Change code above this line
//   return matches;
// }


// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)
// findMatches([63, 11, 8, 29], 4, 7, 16)









// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook("Мгла");
// bookShelf.addBook("Страж снов");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]






// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {

    
// // this.potions.splice(potionName, 1)
// // this.potions.splice(1, 1)
// //  potions: ["Speed potion", "Stone skin"],
//   },
// };


// atTheOldToad.removePotion("Dragon breath")
// atTheOldToad.removePotion("Speed potion")




// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//         if (potion.name === newPotion.name) {
//              return `Error! Potion ${newPotion} is already in your inventory!`;
//         }
//       }
//         this.potions.push(newPotion);
//     },
  
  
  



  
  
//   removePotion(potionName) {
//       for (let i = 0; i < this.potions.length; i += 1) {
//           if (this.potions[i] === potionName)
//       }

//     },
  




  


  
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };




// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook("Мгла");
// bookShelf.addBook("Страж снов");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]





// const numbers = [1, 3, 5, 10, 15]

// const summ = newArr => {
//     let total = 0;
//     for (const number of newArr) {
//         total += number
//     }
 
//     return total
// }

// console.log(summ(numbers))
