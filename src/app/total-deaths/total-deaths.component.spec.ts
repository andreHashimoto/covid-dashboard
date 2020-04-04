import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDeathsComponent } from './total-deaths.component';

describe('TotalDeathsComponent', () => {
  let component: TotalDeathsComponent;
  let fixture: ComponentFixture<TotalDeathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalDeathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
