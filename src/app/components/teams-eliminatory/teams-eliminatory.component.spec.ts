import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsEliminatoryComponent } from './teams-eliminatory.component';

describe('TeamsEliminatoryComponent', () => {
  let component: TeamsEliminatoryComponent;
  let fixture: ComponentFixture<TeamsEliminatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsEliminatoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsEliminatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
