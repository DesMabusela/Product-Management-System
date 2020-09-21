import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GospelComponent } from './gospel.component';

describe('GospelComponent', () => {
  let component: GospelComponent;
  let fixture: ComponentFixture<GospelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GospelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GospelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
