import { Component, inject } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from '../../../../core/services/local-storage.service';
import { CounterService } from '../../../../features/counter/services/counter.service';

@Component({
  selector: 'app-reset-dilaog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
  ],
  templateUrl: './reset-dilaog.component.html',
  styleUrl: './reset-dilaog.component.scss',
})
export class ResetDilaogComponent {
  localStorageService = inject(LocalStorageService);
  counterService = inject(CounterService);

  dialog = inject(MatDialog);

  onSubmit() {
    this.counterService.resetScore();
    this.localStorageService.removeItem('easy-crib-score');
    this.dialog.closeAll();
  }
}
