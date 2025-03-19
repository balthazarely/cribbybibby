import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SettingsService } from '../../core/services/settings.service';
import { SettingsBarComponent } from '../../shared/components/settings-bar/settings-bar.component';
import { Router } from '@angular/router';
import { CounterService } from '../counter/services/counter.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { SharedModule } from '../../shared/modules/shared.module';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    SharedModule,
    SettingsBarComponent,
  ],

  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  settingsService = inject(SettingsService);
  router = inject(Router);
  counterService = inject(CounterService);
  localStorageService = inject(LocalStorageService);
  readonly dialog = inject(MatDialog);

  settingsForm = new FormGroup({
    numPlayers: new FormControl(2, [Validators.required]),
    player1: new FormControl('', [Validators.required]),
    player2: new FormControl('', [Validators.required]),
    player3: new FormControl('', []),
  });

  ngOnInit() {
    this.loadFormValues();
  }

  loadFormValues() {
    const numPlayers = this.settingsService.numPlayers();
    const players = this.settingsService.players();
    this.settingsForm.setValue({
      numPlayers: +numPlayers,
      player1: players[0].name,
      player2: players[1].name,
      player3: players[2].name,
    });
  }

  submitSettings() {
    const payload = {
      numPlayers: this.settingsForm.get('numPlayers')?.value,
      players: [
        {
          id: 1,
          name: this.settingsForm.get('player1')?.value,
        },
        {
          id: 2,
          name: this.settingsForm.get('player2')?.value,
        },
        {
          id: 3,
          name: this.settingsForm.get('player3')?.value,
        },
      ],
    };

    this.settingsService.setSettings(payload);
    this.updatePlayersScoreNames();
    this.router.navigate(['/']);
  }

  updatePlayersScoreNames() {
    const newScores = this.counterService.score()?.map((score) => {
      const newPlayerName = this.settingsService
        .players()
        .find((player) => player.id === score.player.id)?.name;

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
}
