import { Component } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})

export class GameBoardComponent {
  boardSize: any[] = [1, 2, 3, 4, 5, 6, 7, 8]

  // gameBoard: GameTile[] = [
  //   { id: 1, name: "Problem 1" },
  //   { id: 2, name: "Problem 2" },
  //   { id: 3, name: "Problem 3" }
  // ]
}
