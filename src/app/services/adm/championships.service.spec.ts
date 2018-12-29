import { TestBed, inject } from '@angular/core/testing';

import { ChampionshipsService } from './championships.service';

describe('ChampionshipsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChampionshipsService]
    });
  });

  it('should be created', inject([ChampionshipsService], (service: ChampionshipsService) => {
    expect(service).toBeTruthy();
  }));
});
