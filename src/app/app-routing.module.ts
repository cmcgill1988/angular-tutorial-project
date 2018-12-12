import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './masonry-grid/grid/grid.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'masonry-grid' },
  { path: 'masonry-grid', component: GridComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'masonry-grid' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
