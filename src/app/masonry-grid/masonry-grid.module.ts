import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCardComponent } from './display-card/display-card.component';
import { GridComponent } from './grid/grid.component';
import { SkeletonDisplayCardComponent } from './display-card/skeleton-display-card/skeleton-display-card.component';
import { MagicService } from './magic.service';
import { DisplayCardContentComponent } from './display-card/display-card-content/display-card-content.component';
@NgModule({
  declarations: [DisplayCardComponent, GridComponent, SkeletonDisplayCardComponent, DisplayCardContentComponent],
  imports: [
    CommonModule,
  ],
  exports: [GridComponent],
  providers: [MagicService]
})
export class MasonryGridModule { }
