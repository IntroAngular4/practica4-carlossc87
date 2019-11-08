import { TestBed } from '@angular/core/testing';

import { NotifyStoreService } from './notify-store.service';

describe('NotifyStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotifyStoreService = TestBed.get(NotifyStoreService);
    expect(service).toBeTruthy();
  });
});
