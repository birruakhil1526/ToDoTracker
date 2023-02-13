import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotTodosComponent } from './hot-todos.component';

describe('HotTodosComponent', () => {
  let component: HotTodosComponent;
  let fixture: ComponentFixture<HotTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
