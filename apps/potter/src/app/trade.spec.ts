import { Trade } from './trade';

describe('Trade', () => {
  it('should create an instance', () => {
    expect(new Trade()).toBeTruthy();
  });
  const trade = new Trade();

  // first test case: 1 books = $8
  test('first test case', () => {
    trade.checkout([1]);
    expect(trade.price).toBe(8);
  });

  // second test case: 2 difference books = $8*2*0.95
  test('second test case', () => {
    trade.checkout([1, 2]);
    expect(trade.price).toBe(15.2);
  });
});
