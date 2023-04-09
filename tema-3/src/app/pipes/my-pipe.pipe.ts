import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from './title-case.pipe';
import { MyDatePipe } from "./my-date.pipe";
import { MyCurrencyPipe } from "./my-currency.pipe";

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  constructor(private titleCase: TitleCasePipe, private date: MyDatePipe,
    private currency: MyCurrencyPipe) {
  }

  transform(value: string, pipe: string): string {
    switch (pipe) {
      case 'lowercase':
        return value.toLowerCase();
      case 'uppercase':
        return value.toUpperCase();
      case 'titlecase':
        return this.titleCase.transform(value);
      case 'date':
        return this.date.transform(value);
      case 'currency':
        return this.currency.transform(value);
      default:
        return value;
    }
  }
}
