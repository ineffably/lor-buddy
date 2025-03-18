import { LorCard, RegionRef } from '../types/lor-types';
import { isInField } from './data-utils';

export interface QueryMonster {
  queryText: string;
  keywords: string[];
  regions: RegionRef[];
  types: string[];
  onlyCollectible: boolean;
  rarity: string[];
}

const searchCardFields = {
  name: 'name',
  description: 'description',
  flavorText: 'flavorText',
} as unknown as keyof LorCard;

export function queryCards(cardList: LorCard[], queryMonster: QueryMonster){
  const {
    onlyCollectible = true, 
    queryText = '',
    regions = [],
    rarity = [],
  } = queryMonster;
  
  const filteredCardData = cardList.filter((card) => {
    if(onlyCollectible && !card.collectible) return false;
    if(rarity.length > 0 && !rarity.includes(card.rarityRef)) return false;
    if(regions.length > 0 && regions.filter(
      region => card.regionRefs.includes(region)
    ).length === 0){
      return false;
    }
    const result = [];
    // silly, I would just return true, but, I have plans for the 'field' value
    Object.keys(searchCardFields).forEach((field: keyof LorCard) => result.push(
      isInField(card, field, queryText) ? field : '')
    );
    if(result.filter(Boolean).length > 0) return true;
  });

  return filteredCardData;
}