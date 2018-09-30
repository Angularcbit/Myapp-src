import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltindirectivesComponent } from './builtindirectives.component';

describe('BuiltindirectivesComponent', () => {
  let component: BuiltindirectivesComponent;
  let fixture: ComponentFixture<BuiltindirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltindirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltindirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
