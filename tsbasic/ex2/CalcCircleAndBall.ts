export class CalcCircleAndBall {
  //半径を表すプロパティ
  private _radius: number = 0;

  //円周率を表すプロパティ
  private readonly pi: number = 3.14;

  //コンストラクタ
  constructor(radius: number) {
    this._radius = radius;
  }

  //演習を得るメソッド
  getCircle(): number {
    const circle = 2 * this.pi * this._radius;
    return circle;
  }

  //炎の面積を得るメソッド
  getArea(): number {
    const area = this.pi * this._radius * this._radius;
    return area;
  }

  //球の表面積を得るメソッド
  getSurface(): number {
    const surface = 4 * this.pi * this._radius * this._radius;
    return surface;
  }

  //球の体積を得るメソッド
  getVolume(): number {
    const volume =
      (4 * this.pi * this._radius * this._radius * this._radius) / 3;
    return volume;
  }

  //半径のゲッタ
  get radius(): number {
    return this._radius;
  }
}
