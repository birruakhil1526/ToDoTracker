import { TestBed } from '@angular/core/testing';

import { AccessTodoAppGuard } from './access-todo-app.guard';

describe('AccessTodoAppGuard', () => {
  let guard: AccessTodoAppGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessTodoAppGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
