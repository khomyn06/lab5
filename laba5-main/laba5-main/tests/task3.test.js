const findByName = require('../tasks/task3');

describe('findByName', () => {
  test('finds the person by name', () => {
    const input = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 }
    ];

    expect(findByName(input, 'Alice')).toEqual({ name: 'Alice', age: 25 });
    expect(findByName(input, 'Bob')).toEqual({ name: 'Bob', age: 30 });
  });

  test('returns undefined if the name is not found', () => {
    const input = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 }
    ];

    expect(findByName(input, 'Charlie')).toBeUndefined();
  });

  test('returns undefined for an empty array', () => {
    const input = [];
    expect(findByName(input, 'Alice')).toBeUndefined();
  });

  test('returns the first match if multiple people have the same name', () => {
    const input = [
      { name: 'Alice', age: 25 },
      { name: 'Alice', age: 30 }
    ];

    expect(findByName(input, 'Alice')).toEqual({ name: 'Alice', age: 25 });
  });
});
