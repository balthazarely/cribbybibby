import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { ScoreCardComponent } from '../../components/score-card/score-card.component';

@Component({
  selector: 'app-score-history',
  standalone: true,
  imports: [SharedModule, ScoreCardComponent],
  templateUrl: './score-history.component.html',
  styleUrl: './score-history.component.scss',
})
export class ScoreHistoryComponent {
  counterService = inject(CounterService);
}
