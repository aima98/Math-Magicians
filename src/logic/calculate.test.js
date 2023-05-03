import calculate from './calculate';

describe('test for calculations', () => {
  const c = { total: 5, next: null, operation: null };

  it('clear operation with AC', () => {
    expect(calculate(c, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
  });

  it('check for correct calculation', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '=')).toStrictEqual({ total: '15', next: null, operation: null });
  });
});
