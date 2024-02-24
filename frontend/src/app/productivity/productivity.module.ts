import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductivityPageComponent } from './productivity-page/productivity-page.component';
import { ProductivityRoutingModule } from './productivity-routing.module';
import { PomodoroCreationComponent } from './pomodoro-creation/pomodoro-creation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { TimerCard } from './widgets/timer-card/timer-card.widget';
import { TimePipePipe } from './time-pipe.pipe';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ProductivityPageComponent,
    PomodoroCreationComponent,
    TimerCard,
    TimePipePipe
  ],
  imports: [
    CommonModule,
    ProductivityRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule
  ]
})
export class ProductivityModule {}
