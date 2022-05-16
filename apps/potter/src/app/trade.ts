export class Trade {
  private _price = 8;
  private _totalPrice = 0;
  // 用來計算每本書購買次數
  private _bookCount = [0, 0, 0, 0, 0];
  // 不同種的書可以獲得的折扣
  private _discount = [1, 1, 0.95, 0.9, 0.8, 0.75];

  checkout(bucket: number[]) {
    this._totalPrice = 0;
    this._bookCount = [0, 0, 0, 0, 0];
    for (let i = 0; i < bucket.length; i++) {
      this._bookCount[bucket[i] - 1] += 1;
    }

    while (this._bookCount.filter(v => v > 0).length > 0) {
      if (this._bookCount.filter(v => v > 0).length == 5 && this._bookCount.filter(v => v == 1).length == 2) {
        this._bookCount[this._bookCount.indexOf(1)]++;
        this._bookCount[this._bookCount.indexOf(1)]--;
      }
      this._totalPrice += this._discount[this._bookCount.filter(v => v > 0).length] * this._price * this._bookCount.filter(v => v > 0).length;
      this._bookCount = this._bookCount.filter(v => v > 0).map(v => v - 1);

    }
  }

  get price() {
    return this._totalPrice;
  }
}
