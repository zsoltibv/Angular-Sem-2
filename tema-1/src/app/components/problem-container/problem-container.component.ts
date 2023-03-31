import { Component } from '@angular/core';
import { Problem } from "src/app/models/Problem";

@Component({
  selector: 'app-problem-container',
  templateUrl: './problem-container.component.html',
  styleUrls: ['./problem-container.component.css']
})
export class ProblemContainerComponent {
  listOfProblems: Problem[] = [
    { id: 1, name: "Problem 1" },
    { id: 2, name: "Problem 2" },
    { id: 3, name: "Problem 3" }
  ]
}
