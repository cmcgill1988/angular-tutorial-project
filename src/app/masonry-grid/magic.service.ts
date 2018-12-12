import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DisplayCard, DisplayImageCard, DisplayRichContentCard, DisplayQuoteCard } from '../models/display-card.model';
import { MagicCardEndpointResponse, MagicCard } from 'src/app/models/magic-card.model';

@Injectable({
  providedIn: 'root'
})

export class MagicService {

  constructor(private http: HttpClient) { }

  public getMagicCards(): Promise<any> {
    return this.http.get('https://api.magicthegathering.io/v1/cards').toPromise();
  }

  public mapCardsToDisplayObject(endpointResponse: MagicCardEndpointResponse):
    Array<DisplayQuoteCard | DisplayImageCard | DisplayRichContentCard> {
    let mappedObjects: Array<DisplayQuoteCard | DisplayImageCard | DisplayRichContentCard>;
    const cards = endpointResponse.cards;


    mappedObjects = cards.map((card: MagicCard) => {
      return this.returnMappedCardObject(card, this.getRandomCardType());
    });

    return mappedObjects;
  }

  private getRandomCardType(): string {
    const displayCardTypes = [
      'rich',
      'image',
      'quote'
    ];
    const randoNum: number = Math.floor((Math.random() * ((displayCardTypes.length - 1) + 1)) + 0);
    return displayCardTypes[randoNum];
  }

  private returnMappedCardObject(card: MagicCard, type: string): DisplayQuoteCard | DisplayImageCard | DisplayRichContentCard {
    let basicCard: DisplayCard;
    switch (type) {
      case 'rich':
        const richCard = {
          title: card.name,
          cardTextContent: card.text,
          cardImageURL: card.imageUrl
        };
         basicCard = this.getStarterCardConfiguration(type);

        return { ...basicCard, ...richCard };
      case 'image':
        const imgCard = {
          cardImageURL: card.imageUrl
        };
        basicCard = this.getStarterCardConfiguration(type);
        basicCard.config.height = 360;
        return { ...basicCard, ...imgCard };
      case 'quote':
        const quoteCard = {
          cardTextContent: card.text,
          source: card.name
        };
        basicCard = this.getStarterCardConfiguration(type);
        basicCard.config.backgroundColour = '#273c75';
        basicCard.config.textColour = '#f5f6fa';
        return { ...basicCard, ...quoteCard };
      default:
        break;
    }
  }

  private getStarterCardConfiguration(type: string): DisplayCard {
    return {
      type: type,
      isLoading: true,
      config: {
        backgroundColour: '#ffffff',
        textColour: '#333333',
        height: 160
      }
    };
  }

}
