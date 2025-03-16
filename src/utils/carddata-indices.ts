import { LorCard } from '../types/lor-types';
import { indexByField } from './data-utils';

export function createIndices(allCards: LorCard[]) {
  const result = {
    allCards,
    cardsByCode: indexByField<LorCard>(allCards, 'cardCode'),
    cardsByName: indexByField<LorCard>(allCards, 'name'),
  };
 

  return result;
}