# js-test

// const stars = 9;
// let price;

// switch(stars) {
// case 1:
// price = 20
// break;

// case 2:
// price = 30
// break;

// case 3:
// price = 40
// break;

// default:
// console.log("такого кол-ва звезд нет")
// }

// console.log(price)

как сделать так чтобы в кейсе цена была не строго 20, 30, 40, а 20-29

параметры это что в функцию обявили как локальную переменную. аргумент это значение для параметров во время вызова

зачем тут этот знак? перед 5 \* ????

const question = prompt("спроси меня")
const number = Math.floor(Math.random() \* 5)
let message
switch (number) {
case 1:
message = "да"
break;

    case 2:
      message = "нет"
        break;

    case 3:
      message = "как повезет"
        break;

    case 4:
     message = "скорее да"
        break;

    case 5:
            message = "скорее нет"
        break;

}

console.log(`на этот вопрос: ${question}, я скажу тебе что ${message}`)
