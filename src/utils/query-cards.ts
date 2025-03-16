import { LorCard } from '../types/lor-types';
import { isInField } from './data-utils';

export interface QueryMonster {
  queryText: string;
  keywords: string[];
  regions: string[];
  types: string[];
}

const searchCardFields = {
  name: 'name',
  description: 'description',
  flavorText: 'flavorText',
} as unknown as keyof LorCard;

export function queryCards(cardList: LorCard[], queryMonster: QueryMonster){
  const { queryText } = queryMonster;
  
  const filteredCardData = cardList.filter((card) => {
    const result = [];
    // silly, I would just return true, but, I have plans for the 'field' value
    Object.keys(searchCardFields).forEach((field: keyof LorCard) => result.push(
      isInField(card, field, queryText) ? field : '')
    );
    if(result.filter(Boolean).length > 0) return true;
  });

  return filteredCardData;
}