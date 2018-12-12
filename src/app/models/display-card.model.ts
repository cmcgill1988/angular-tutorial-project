export interface DisplayCardConfig {
  backgroundColour: string;
  textColour: string;
  height: number;
}

export interface DisplayCard {
  isLoading: boolean;
  type: string;
  config: DisplayCardConfig;
}

export interface DisplayQuoteCard extends DisplayCard {
  source: string;
  cardTextContent: string;
}

export interface DisplayRichContentCard extends DisplayCard {
  title: string;
  cardTextContent: string;
  cardImageURL: string;
}

export interface DisplayImageCard extends DisplayCard {
  cardImageURL: string;
}
