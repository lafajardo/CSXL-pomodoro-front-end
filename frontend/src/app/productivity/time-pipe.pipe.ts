import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {
  transform(value: number | null, defaultValue: number): string {
    const date = new Date(0);
    if (value === null) date.setSeconds(defaultValue);
    else date.setSeconds(value);
    return date.toISOString().substring(11, 19);
  }
}
