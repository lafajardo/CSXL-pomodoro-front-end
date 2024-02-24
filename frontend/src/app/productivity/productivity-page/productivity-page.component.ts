import { Component, OnInit } from '@angular/core';
import { Timer } from '../timer';
import { ProductivityService } from '../productivity.service';

@Component({
  selector: 'app-productivity-page',
  templateUrl: './productivity-page.component.html',
  styleUrls: ['./productivity-page.component.css']
})
export class ProductivityPageComponent implements OnInit {
  public static Route = {
    path: '',
    title: 'Productivity',
    canActivate: [],
    component: ProductivityPageComponent
  };

  timers: Timer[] = [];

  constructor(private productivityService: ProductivityService) {}

  getTimers(): void {
    this.productivityService
      .getTimers()
      .subscribe((timers) => (this.timers = timers));
  }

  ngOnInit(): void {
    this.getTimers();
  }
}
