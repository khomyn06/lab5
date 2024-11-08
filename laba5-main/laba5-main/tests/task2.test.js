const { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName } = require('../tasks/task2');

const testStudents = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

describe('getTopScoringStudents', () => {
  it('returns an array of student names with scores above 80', () => {
    const result = getTopScoringStudents(testStudents);
    expect(result).toEqual(['John', 'Jane', 'Jack']);
  });
});

describe('getAverageAge', () => {
  it('returns the average age of the students', () => {
    const result = getAverageAge(testStudents);
    expect(result).toBe(21);
  });
});

describe('addStudent', () => {
  it('adds a new student to the array', () => {
    const newStudent = { name: "Tom", age: 24, score: 88 };
    const result = addStudent([...testStudents], newStudent);
    expect(result).toContainEqual(newStudent);
    expect(result.length).toBe(6);
  });
});

describe('removeStudentByName', () => {
  it('removes a student from the array by name', () => {
    const result = removeStudentByName([...testStudents], 'Jim');
    expect(result).not.toContainEqual({ name: "Jim", age: 19, score: 75 });
    expect(result.length).toBe(4);
  });
});
