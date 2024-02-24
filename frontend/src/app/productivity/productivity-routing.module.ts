import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductivityPageComponent } from './productivity-page/productivity-page.component';
import { PomodoroCreationComponent } from './pomodoro-creation/pomodoro-creation.component';

const routes: Routes = [
  ProductivityPageComponent.Route,
  {
    path: 'edit/:id',
    component: PomodoroCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductivityRoutingModule {}
