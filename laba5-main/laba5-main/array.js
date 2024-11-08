'use strict'
              [0,       1,        2,       3]
let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

// console.log(fruits)

//Як дізнатися довжину масива?
// console.log(fruits.length, "length")

//Як дізнатися елемент під певним індексом?
// console.log(fruits[2])

//Цикли з масивами
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Мутуючі методи - змінюють початковий масив:
// push() – додає елементи до кінця масиву, змінюючи його.
// pop() – видаляє останній елемент з масиву, змінюючи його.
// shift() – видаляє перший елемент з масиву, змінюючи його.
// unshift() – додає елементи на початок масиву, змінюючи його.
// splice() – може додавати або видаляти елементи в масиві, змінюючи його.

// Не мутуючі - не змінюють початковий масив:
// slice() – повертає новий масив, який є копією частини оригінального масиву.
// Оригінальний масив залишається без змін.
// map(callback) - cтворює новий масив, де кожен елемент — результат виклику колбек-функції 
// для кожного елемента вихідного масиву.
// filter(callback) - cтворює новий масив, що містить всі елементи вихідного масиву, 
// які пройшли перевірку колбек-функції.
// find(callback) - повертає перший елемент масиву, який задовольняє умову, описану у колбек-функції.
// ТА КУПА ІНШИХ)

// push()
fruits.push('Orange');
// console.log(fruits); // ['Apple', 'Banana', 'Cherry', 'Date', 'Orange']

// pop()
let lastFruit = fruits.pop();
// console.log(lastFruit); // 'Orange'
// console.log(fruits); // ['Apple', 'Banana', 'Cherry', 'Date']

// shift()
let firstFruit = fruits.shift();
// console.log(firstFruit); // 'Apple'
// console.log(fruits); // ['Banana', 'Cherry', 'Date']

// unshift()
fruits.unshift('Apricot');
// console.log(fruits); // ['Apricot', 'Banana', 'Cherry', 'Date']

// splice()
// let removedItems = fruits.splice(1, 1);
// console.log(removedItems); // ['Banana']
// console.log(fruits); // ['Apricot', 'Cherry', 'Date']
fruits.splice(1, 0, 'Blackberry', 'Blueberry');
// console.log(fruits); // ['Apricot', 'Blackberry', 'Blueberry', 'Cherry', 'Date']

// slice()
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ['Blackberry', 'Blueberry']
console.log(fruits); // ['Apricot', 'Blackberry', 'Blueberry', 'Cherry', 'Date']
