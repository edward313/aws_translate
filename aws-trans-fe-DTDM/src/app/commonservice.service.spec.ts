/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommonserviceService } from './commonservice.service';

describe('Service: Commonservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonserviceService]
    });
  });

  it('should ...', inject([CommonserviceService], (service: CommonserviceService) => {
    expect(service).toBeTruthy();
  }));
});
