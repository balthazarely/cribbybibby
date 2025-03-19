import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { CommonModule } from '@angular/common';
import { ScoreCounterButtonComponent } from '../../components/score-counter-button/score-counter-button.component';
import { LocalStorageService } from '../../../../core/services/local-storage.service';
import { Score } from '../../../../core/types/counter.types';
import { SettingsService } from '../../../../core/services/settings.service';
import { SettingsBarComponent } from '../../../../shared/components/settings-bar/settings-bar.component';

@Component({
  selector: 'app-score-counter',
  standalone: true,
  imports: [CommonModule, ScoreCounterButtonComponent, SettingsBarComponent],
  templateUrl: './score-counter.component.html',
  styleUrl: './score-counter.component.scss',
})
export class ScoreCounterComponent {
  counterService = inject(CounterService);
  localStorageService = inject(LocalStorageService);
  settingsService = inject(SettingsService);

  increaseScore(playerId: number, score: number) {
    const foundPlayer = this.settingsService
      .players()
      .find((player) => player.id === playerId);
    this.counterService.adjustScore({
      player: foundPlayer!,
      score,
    });
  }

  undoLastScore() {
    this.counterService.undoLastScore();
  }
}
