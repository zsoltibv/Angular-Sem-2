import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemContainerComponent } from './components/problem-container/problem-container.component';
import { ProblemComponent } from './components/problem/problem.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemContainerComponent,
    ProblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
