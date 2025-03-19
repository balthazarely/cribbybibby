import { inject, Injectable, signal } from '@angular/core';
import { Player, Score } from '../../../core/types/counter.types';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { SettingsService } from '../../../core/services/settings.service';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  localStorageService = inject(LocalStorageService);

  score = signal<Score[] | null>(null);

  setInitScore(payload: Score[]) {
    this.score.set(payload);
  }

  resetScore() {
    this.score.set(null);
  }

  adjustScore(payload: Score) {
    const currentScore = this.score();
    if (currentScore) {
      this.score.set([...currentScore, payload]);
    } else {
      this.score.set([payload]);
    }
    this.localStorageService.setItem('easy-crib-score', this.score());
  }

  undoLastScore() {
    const currentScore = this.score();
    if (currentScore) {
      this.score.set(currentScore.slice(0, -1));
    }
    this.localStorageService.setItem('easy-crib-score', this.score());
  }

  getScoresList() {
    return this.score();
  }

  getTotalScores(): { player1: number; player2: number; player3: number } {
    return {
      player1: this.getScorePerPlayer(1),
      player2: this.getScorePerPlayer(2),
      player3: this.getScorePerPlayer(3),
    };
  }

  // Utils
  private getScorePerPlayer(id: number): number {
    return (
      this.score()
        ?.filter((score) => score.player.id === id)
        .reduce((acc, score) => acc + score.score, 0) || 0
    );
  }
}
