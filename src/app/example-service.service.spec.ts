import { TestBed, inject } from '@angular/core/testing';

import { ExampleServiceService } from './example-service.service';

describe('ExampleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleServiceService]
    });
  });

  it('should ...', inject([ExampleServiceService], (service: ExampleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
