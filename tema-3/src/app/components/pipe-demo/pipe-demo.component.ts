import { LowerCasePipe, UpperCasePipe } from "@angular/common";
import { Component, Pipe, PipeTransform } from '@angular/core';
import { MyPipePipe } from "src/app/pipes/my-pipe.pipe";

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent {
  options: string[] = ["uppercase", "lowercase", "titlecase", "date", "currency"];
  result: string = "";
  pipe: string = "";
  value: string = "";

  constructor(private myPipe: MyPipePipe){}

  public applyPipe(): void {
    this.result = this.myPipe.transform(this.value, this.pipe);
  }
}
