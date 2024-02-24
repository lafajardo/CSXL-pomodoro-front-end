import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PomodoroCreationComponent } from './pomodoro-creation.component';

describe('PomodoroCreationComponent', () => {
  let component: PomodoroCreationComponent;
  let fixture: ComponentFixture<PomodoroCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PomodoroCreationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PomodoroCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
