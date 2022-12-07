import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBracketsMatchComponent } from './team-brackets-match.component';

describe('TeamBracketsMatchComponent', () => {
  let component: TeamBracketsMatchComponent;
  let fixture: ComponentFixture<TeamBracketsMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBracketsMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBracketsMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
