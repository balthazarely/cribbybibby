import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsService } from './core/services/settings.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  settingsService = inject(SettingsService);
  title = 'cribby';

  ngOnInit() {
    this.settingsService.initSettings();
  }
}
