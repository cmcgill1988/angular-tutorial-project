import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { DisplayImageCard, DisplayQuoteCard, DisplayRichContentCard } from 'src/app/models/display-card.model';

@Component({
  selector: 'app-display-card-content',
  templateUrl: './display-card-content.component.html',
  styleUrls: ['./display-card-content.component.scss']
})
export class DisplayCardContentComponent implements OnInit, OnChanges {
  @Input() card: DisplayImageCard | DisplayQuoteCard | DisplayRichContentCard;
  @Output() cardLoaded: EventEmitter<boolean>;
  constructor() {
    this.cardLoaded = new EventEmitter<boolean>();
  }

  public ngOnInit() {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.card = changes.card.currentValue;
      if (this.card.type === 'quote') {
        this.cardLoaded.emit(true);
      }
    }
  }
}
