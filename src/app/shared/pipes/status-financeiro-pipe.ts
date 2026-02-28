import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFinanceiro',
})
export class StatusFinanceiroPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
