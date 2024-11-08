const filterAdults = require('../tasks/task1');

describe('filterAdults', () => {
  test('filters out people under 18 years old', () => {
    const input = [
      { name: 'Alice', age: 17 },
      { name: 'Bob', age: 20 },
      { name: 'Charlie', age: 16 },
      { name: 'David', age: 25 }
    ];

    const output = [
      { name: 'Bob', age: 20 },
      { name: 'David', age: 25 }
    ];

    expect(filterAdults(input)).toEqual(output);
  });

  test('returns an empty array when input is empty', () => {
    const input = [];
    const output = [];
    expect(filterAdults(input)).toEqual(output);
  });

  test('returns an empty array when all people are under 18', () => {
    const input = [
      { name: 'Alice', age: 17 },
      { name: 'Charlie', age: 16 }
    ];
    const output = [];
    expect(filterAdults(input)).toEqual(output);
  });

  test('returns the same array when all people are 18 or older', () => {
    const input = [
      { name: 'Bob', age: 20 },
      { name: 'David', age: 25 }
    ];
    const output = [
      { name: 'Bob', age: 20 },
      { name: 'David', age: 25 }
    ];
    expect(filterAdults(input)).toEqual(output);
  });
});
