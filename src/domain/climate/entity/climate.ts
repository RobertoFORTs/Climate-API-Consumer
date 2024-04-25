export default class Climate {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  // Getter
  public get getId(): string {
    return this.id;
  }

  // Setter
  public set setId(value: string) {
    this.id = value;
  }
}
