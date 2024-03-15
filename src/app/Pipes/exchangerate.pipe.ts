import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchangerate',
  standalone: true
})
export class ExchangeratePipe implements PipeTransform {
  currencies: any={
    EGP :30.9,
    Eur: 1/1.09,
  };

  transform(value: number ,currency:string ): unknown {
    return `${(value * this.currencies[currency]).toFixed(2)}${currency }`;
  }

}
