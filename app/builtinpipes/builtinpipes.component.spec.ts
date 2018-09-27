import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinpipesComponent } from './builtinpipes.component';

describe('BuiltinpipesComponent', () => {
  let component: BuiltinpipesComponent;
  let fixture: ComponentFixture<BuiltinpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltinpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltinpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
