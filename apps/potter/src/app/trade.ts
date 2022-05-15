export class Trade {
  private _price = 8;
  private _totalPrice = 0;
  // 用來計算每本書購買次數
  private _bookCount = [0, 0, 0, 0, 0];
  // 不同種的書可以獲得的折扣
  private _discount = [1, 1, 0.95, 0.9, 0.8, 0.75];

  checkout(bucket: number[]) {
    for (let i = 0; i < bucket.length; i++) {
      console.log(bucket[i])
      this._bookCount[i]++;
    }
    this._totalPrice = this._discount[this._bookCount.filter(v => v !== 0).length] * this._price * bucket.length
  }

  get price() {
    return this._totalPrice;
  }
}
