import { Component, Input, OnInit } from '@angular/core';
import { Timer } from '../../timer';
import { PomodoroTimer } from 'src/app/pomodoro';

@Component({
  selector: 'timer-card',
  templateUrl: './timer-card.widget.html',
  styleUrls: ['./timer-card.widget.css']
})
export class TimerCard implements OnInit {
  /** Inputs and outputs go here */
  @Input() timer!: Timer;

  pomodoroTimer: PomodoroTimer | undefined;
  hasStarted: boolean = false;
  startOrResumeText: string = 'START';

  /** Constructor */
  constructor() {}

  ngOnInit(): void {
    this.pomodoroTimer = new PomodoroTimer(
      this.timer.timerLength,
      this.timer.breakLength
    );
  }

  startOrResume(): void {
    if (this.hasStarted) {
      this.pomodoroTimer?.resume();
    } else {
      this.pomodoroTimer?.start();
      this.hasStarted = true;
      this.startOrResumeText = 'RESUME';
    }
  }
}
