export class Trade {
  private _price = 8;
  private _totalPrice = 0;

  checkout(bucket: number[]) {
    this._totalPrice += bucket.length * this._price;
  }

  get price() {
    return this._totalPrice;
  }
}
