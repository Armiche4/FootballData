import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersTopComponent } from './players-top.component';

describe('PlayersTopComponent', () => {
  let component: PlayersTopComponent;
  let fixture: ComponentFixture<PlayersTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
