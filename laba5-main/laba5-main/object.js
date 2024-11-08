'use strict'

let car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
  isElectric: false
};

// car - назва обʼєкту
// brand, model, year, isElectric - ключі обʼєкта
// 'Toyota', 'Corolla', 2020, false - значення

// console.log(car)

//Як звернутися до певної ключа обʼєкта і прочитати його значення
// console.log(car.brand)

//Додавання або зміна ключа і значення обʼєкта
// car.color = 'Red';
// car.year = 2022;
// console.log(car)

//Об'єкти можна перебирати за допомогою циклу for...in

// for (let key in car) {
//   console.log(key,":",car[key]);
// }

//Вкладені обʼєкти
let student = {
  name: 'Jane',
  age: 22,
  address: {
    city: 'New York',
    zip: '10001'
  }
};
// console.log(student); 
console.log(student.address.city); 
