import { Component, Input } from '@angular/core';
import { GameTile } from "src/app/models/GameTile";
import { GameEngineService } from "src/app/services/game-engine.service";

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.css']
})
export class GameTileComponent {
  @Input() gameTile: GameTile;

  constructor(public game: GameEngineService) {}
}
