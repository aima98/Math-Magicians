import operate from './operate';

describe('test for the various operations', () => {
  it('Sums two values', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it('Cannot divide by zero', () => {
    expect(operate(5, 0, '÷')).toBe('Cannot divide by 0.');
  });
});
