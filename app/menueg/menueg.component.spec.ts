import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuegComponent } from './menueg.component';

describe('MenuegComponent', () => {
  let component: MenuegComponent;
  let fixture: ComponentFixture<MenuegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
