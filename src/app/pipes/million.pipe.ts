import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'million'
})

export class MillionPipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe) { }

  transform(value: any, digits?: any): any {
    const formatedValue = String(this.decimalPipe.transform(value / 1000000, digits)) + 'm';
    return Math.round(value / 1000000) > 0 ? formatedValue : this.decimalPipe.transform(value);
  }
}
