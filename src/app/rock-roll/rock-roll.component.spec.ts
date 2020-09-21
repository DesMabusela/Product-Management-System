import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockRollComponent } from './rock-roll.component';

describe('RockRollComponent', () => {
  let component: RockRollComponent;
  let fixture: ComponentFixture<RockRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
