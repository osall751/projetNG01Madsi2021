export class RendezVous {
  constructor(private _id: number, private _lieu: string,
    private _description: string,
    private _date: Date
  ) { }

  public get date(): Date {
    return this._date;
  }
  public set date(value: Date) {
    this._date = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get lieu(): string {
    return this._lieu;
  }
  public set lieu(value: string) {
    this._lieu = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
