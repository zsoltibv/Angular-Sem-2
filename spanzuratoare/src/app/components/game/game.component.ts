import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  listOfWords: string[] = ["ananas", "masa", "masina"];
  chosenWordIndex: number = 0;
  chosenWord: string[] = [];
  guessedLetters: number[] = [];
  inputWord: string = "";
  leftLives: number = 4;

  ngOnInit(): void {
    this.generateRandomWord();
    this.initializeVisibleLetters();
  }

  generateRandomWord(): void {
    this.chosenWordIndex = Math.floor(Math.random() * 10 % 3);
    console.log(this.chosenWordIndex);
    this.chosenWord = this.listOfWords[this.chosenWordIndex].split('');
  }

  initializeVisibleLetters(): void {
    this.guessedLetters.push(0);
    this.guessedLetters.push(this.chosenWord.length - 1);
    console.log(this.guessedLetters);
  }

  isAmongstGuessedLetters(letterIndex: any): boolean {
    return this.guessedLetters.includes(letterIndex);
  }

  guessLetter(): void {
    console.log(this.inputWord);
    let foundLetter: boolean = false;
    for (let i = 0; i < this.chosenWord.length; i++) {
      if (this.chosenWord[i] === this.inputWord) {
        this.guessedLetters.push(i);
        foundLetter = true;
      }
    }
    if (foundLetter == false) {
      if (this.leftLives > 0) {
        this.leftLives--;
      }
      console.log(this.leftLives);
    }
    this.inputWord = "";
    if(this.leftLives==0){
        for (let i = 0; i < this.chosenWord.length; i++) {
          this.guessedLetters.push(i);
        }
      
    }
  }
  reloadPage() {
    window.location.reload();
  }
}
