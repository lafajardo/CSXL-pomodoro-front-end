import { Pipe, PipeTransform } from '@angular/core';
import { PomodoroTimer } from '../pomodoro';

@Pipe({
  name: 'statePipe'
})
export class StatePipePipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (value === 0) return 'IDLE';
    if (value === 1) return 'WORKING';
    if (value === 2) return 'BREAK';
    return '';
  }
}
