import { LorCard, RegionRef } from '../types/lor-types';
export interface QueryMonster {
    queryText: string;
    keywords: string[];
    regions: RegionRef[];
    types: string[];
    onlyCollectible: boolean;
    rarity: string[];
}
export declare function queryCards(cardList: LorCard[], queryMonster: QueryMonster): LorCard[];
