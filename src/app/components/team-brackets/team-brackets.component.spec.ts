import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBracketsComponent } from './team-brackets.component';

describe('TeamBracketsComponent', () => {
  let component: TeamBracketsComponent;
  let fixture: ComponentFixture<TeamBracketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBracketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
