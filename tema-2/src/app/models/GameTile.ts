export enum Symbol {
  X,
  O,
  undefined
}

export class GameTile {
  x: number;
  y: number;
  symbol: Symbol;

  constructor(x: number, y: number, symbol: string) {
    this.x = x;
    this.y = y;
    this.symbol = this.stringToSymbol(symbol);
  }

  public stringToSymbol(symbol: string ): Symbol {
    switch (symbol) {
      case "X":
        return Symbol.X;
      case "O":
        return Symbol.O;
      default:
        return Symbol.undefined;
    }
  }

  public symbolToString(): string {
    switch (this.symbol) {
      case Symbol.X:
        return "X";
      case Symbol.O:
        return "O";
      default:
        return "undefined";
    }
  }

  public setSymbol(symbol: string){
    this.symbol = this.stringToSymbol(symbol);
  }
}
