'use strict'

// Масив об'єктів – це потужна структура даних, яка дозволяє зберігати 
// та обробляти набори складних даних.

// Масив об'єктів – це масив, де кожен елемент є об'єктом.
// Така структура зручна для зберігання колекцій пов'язаних даних,
// наприклад, списку студентів, товарів в інтернет-магазині, замовлень і т.д.

let students = [
  { name: 'John', age: 20, isEnrolled: true }, //0
  { name: 'Jane', age: 22, isEnrolled: false },//1
  { name: 'Alice', age: 19, isEnrolled: true }//2
];
// console.log(students[1])
// console.log(students[0], "One student");
// console.log(students[0].name);

//Перебір масиву об'єктів
//Приклад перебору через for 

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name, i);
// }

// Колбек (callback) – це функція, яка передається як аргумент в іншу функцію і викликається пізніше, 
// коли настане відповідний момент або буде виконана певна умова.

// Навіщо потрібні колбеки?
// Колбеки дозволяють керувати порядком виконання коду, особливо коли йдеться про 
// асинхронні операції (наприклад, завантаження даних із сервера).
// Методи масивів використовують колбеки для виконання операцій над кожним елементом масиву.

// const greet = (name, callback) => { //(Vadym, sayGoodbye)
//   console.log('Hello, ' + name);
//   callback(); //sayGoodbye()
// }

// function sayGoodbye() {
//   console.log('Goodbye!');
// }

// greet('Roman', sayGoodbye);
// Виведе:
// Hello, Alice
// Goodbye!

// Наприклад, використання колбеків для методів масивів

let numbers = [1, 2, 3, 4];

// numbers.forEach(function(number) {
//   console.log(number);
// });

// let doubled = numbers.map(function(number) {
//   return number * 2;
// });

// function firstNumber(number) {
//   if(number > 2){
//     return false
//   }

//   return true
// }

// const secondNumber = (number) => number > 2 ? false : true

// let double = numbers.map((item) => {
//   if(item % 2 !== 0) {
//     return item
//   }
//   return item * 4
// })
// // console.log(doubled); // [2, 4, 6, 8]
// console.log(double); // [2, 4, 6, 8]

// let evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0;
// });

// let oddNumbersArray = numbers.filter((number) => number % 2 !== 0)
// console.log(oddNumbersArray); // [2, 4]

// Робота з масивом обʼєктів
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 22 },
  { name: 'Jack', age: 35 },
  { name: 'Alice', age: 19 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 29 },
  { name: 'Charles', age: 49 },
  { name: 'Bred', age: 68 }
];

// Фільтрація людей молодше 25 років
const youngPeople = people.filter(person => person.age < 25);

// console.log(youngPeople);

// Використання методу map для додавання нового поля
const updatedPeople = people.map((person) => ({
  ...person, // Скопіювали всі дані, які були в об'єкті people, в новий об'єкт 
  status: person.age >= 30 ? 'Adult' : 'Young' // Додаємо нове поле 'status'
}));

// console.log(updatedPeople)

// person.age >= 30 ? 'Adult' : 'Young' - ця конструкція це тернарний оператор
// Тернарний оператор — це коротка форма для написання умовного виразу. 
// Він складається з трьох частин і дозволяє приймати рішення між двома значеннями на основі умови.
// condition ? valueIfTrue : valueIfFalse

// condition: Умова, яка буде перевірена. Якщо умова істинна (true), буде виконано перше значення. 
// Якщо умова хибна (false), буде виконано друге значення.
// valueIfTrue: Значення, яке буде повернуто, якщо умова істинна.
// valueIfFalse: Значення, яке буде повернуто, якщо умова хибна.

// Розглянемо цей приклад:
const age = 28;
const status = age >= 30 ? 'Adult' : 'Young';
// age >= 30: Це умова, що перевіряє, чи є age більшим або дорівнює 30.
// 'Adult': Це значення буде повернуто, якщо умова істинна (age >= 30).
// 'Young': Це значення буде повернуто, якщо умова хибна (age < 30).
// У цьому випадку, оскільки age дорівнює 28, умова age >= 30 є хибною, отже, status буде 'Young'.

// console.log(updatedPeople);




