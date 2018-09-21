import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourcompComponent } from './yourcomp.component';

describe('YourcompComponent', () => {
  let component: YourcompComponent;
  let fixture: ComponentFixture<YourcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
