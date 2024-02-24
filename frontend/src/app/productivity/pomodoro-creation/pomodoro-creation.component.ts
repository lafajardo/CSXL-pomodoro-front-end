import { Component, OnInit } from '@angular/core';
import { Timer } from '../timer';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductivityService } from '../productivity.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-pomodoro-creation',
  templateUrl: './pomodoro-creation.component.html',
  styleUrls: ['./pomodoro-creation.component.css']
})
export class PomodoroCreationComponent implements OnInit {
  timer: Timer | undefined;
  success: boolean = false;

  timerForm = this.formBuilder.group({
    title: new FormControl('', [Validators.required, Validators.minLength(1)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    timerLength: new FormControl(25, [
      Validators.required,
      Validators.min(1),
      Validators.pattern('[0-9]*')
    ]),
    breakLength: new FormControl(5, [
      Validators.required,
      Validators.min(1),
      Validators.pattern('[0-9]*')
    ])
  });

  constructor(
    private route: ActivatedRoute,
    private productivityService: ProductivityService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getTimer();
    if (this.timer) {
      this.timerForm.get('title')?.setValue(this.timer.title);
      this.timerForm.get('description')?.setValue(this.timer.description);
      this.timerForm.get('timerLength')?.setValue(this.timer.timerLength);
      this.timerForm.get('breakLength')?.setValue(this.timer.breakLength);
    }
  }

  getTimer(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productivityService
      .getTimer(id)
      .subscribe((timer) => (this.timer = timer));
  }

  onSubmit(): void {
    let timerLength: number = 0;
    let breakLength: number = 0;
    let temp = this.timerForm.get('timerLength')?.value;

    if (temp !== null && temp !== undefined) {
      timerLength = temp * 60;
    }

    temp = this.timerForm.get('breakLength')?.value;
    if (temp !== null && temp !== undefined) {
      breakLength = temp * 60;
    }

    if (timerLength && breakLength && timerLength < breakLength) {
      alert('working length cannot be shorter than break length');
      return;
    }

    let title: string = '';
    let description: string = '';
    let temp2 = this.timerForm.get('title')?.value;

    if (temp2 !== null && temp2 !== undefined) {
      title = temp2;
    }

    temp2 = this.timerForm.get('description')?.value;
    if (temp2 !== null && temp2 !== undefined) {
      description = temp2;
    }

    const doppleganger = this.productivityService.hasTitle(title);

    if (!this.timer) {
      alert('this timer id does not exist');
      return;
    }

    if (this.timer.id === 0) {
      if (doppleganger !== undefined) {
        alert('title already taken');
        return;
      }
      this.addTimer(title, description, timerLength, breakLength);
      this.timerForm.reset();
      this.success = true;
    } else {
      if (doppleganger !== undefined && doppleganger.id !== this.timer.id) {
        alert('title already taken');
        return;
      }
      this.editTimer(
        this.timer.id,
        title,
        description,
        timerLength,
        breakLength
      );
      this.success = true;
    }

    if (this.success) {
      setTimeout(() => {
        this.success = false;
      }, 4000);
    } else {
      alert('sorry, something went wrong');
    }
  }

  addTimer(
    title: string,
    description: string,
    timerLength: number,
    breakLength: number
  ): void {
    this.productivityService.addTimer(
      title,
      description,
      timerLength,
      breakLength
    );
  }

  editTimer(
    id: number,
    title: string,
    description: string,
    timerLength: number,
    breakLength: number
  ): void {
    this.productivityService.editTimer(
      id,
      title,
      description,
      timerLength,
      breakLength
    );
  }
}
