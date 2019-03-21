expect.extend({
  toBeDivisibleBy(received, argument) {
    const pass = received % argument == 0;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be divisible by ${argument}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be divisible by ${argument}`,
        pass: false,
      };
    }
  },
});

test('even and odd numbers', () => {
  expect(100).toBeDivisibleBy(2);
  expect(101).not.toBeDivisibleBy(2);
});