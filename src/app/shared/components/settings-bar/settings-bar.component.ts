import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CounterService } from '../../../features/counter/services/counter.service';
import { filter, map, tap } from 'rxjs';
import { SharedModule } from '../../modules/shared.module';
import { MatDialog } from '@angular/material/dialog';
import { ResetDilaogComponent } from './reset-dilaog/reset-dilaog.component';

@Component({
  selector: 'app-settings-bar',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule, SharedModule],
  templateUrl: './settings-bar.component.html',
  styleUrl: './settings-bar.component.scss',
})
export class SettingsBarComponent {
  currRoute$: any;
  // counterService = inject(CounterService);
  currentRoute: string = 'asf';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private counterService: CounterService,
    private dialog: MatDialog
  ) {}

  @Input() currentView!: string;
  @Output() scoreViewToggle = new EventEmitter<void>();

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

  viewToggleClick() {
    this.scoreViewToggle.emit();
  }

  settingsClick() {
    const currentRoute = this.router.url;
    if (currentRoute === '/') {
      this.router.navigate(['/settings']);
    } else {
      this.router.navigate(['/']);
    }
  }

  undo() {
    this.counterService.undoLastScore();
  }

  resetScore() {
    this.dialog.open(ResetDilaogComponent);
  }
}
