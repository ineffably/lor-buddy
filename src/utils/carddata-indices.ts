import { LorCardsDataReport } from '../types/app-types';
import { LorCard } from '../types/lor-types';

export function createIndices(allCards: LorCard[]): LorCardsDataReport {
  // storing a lookup by cardcode for instant access to card data
  // and then storing cardcodes instead of cards, 
  // in theory provides less memory necessary for storing indices retrieval
  const singleEntryValues = ['artistName', 'type', 'attack', 'health', 'cost', 'name', 'setkey', 'collectible', 'rarity', 'rarityRef'];
  const multiEntryValues = ['regions', 'keywords', 'formats'];
  const multiEntryFields = [
    ['regionRefs', 'regions'],
    ['keywordRefs', 'keywords'],
    ['formatRefs', 'formats']
  ]
  const emptyResult = {
    cardsByCode: {},
    codesBy: {},
    allOf: {},
  } as LorCardsDataReport;

  [...singleEntryValues, ...multiEntryValues].forEach((field) => {
    emptyResult.codesBy[field] = {} as Record<string, string[]>;
  });

  // lets see what damage we can do in a single pass
  const result = allCards.reduce((acc, card) => {
    const { cardCode } = card;
    const { codesBy } = acc;

    acc.cardsByCode[cardCode] = card;
    multiEntryFields.forEach(([cardField, indexedField]) => {
      if(!card[cardField]) return;
      card[cardField].forEach((value) => {
        codesBy[indexedField][value] = (
          codesBy[indexedField][value] || []
        ).concat([cardCode]);
      })
    });

    singleEntryValues.forEach((cardField) => {
      if (!card[cardField]) return;
      const fieldValue = card[cardField] as string;
      codesBy[cardField][fieldValue] = codesBy[cardField][fieldValue] || [];
      codesBy[cardField][fieldValue].push(cardCode);
    });

    return acc;
  }, emptyResult)

  const fields = ['type', 'regions', 'keywords', 'formats', 'rarity', 'rarityRef', 'artistName', 'setkey', 'cost', 'attack', 'health'];
  // create a list of all the field values encountered for field "symbols"
  fields.forEach((field) => {
    result.allOf[field] = Object.keys(result.codesBy[field])
  })

  return result;
}