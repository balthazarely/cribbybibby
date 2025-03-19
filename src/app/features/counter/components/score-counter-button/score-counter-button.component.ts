import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Player } from '../../../../core/types/counter.types';

@Component({
  selector: 'app-score-counter-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './score-counter-button.component.html',
  styleUrl: './score-counter-button.component.scss',
})
export class ScoreCounterButtonComponent {
  @Output() buttonClick = new EventEmitter<number>();
  @Input() score!: string;
  @Input() player!: Player;

  handleClick(value: number): void {
    this.buttonClick.emit(value); // Emit the correct number
  }
}
