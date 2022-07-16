

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();



// const user = {
//     tag: "Mango",
//     showTag() {
//         console.log("ShowTagTHIS", this);
//             console.log("ShowTagTHIS", this.tag);
//     },
// };

// user.showTag()

// const randomShowTag = user.showTag

// randomShowTag()




//cнизу нерабочее говно
// const user = {
//     tag: "Mango",
//     showTag() {
//         console.log("ShowTagTHIS", this);
//             console.log("ShowTagTHIS", this.tag);
//     },
// };



// const inAction = function (action) {
//     console.log(action)

//     action()
// }


// //когда я передеаю user.showTag я в функцию inAction в параметр action передаю ссылку на функцию  showTag
// // и потом функцию вызывается вот так  action() в функции inAction (перед закрывающей скобкой)
// inAction(user.showTag)










// const counter = {
//     value: 0,
//     increment(value) {
//         console.log("incrementValue", this)
//       console.log(this.value += value)
//     },

//     decrement(value) {
//         console.log("decrementValue", this)
//       console.log (this.value -= value)
//     }
// }


// const updateCounter = function (value, operation) {
//     operation(value)
// }


// updateCounter(10, counter.increment.bind(counter))
// updateCounter(3, counter.decrement.bind(counter))

// console.log(counter)








// const changeColor = function (color) {


//     console.log("changeColorTHIS", this)
//     this.color = color
    
// }


// const hat = {
//     color: "black"
// }

// const sweater = {
//     color: "green"
// }


// const huina = {
//     color: "hui"
// }


// const changeHatColor = changeColor.bind(hat)
// const changeSweaterColor = changeColor.bind(sweater)
// const huisyka = changeColor.bind(huina)


// // changeHatColor("red")
// // console.log(hat)

// changeHatColor()
// changeSweaterColor()
// huisyka()





// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, добро пожаловать в «Steam»."

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Поли"); // "Поли, добро пожаловать в «Gmail»."






// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };



//задача 1 дз

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//     checkPizza(pizzaName) {
    
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



// console.log(pizzaPalace.order("Smoked"))
// console.log(pizzaPalace.order("Four meats"))
// console.log(pizzaPalace.order("Big Mike"))
// console.log(pizzaPalace.order("Viennese"))



//задача дз 2











// задача дз 3


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


// console.log(historyService.getOrdersByEmail("solomon@topmail.net"))
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"))






// const Car = function (value) {
//   console.log(this)
  
//     this.a = value
// }


// const myCar = new Car(5)
// console.log(myCar)



// const myCar2 = new Car(10)
// console.log(myCar2)




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

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;



// for (const el in child) {
//   console.log(child[el])
// }



// const Person = function () {

//   this.lastName = "kirill";
//   this.age = 30;
// }

// const person = new Person
// const person2 = new Person

// console.log(person)
// console.log(person2)




// const Person = function (firstName, lastName) {

//   this.lastName = firstName;
//   this.age = lastName;
// }

// const person = new Person("Aleks", "Bistro")
// const person2 = new Person("Vitya", "Aka")

// console.log(person)
// console.log(person2)






// const Person = function ({name, nation, age } = {}) {
  

//   this.name = name;
//   this.nation = nation;
//   this.age = age;
//   this.legs = 2;


//   this.newNation = function (newNation) {
//     this.nation = newNation;
//   }

// }

// const user1 = new Person({ name: "Jon", nation: "irish", age: 30 })
// user1.newNation("England")


// const user2 = new Person ({name: "Jonni", nation: "RomeEmpire", age: 12})
// console.log(user1)
// console.log(user2)




// const Person = function ({name, nation, age } = {}) {
  

//   this.name = name;
//   this.nation = nation;
//   this.age = age;
//   this.legs = 2;


// }

// console.dir(Person)
// Person.prototype.changeNation = function (newNation) {
//     this.nation = newNation;
// }
  
// Person.prototype.changeName = function (newName) {
//     this.name = newName;
// }

// const user1 = new Person({ name: "Jon", nation: "irish", age: 30 })

// user1.changeNation("German")

// const user2 = new Person({ name: "Jonni", nation: "RomeEmpire", age: 12 })

// user2.changeName("Sasha")

// console.log(user1)
// console.log(user2)







// class Person {
//   constructor({name, nation, age } = {}) {

//     //в конструкторе пишет шаблон по которому создан экземпляр класса
//       this.name = name;
//   this.nation = nation;
//   this.age = age;
//   this.legs = 2;
//   }

//   changeName (newName) {
//    this.name = newName;
//  }
// }



// const user1 = new Person({
//   name: "Jon",
//   nation: "irish",
//   age: 30
// })

//  user1.changeName("Sasha")

// console.log(user1)







// class Person {
//      #hui = "hui@mail.ru";
//   constructor({name, nation, age } = {}) {
 
//     //в конструкторе пишет шаблон по которому создан экземпляр класса
//       this.name = name;
//   this.nation = nation;
//   this.age = age;
//   this.legs = 2;
//   }

//     getHui() {
//     return this.#hui;
//   }

//   setHui(newHui) {
//     this.#hui = newHui
//   }

//   changeName (newName) {
//    this.name = newName;
//   }
  


// }

// const user1 = new Person({
//   name: "Jon",
//   nation: "irish",
//   age: 30
// })



// console.log(user1)
// console.log(user1.getHui())
// user1.setHui("kiwi@gmail.com")
// console.log(user1.getHui())





// class Blogger {
//   constructor({ email = "lala@gmail.com", age, numberOfPosts, topics } = {}) {
   
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
    
//   }

//   getInfo() {
//     return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//     updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }
// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });


// const kiwi = new Blogger({
//   // email: 'kiwi@mail.com',
//   age: 29,
//   numberOfPosts: 90,
//   topics: ['teck', 'dancing'],
// });

// console.log(kiwi.getInfo())
// kiwi.updatePostCount(12)
// console.log(kiwi.getInfo())



// console.log(mango.getInfo())
// mango.updatePostCount(8)
// console.log(mango.getInfo())

















// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (r, g, n) => {
//   return r + g * n;
// };

// console.log(getWage(baseSalary, overtime, rate));






// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());



// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true







// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тело класса ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"
