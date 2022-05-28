export class GirlFriend {
  //名前
  private _name: string;
  //年
  private _birthYear: number;
  //月
  private _birthMonth: number;
  //日
  private _birthDay: number;

  //コンストラクタ
  constructor(
    name: string,
    birthYear: number,
    birthMonth: number,
    birthDay: number
  ) {
    this._name = name;
    this._birthYear = birthYear;
    this._birthMonth = birthMonth;
    this._birthDay = birthDay;
  }

  isBirthMonth(month: number): boolean {
    if (month == this._birthMonth) {
      return true;
    } else {
      return false;
    }
  }

  //各メソッド
  getAge(year: number): number {
    return year - this._birthYear;
  }

  get name(): string {
    return this._name;
  }

  get birthYear(): number {
    return this._birthYear;
  }

  get birthMonth(): number {
    return this._birthMonth;
  }

  get birthDay(): number {
    return this._birthDay;
  }
}
