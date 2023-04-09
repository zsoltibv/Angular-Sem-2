import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'
    ];

    const dateParts = value.replaceAll('/', '-').replaceAll('.', '-').split('-');
    const month = months[parseInt(dateParts[1]) - 1];
    const day = parseInt(dateParts[0]).toString();
    const year = dateParts[2];

    return `${month} ${day}, ${year}`;
  }

}
