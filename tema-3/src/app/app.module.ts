import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { FormsModule } from "@angular/forms";
import { MyPipePipe } from './pipes/my-pipe.pipe';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { MyDatePipe } from './pipes/my-date.pipe';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponent,
    MyPipePipe,
    TitleCasePipe,
    MyDatePipe,
    MyCurrencyPipe,
    NavbarComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyPipePipe, TitleCasePipe, MyDatePipe, MyCurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
