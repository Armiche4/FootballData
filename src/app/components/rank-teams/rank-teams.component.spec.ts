import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankTeamsComponent } from './rank-teams.component';

describe('RankTeamsComponent', () => {
  let component: RankTeamsComponent;
  let fixture: ComponentFixture<RankTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
