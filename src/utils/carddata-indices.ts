import { LorCardDataReport } from '../types/app-types';
import { LorCard } from '../types/lor-types';
import { indexByField } from './data-utils';

export function createIndices(allCards: LorCard[]) {
  // storing a lookup by cardcode for instant access to card data
  // and then storing cardcodes instead of cards, 
  // in theory provides less memory necessary for storing indices retrieval 
  const result = {
    cardsByCode: {} as Record<string, LorCard>,
    codesByRegion: {} as Record<string, string[]>,
    codesByType: {} as Record<string, string[]>,
  };

  // lets see what damage we can do in a single pass
  allCards.forEach((card) => {
    result.cardsByCode[card.cardCode] = card;
    card.regionRefs.forEach((region) => {
      result.codesByRegion[region].push(card.cardCode);
    })
  })

  return result;
}