import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeathsComponent } from './new-deaths.component';

describe('NewDeathsComponent', () => {
  let component: NewDeathsComponent;
  let fixture: ComponentFixture<NewDeathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDeathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
