import { inject, Injectable, signal } from '@angular/core';
import { Player, Score } from '../types/counter.types';
import { LocalStorageService } from './local-storage.service';
import { CounterService } from '../../features/counter/services/counter.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  localStorageService = inject(LocalStorageService);
  counterService = inject(CounterService);

  numPlayers = signal<number>(2);
  players = signal<Player[]>([
    { id: 1, name: 'Player 1' },
    { id: 2, name: 'Player 2' },
    { id: 3, name: 'Player 3' },
  ]);

  setSettings(payload: any) {
    this.numPlayers.set(payload.numPlayers);
    this.players.set(payload.players);

    const lsPayload = {
      numPlayers: this.numPlayers(),
      players: this.players(),
    };
    this.localStorageService.setItem('easy-crib-settings', lsPayload);
  }

  updatePlayersScoreNames() {
    const newScores = this.counterService.score()?.map((score) => {
      const newPlayerName = this.players().find(
        (player) => player.id === score.player.id
      )?.name;

      return {
        ...score,
        player: {
          name: newPlayerName!,
          id: score.player.id,
        },
      };
    });

    this.localStorageService.setItem('easy-crib-score', newScores);
  }

  initSettings() {
    const settings = this.localStorageService.getItem('easy-crib-settings');

    if (settings) this.setSettings(settings);
  }
}
