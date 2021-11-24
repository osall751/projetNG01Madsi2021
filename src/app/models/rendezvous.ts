export class RendezVous {
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
  public get idRv(): number {
    return this._idRv;
  }
  public set idRv(value: number) {
    this._idRv = value;
  }
  constructor(
    private _idRv: number,
    private _lieu: string,
    private _description: string,
    private _date: Date
  ) { }
}
