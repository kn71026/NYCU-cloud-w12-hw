import { Trade } from './trade';

describe('Trade', () => {
  it('should create an instance', () => {
    expect(new Trade()).toBeTruthy();
  });
  const trade = new Trade();

  // first test case: 1 books = $8
  test('first test case', () => {
    trade.checkout([1]);
    expect(trade.price).toBe(8 * 1);
  });

  // second test case: 2 difference books = $8 * 2 * 0.95
  test('second test case', () => {
    trade.checkout([1, 2]);
    expect(trade.price).toBe(8 * 2 * 0.95);
  });

  // third test case: 2 difference books and 1 same books = $8 * 2 * 0.95 + 8 * 1
  test('third  test case', () => {
    trade.checkout([1, 1, 2]);
    expect(trade.price).toBe(8 * 2 * 0.95 + 8 * 1);
  });
  // fourth test case: 4 difference books and 2 difference books = $8 * 4 * 0.8 + 8 * 2 * 0.95
  test('fourth  test case', () => {
    trade.checkout([1, 2, 2, 3, 3, 4]);
    expect(trade.price).toBe(8 * 4 * 0.8 + 8 * 2 * 0.95);
  });

  // fifth test edge case
  test('fifth test edge case', () => {
    trade.checkout([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5]);
    expect(trade.price).toBe(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
  });

});
