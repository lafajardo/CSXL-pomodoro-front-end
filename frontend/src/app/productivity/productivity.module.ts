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

@NgModule({
  declarations: [ProductivityPageComponent, PomodoroCreationComponent],
  imports: [
    CommonModule,
    ProductivityRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule
  ]
})
export class ProductivityModule {}
