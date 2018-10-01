import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdComponent } from './customd.component';

describe('CustomdComponent', () => {
  let component: CustomdComponent;
  let fixture: ComponentFixture<CustomdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
