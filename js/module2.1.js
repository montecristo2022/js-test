// total += cart[i];
// total = total + cart[i]
// аналоги


// Длина массива, то есть число его элементов, хранится в свойстве length. Это динамическая величина, которая изменяется автоматически при добавлении или удалении элементов.

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients.length); // 3



// Чаще всего мы заранее в коде не знаем какая будет длина массива.
// Для того чтобы получить значение последнего элемента применяется следующий подход -
//     длина массива всегда на единицу больше чем индекс последнего элемента.Используя формулу длина_массива - 1

//     почему больше???


// Конструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки.
// Тело цикла будет выполняться для значения каждого элемента.
// Это хорошая замена циклу for если не нужен доступ к счётчику итерации.
// счетчик итерации?


// Итерируемый объект(iterable) - это объект, который способен возвращать элементы по одному.
//  Кроме того, это объект, из которого можно получить итератор.




// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }


// индекс оф нужен для того чтобы узнать индекс элемента
// если элемент не найден индекс -1

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1



// includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false




// function slugify(title) {
//   // Change code below this line

// return title.toLowerCase().split(' ').join('+');
//   // Change code above this line
// }

// console.log(slugify('Top 10 benefits of React framework'));



// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

// const totalArray = firstArray.concat(secondArray)

// if (totalArray.length > maxLength) {
//   console.log(totalArray.slice(0, maxLength))
// }
//   return  totalArray
//     // Change code above this line
//   }



// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

// const totalArray = firstArray.concat(secondArray)

// if (totalArray.length > maxLength) {
//   return totalArray.slice(0, maxLength)
// }
//   return  totalArray
//     // Change code above this line
//   }



// const start = 3; {
// const end = 7;
// let totalPrice = 0;
// for (let i = start; i <= end; i += 1 ) // Change this line
  
//     totalPrice = totalPrice + i
//     console.log(totalPrice)
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



// const end = 6;
// const start = 3;
// let price = 0;
// for (i = start; i < end; i += 1)
//     price += i
//     console.log(price)


// function calculateTotal(number) {
//  // Change code below this line

// // const totalNumber = 0

// // for (let i = 0; i <= number; i += 1){
// //   console.log(number)


// // }

// let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;

//   // Change code above this line
// }

// function findLongestWord(string) {
//   // Change code below this line
// let str = string.split(" ");
//     let longest = 0;
//     let word = 0;
//     for (let i = 0; i < str.length; i += 1) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
            
//         }
//     }
// console.log(word)
//     return word;

//   // Change code above this line
// }


// findLongestWord("The quick brown fox jumped over the lazy dog gfgdfhfghggfh")
// findLongestWord("Google do a roll")
// findLongestWord("May the force be with you")


// for (const iterator of object) {
    
// }





// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity
// if(customerCredits >= totalPrice) {
//   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
// } else {
//   message = "Insufficient funds!"
// }
//   // Change code above this line
//   return message;
// }



function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line

  // Change code above this line
}



