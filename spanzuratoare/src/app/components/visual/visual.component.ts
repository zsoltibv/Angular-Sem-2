import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent {
  @Input() leftLives: number;

  getImagePath(): string {
    let basePath: string = ".\\assets\\hangman-pics\\";
    switch (this.leftLives) {
      case 0:
        return basePath + "5.png";
      case 1:
        return basePath + "4.png";
      case 2:
        return basePath + "3.png";
      case 3:
        return basePath + "2.png";
      case 4:
        return basePath + "1.png";
      default:
        return basePath + "1.png";
    }
  }
}
