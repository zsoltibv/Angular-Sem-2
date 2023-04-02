import { Injectable } from '@angular/core';
import { GameTile } from "src/app/models/GameTile";

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {

  gameTiles: GameTile[][] = []
  currentPlayer: string = "X";

  constructor() { }

  initTiles(rows: number, columns: number): void {

    for (let i = 0; i < rows; i++) {
      const rowsAux: GameTile[] = [];
      for (let j = 0; j < columns; j++) {
        rowsAux.push(new GameTile(i, j, "undefined"));
      }
      this.gameTiles.push(rowsAux);
    }
  }

  changePlayer(): void {
    if (this.currentPlayer == "X") {
      this.currentPlayer = "O";
    } else {
      this.currentPlayer = "X";
    }
  }

  isWin(): boolean {
    const numRows = this.gameTiles.length;
    const numCols = this.gameTiles[0].length;

    // Check rows
    for (let i = 0; i < numRows; i++) {
      let colWinner = this.gameTiles[i][0].symbolToString();
      for (let j = 1; j < numCols; j++) {
        if (this.gameTiles[i][j].symbolToString() !== colWinner || this.gameTiles[i][j].symbolToString() == "undefined") {
          colWinner = '';
          break;
        }
      }
      if (colWinner !== '') {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < numCols; i++) {
      let colWinner = this.gameTiles[0][i].symbolToString();
      for (let j = 1; j < numRows; j++) {
        if (this.gameTiles[j][i].symbolToString() !== colWinner || this.gameTiles[i][j].symbolToString() == "undefined") {
          colWinner = '';
          break;
        }
      }
      if (colWinner !== '') {
        return true;
      }
    }

    // Check diagonal from top left to bottom right
    let diagWinner = this.gameTiles[0][0].symbolToString();;
    for (let i = 1; i < Math.min(numRows, numCols); i++) {
      if (this.gameTiles[i][i].symbolToString() !== diagWinner || this.gameTiles[i][i].symbolToString() == "undefined") {
        diagWinner = '';
        break;
      }
    }
    if (diagWinner !== '') {
      return true;
    }

    // Check diagonal from top right to bottom left
    diagWinner = this.gameTiles[0][numCols - 1].symbolToString();;
    for (let i = 1; i < Math.min(numRows, numCols); i++) {
      if (this.gameTiles[i][numCols - i - 1].symbolToString() !== diagWinner || this.gameTiles[i][i].symbolToString() == "undefined") {
        diagWinner = '';
        break;
      }
    }
    if (diagWinner !== '') {
      return true;
    }

    return false;
  }

  isDraw(): boolean {
    const numRows = this.gameTiles.length;
    const numCols = this.gameTiles[0].length;

    let count:number = 0;

    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (this.gameTiles[i][j].symbolToString() !== "undefined") {
          ++count;
        }
      }
    }

    return count === numCols * numRows;
  }

  onTileClick(tile: GameTile): void {

    if (tile.symbolToString() == "undefined" && !this.isWin() && !this.isDraw()) {
      tile.setSymbol(this.currentPlayer);
      this.changePlayer();
    }

    if (this.isDraw()) {
      console.log("draw");
    }
    else if (this.isWin()) {
      console.log("win");
    }
  }
}
