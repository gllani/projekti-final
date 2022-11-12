import { TestBed } from '@angular/core/testing';

import { AdminPunonjesService } from './admin-punonjes.service';

describe('AdminPunonjesService', () => {
  let service: AdminPunonjesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPunonjesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
