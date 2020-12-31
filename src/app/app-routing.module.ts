import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { StopsComponent } from './components/stops/stops.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'stops', component: StopsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'stops' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
