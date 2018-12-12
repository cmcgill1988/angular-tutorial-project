import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DisplayImageCard, DisplayQuoteCard, DisplayRichContentCard } from '../../../models/display-card.model';

@Component({
  selector: 'app-skeleton-display-card',
  templateUrl: './skeleton-display-card.component.html',
  styleUrls: ['./skeleton-display-card.component.scss']
})
export class SkeletonDisplayCardComponent implements OnInit, OnChanges {
@Input() card: DisplayImageCard | DisplayQuoteCard | DisplayRichContentCard;
  constructor() {
   }

  public ngOnInit() {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.card = changes.card.currentValue;
    }
  }
}
