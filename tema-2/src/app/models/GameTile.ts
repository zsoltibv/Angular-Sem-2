enum Symbol {
  X,
  Y
}

export class GameTile {
  x: number = 0;
  y: number = 0;
  symbol: Symbol|undefined = undefined;
}
