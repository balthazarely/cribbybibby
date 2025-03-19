import { Component, inject } from '@angular/core';
import { ScoreCounterComponent } from '../views/score-counter/score-counter.component';
import { SettingsBarComponent } from '../../../shared/components/settings-bar/settings-bar.component';
import { ScoreHistoryComponent } from '../views/score-history/score-history.component';
import { SharedModule } from '../../../shared/modules/shared.module';
import { Score, ViewType } from '../../../core/types/counter.types';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    SharedModule,
    ScoreCounterComponent,
    ScoreHistoryComponent,
    SettingsBarComponent,
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  localStorageService = inject(LocalStorageService);
  counterService = inject(CounterService);

  currentView: ViewType = ViewType.ScoreCounter;

  ngOnInit() {
    const savedScores: Score[] | null =
      this.localStorageService.getItem('easy-crib-score');
    if (savedScores !== undefined && savedScores !== null) {
      this.counterService.setInitScore(savedScores);
    }
  }

  toggleView(): void {
    if (this.currentView === ViewType.ScoreCounter) {
      this.currentView = ViewType.ScoreHistory;
    } else {
      this.currentView = ViewType.ScoreCounter;
    }
  }

  get oppositeView(): string {
    if (this.currentView === ViewType.ScoreCounter) {
      return 'Show History';
    } else {
      return 'Show Counter';
    }
  }
}
