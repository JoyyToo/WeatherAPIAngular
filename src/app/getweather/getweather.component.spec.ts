import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetweatherComponent } from './getweather.component';

describe('GetweatherComponent', () => {
  let component: GetweatherComponent;
  let fixture: ComponentFixture<GetweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
