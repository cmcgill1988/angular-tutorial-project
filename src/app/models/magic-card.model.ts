export interface MagicCardEndpointResponse {
  cards: MagicCard[];
}

export interface MagicCard {
  name: string;
  names: string[];
  manaCost: string;
  cmc: number;
  colors: string[];
  colorIdentity: string[];
  type: string;
  superTypes: string[];
  types: string[];
  subtypes: string[];
  rarity: string;
  set: string;
  text: string;
  artist: string;
  number: string;
  power: number;
  toughness: number;
  layout: string;
  multiverseid: number;
  imageUrl: string;
  rulings: any[];
  foreignNames: any[];
  printings: string[];
  originalText: string;
  originalType: string;
  id: string;
}