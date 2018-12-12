import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { DisplayImageCard, DisplayQuoteCard, DisplayRichContentCard } from 'src/app/models/display-card.model';
import { SkeletonDisplayCardComponent } from './skeleton-display-card/skeleton-display-card.component';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss'],
  entryComponents: [SkeletonDisplayCardComponent]
})
export class DisplayCardComponent implements OnInit, OnChanges {
  @Input() card: DisplayImageCard | DisplayQuoteCard | DisplayRichContentCard;
  constructor(private cd: ChangeDetectorRef) { }

  public ngOnInit() {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.card = changes.card.currentValue;
    }
  }

  public updateTemplates(event: boolean): void {
    this.card.isLoading = !event;
    this.cd.detectChanges();
  }

}
