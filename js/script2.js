// то что не понял.
// typeof


// при записи как ниже в консоли будет 8. снизу будет намбер.
// let quantity = prompt("сколько хотите купить?");
// quantity = Number (quantity)
// console.log(quantity);
// console.log(typeof quantity);


// если записать вот так слова намбер не будет в консоли. только 8
// let quantity = prompt("сколько хотите купить?");
// quantity = Number (quantity)
// console.log(quantity);


// switch
// если вы видите что вырисовывается дерево в котором вы берете одну переменную и вы сравниваете ее значение на РАВЕНСТВО ===,
//     то нам подходит инструкция свитч. дальше строка 45.


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




// в первые скобки вставляем значение, которое мы хотим сравнивать.
// {} дальше мы обьявлем кейсы. то есть случаи.
// на следующей строке ставим тело (price в нашем случае)
// в конце каждого кейса ставим брейк. это прервет выполнение свитча если будет совпадение.
// default ставим в конце в том случае если ничего не выполнилось

// const stars = 9;
// let price;

//     switch(stars) {
//         case 1:
//             price = 20
//             break;
        
//               case 2:
//             price = 30
//             break;
        
//               case 3:
//             price = 40
//             break;

//         default:
//             console.log("такого кол-ва звезд нет")
// }
    
// console.log(price)


// тернарник. аналог else if с выбором чего-то одного. тернарник используется только если есть два варианта.

// const balance =-1000;

// const message = balance >= 0 ? "позитивный баланс" : "тебе пизда, друг";
// console.log(message);


// аналог тернарника ниже



// const balance = -1000;
// let message;
// if (balance >= 0) {
//      message = "Позитивный Баланс"
// } else {
//     message = "тебе пизда, друг"
// }
// console.log(message);



