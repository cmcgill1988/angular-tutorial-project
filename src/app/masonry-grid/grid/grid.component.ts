import { Component, OnInit } from '@angular/core';
import { MagicService } from '../magic.service';
import { DisplayRichContentCard, DisplayQuoteCard, DisplayImageCard } from '../../models/display-card.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public gridCards: Array<DisplayQuoteCard | DisplayImageCard | DisplayRichContentCard>;
  constructor(private magicService: MagicService) { }

  public ngOnInit() {
    this.setData();
  }

  private async setData() {
    try {
      const endpointResponse = await this.magicService.getMagicCards();
      this.gridCards = this.magicService.mapCardsToDisplayObject(endpointResponse);
    } catch (e) {
      console.log(e);
    }
  }

}
