export default class Climate {
  private _id: string;

  constructor(id: string) {
    this._id = id;
  }

  // Getter
  public get id(): string {
    return this._id;
  }

  // Setter
  public set id(value: string) {
    this._id = value;
  }
}
