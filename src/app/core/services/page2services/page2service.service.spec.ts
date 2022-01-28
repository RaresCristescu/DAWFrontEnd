import { TestBed } from '@angular/core/testing';

import { Page2serviceService } from './page2service.service';

describe('Page2serviceService', () => {
  let service: Page2serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page2serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
