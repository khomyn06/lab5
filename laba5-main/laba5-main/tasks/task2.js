const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// Ваше завдання: реалізувати наступні функції

// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  return students
    .filter(student => student.score > 80)
    .map(student => student.name);
}

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
// Перевіряємо, чи масив не порожній
    if (students.length === 0) {
        return 0; // Якщо масив порожній, повертаємо 0
    }
    // Змінна для накопичення загальної суми віку
    let totalAge = 0;
    // Перебираємо масив студентів і додаємо їх вік до totalAge
    for (let i = 0; i < students.length; i++) {
        totalAge += students[i].age;
    }
    // Ділимо загальну суму віку на кількість студентів, щоб отримати середній вік
    return totalAge / students.length;
}

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, student) {
  students.push(student); // Додаємо нового студента до масиву
  return students; // Повертаємо оновлений масив студентів
}

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
function removeStudentByName(students, name) {
  return students.filter(student => student.name !== name);
}

console.log(getTopScoringStudents(students)); // ["John", "Jane", "Jack"]
console.log(getAverageAge(students)); // 21
console.log(addStudent(students, { name: "Jake", age: 24, score: 88 })); // Додає нового студента "Jake"
console.log(removeStudentByName(students, "Jim")); // Видаляє студента з ім'ям "Jim"


module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };
