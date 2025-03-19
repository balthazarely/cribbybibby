import { Component, Input } from '@angular/core';
import { Score } from '../../../../core/types/counter.types';

@Component({
  selector: 'app-score-card',
  standalone: true,
  imports: [],
  templateUrl: './score-card.component.html',
  styleUrl: './score-card.component.scss',
})
export class ScoreCardComponent {
  @Input() score!: Score;
}
