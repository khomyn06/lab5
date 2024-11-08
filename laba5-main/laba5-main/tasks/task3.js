// З масива людей(people) Вам потрібно знайти людину за іменем(name)
// Функція для пошуку людини за іменем у масиві
function findByName(people, name) {
    // Перебираємо масив людей
    for (let i = 0; i < people.length; i++) {
        // Якщо ім'я співпадає, повертаємо цього користувача
        if (people[i].name === name) {
            return people[i];
        }
    }
    // Якщо користувача не знайдено, повертаємо null
    return null;
}

module.exports = findByName;

// Приклад використання
const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Doe', age: 22 }
];

// Шукаємо людину за ім'ям "Jane"
const result = findByName(people, 'Jane');

// Виводимо результат в консоль
console.log(result); // { name: 'Jane', age: 30 }

// Шукаємо людину за ім'ям, якого немає у списку
const notFound = findByName(people, 'Michael');
console.log(notFound); // null
