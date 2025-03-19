import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ScoreCounterComponent } from './views/score-counter/score-counter.component';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterRoutingModule {}
