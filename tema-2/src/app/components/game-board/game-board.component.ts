import { Component } from '@angular/core';
import { GameEngineService } from "src/app/services/game-engine.service";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})

export class GameBoardComponent {
  constructor(public game: GameEngineService) {
    this.game.initTiles(3, 3);
  }
}
