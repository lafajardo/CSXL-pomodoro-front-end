import { Injectable } from '@angular/core';
import { Timer } from './timer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductivityService {
  constructor() {}

  currentId = 1;

  TIMERS: Timer[] = [];

  getTimers(): Observable<Timer[]> {
    const timers = of(this.TIMERS);
    return timers;
  }

  getTimer(id: number): Observable<Timer> {
    if (id == 0) {
      let x: Timer = {
        id: 0,
        title: '',
        description: '',
        timerLength: 25,
        breakLength: 5
      };
      return of(x);
    }
    const timer = this.TIMERS.find((timer) => timer.id === id)!;
    return of(timer);
  }

  addTimer(
    title: string,
    description: string,
    timerLength: number,
    breakLength: number
  ): void {
    this.TIMERS.push({
      id: this.currentId,
      title: title,
      description: description,
      timerLength: timerLength,
      breakLength: breakLength
    });
    this.currentId += 1;
  }
  //deleteTimer()

  editTimer(
    id: number,
    title: string,
    description: string,
    timerLength: number,
    breakLength: number
  ): void {
    const timer = this.TIMERS.find((timer) => timer.id === id)!;
    timer.title = title;
    timer.description = description;
    timer.timerLength = timerLength;
    timer.breakLength = breakLength;
  }

  hasTitle(title: string): Timer | undefined {
    const timer = this.TIMERS.find((timer) => timer.title === title);
    return timer;
  }
}
