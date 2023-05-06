// 1. Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания. 

function swapCase(str) {
  
  let result = "";
  
  for (let i = 0; i < str.length; i++) {
    
    let char = str[i];
    
    if (char >= "A" && char <= "Z") {
    
      result += char.toLowerCase();
    }
    
    else if (char >= "a" && char <= "z") {
      
      result += char.toUpperCase();
    }
    
    else if (char >= "0" && char <= "9") {
      
      result += "_";
    }
    
    else {
      result += char;
    }
  }
  
  return result;
}


console.log(swapCase("Hello World! 123")); // hELLO wORLD! ___




// 2. Написать функцию, которая получает url и выводит подробную информацию о нем. Например: url “https://itstep.org/ua/about”, информация  “протокол: https, домен: itstep.org, путь: /ua/about”
// Функция, которая принимает url и выводит информацию о нем
function parseUrl(url) {
 
  let urlObj = new URL(url);
  
  let protocol = urlObj.protocol;
  let domain = urlObj.hostname;
  let path = urlObj.pathname;
  
  console.log(`протокол: ${protocol}, домен: ${domain}, путь: ${path}`);
}


parseUrl("https://itstep.org/ua/about"); // протокол: https:, домен: itstep.org, путь: /ua/about

/*
3. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.
1. Распечатка чека на экран.
2. Подсчет общей суммы покупки.
3. Получение самой дорогой покупки в чеке.
4. Подсчет средней стоимости одного товара в чеке.
*/

let receipt = [
  {name: "Хлеб", quantity: 2, price: 1.8},
  {name: "Молоко", quantity: 1, price: 5.9},
  {name: "Яйца", quantity: 10, price: 2.3},
  {name: "Сыр", quantity: 0.5, price: 5.1},
];


function printReceipt(receipt) {
  
  console.log("Чек:");
  
  for (let item of receipt) {
    
    console.log(`${item.name} - ${item.quantity} шт. по ${item.price} ман.`);
  }
}


function getTotal(receipt) {
  
  let total = 0;
  
  for (let item of receipt) {
  
    total += item.quantity * item.price;
  }
  
  return total;
}


function getMostExpensive(receipt) {
  
  let mostExpensive = receipt[0];
  
  for (let i = 1; i < receipt.length; i++) {
    
    let item = receipt[i];
    
    if (item.quantity * item.price > mostExpensive.quantity * mostExpensive.price) {
      
      mostExpensive = item;
    }
  }
 
  return mostExpensive;
}


function getAverage(receipt) {

  let count = 0;
  
  for (let item of receipt) {
    
    count += item.quantity;
  }
  
  return getTotal(receipt) / count;
}


printReceipt(receipt); 

console.log(getTotal(receipt)); // 287.9

console.log(getMostExpensive(receipt)); 

console.log(getAverage(receipt)); 


/*
4. Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
Написать функцию, которая принимает массив стилей и 
текст, и выводит этот текст с помощью document.write() в тегах 
<p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
*/



let styles = [
  {name: "color", value: "red"},
  {name: "font-size", value: "24px"},
  {name: "text-align", value: "center"},
  {name: "text-decoration", value: "underline"},
];


function writeText(styles, text) {
  
  let style = "";
  
  for (let item of styles) {
    
    style += `${item.name}:${item.value};`;
  }
  
  document.write(`<p style="${style}">${text}</p>`);
}


writeText(styles, "Sahib Shakhayev"); // <p style="color:red;font-size:24px;text-align:center;text-decoration:underline;">Sahib Shakhayev</p>


/*
5. Создать объект, описывающий автомобиль (производитель, 
  модель, год выпуска, средняя скорость), и следующие функции 
  для работы с этим объектом.
  1. Функция для вывода на экран информации об автомобиле.
  2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
  Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час
*/

let car = {
  manufacturer: "Chevrolet",
  model: "Malibu",
  year: 2018,
  averageSpeed: 100,
};


function showCarInfo(car) {
  
  console.log(`Производитель: ${car.manufacturer}`);
  console.log(`Модель: ${car.model}`);
  console.log(`Год выпуска: ${car.year}`);
  console.log(`Средняя скорость: ${car.averageSpeed} км/ч`);
}


function getTimeForDistance(car, distance) {

  let time = distance / car.averageSpeed;
  
  let breaks = Math.floor(time / 4);
  
  return time + breaks;
}


showCarInfo(car); 


console.log(getTimeForDistance(car, 500)); 
