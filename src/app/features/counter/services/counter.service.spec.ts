import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';
import { Score } from '../../../core/types/counter.types';
import { LocalStorageService } from '../../../core/services/local-storage.service';

describe('CounterService', () => {
  let service: CounterService;
  let lsService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterService, LocalStorageService],
    });
    service = TestBed.inject(CounterService);
    lsService = TestBed.inject(LocalStorageService);
  });

  const testScore: Score[] = [
    { player: { id: 1, name: 'Player 1' }, score: 10 },
    { player: { id: 2, name: 'Player 2' }, score: 20 },
    { player: { id: 1, name: 'Player 1' }, score: 10 },
    { player: { id: 2, name: 'Player 2' }, score: 40 },
  ];

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setInitScore', () => {
    it('should set the initial score in the signal', () => {
      service.setInitScore(testScore);
      expect(service.score()).toEqual(testScore);
    });
  });

  describe('adjustScore', () => {
    it('should adjust the score in the signal', () => {
      const adjustedScore: Score = {
        player: { id: 1, name: 'Player 1' },
        score: 7,
      };

      service.setInitScore(testScore);
      service.adjustScore(adjustedScore);
      const mergedArr = testScore.concat(adjustedScore);
      expect(service.score()).toEqual(mergedArr);
    });
  });

  describe('undoLastScore', () => {
    it('should remove the last item in the signal', () => {
      const newPayload: Score[] = [
        { player: { id: 1, name: 'Player 1' }, score: 10 },
        { player: { id: 2, name: 'Player 2' }, score: 20 },
        { player: { id: 1, name: 'Player 1' }, score: 10 },
      ];
      service.setInitScore(testScore);
      service.undoLastScore();
      expect(service.score()).toEqual(newPayload);
      expect(lsService.getItem('easy-crib-score')).toEqual(newPayload);
    });
  });
});
