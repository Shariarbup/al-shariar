import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsTwoComponent } from './reactive-forms-two.component';

describe('ReactiveFormsTwoComponent', () => {
  let component: ReactiveFormsTwoComponent;
  let fixture: ComponentFixture<ReactiveFormsTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormsTwoComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
