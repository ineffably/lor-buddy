import { LorCardsDataReport } from '../types/app-types';
import { LorCard } from '../types/lor-types';

const fields = ['name', 'type', 'regions', 'keywords', 'formats', 'rarity', 'rarityRef', 'artistName', 'setkey', 'cost', 'attack', 'health'];
const singleEntryValues = ['artistName', 'type', 'attack', 'health', 'cost', 'name', 'setkey', 'collectible', 'rarity', 'rarityRef'];
const multiEntryValues = ['regions', 'keywords', 'formats'];
const multiEntryFields = [
  ['regionRefs', 'regions'],
  ['keywordRefs', 'keywords'],
  ['formatRefs', 'formats']
];
const numericValueGroups = ['attack', 'health', 'cost', '10+'];

export function createIndices(allCards: LorCard[]): LorCardsDataReport {
  // storing a lookup by cardcode for instant access to card data
  // and then storing cardcodes instead of cards, 
  // in theory provides less memory necessary for storing indices retrieval
  
  const emptyResult = {
    cardsByCode: {},
    codesBy: {},
    allOf: {},
  } as LorCardsDataReport;

  [...singleEntryValues, ...multiEntryValues].forEach((field) => {
    emptyResult.codesBy[field] = {} as Record<string, string[]>;
  });

  const excludeCodesByFields = ['name', 'artistName'];
  // lets see what damage we can do in a single pass
  const result = allCards.reduce((acc, card) => {
    const { cardCode } = card;
    const { codesBy } = acc;

    acc.cardsByCode[cardCode] = card;
    multiEntryFields.forEach(([cardField, indexedField]) => {
      if(!card[cardField] || excludeCodesByFields.includes(cardField)) return;
      card[cardField].forEach((value) => {
        codesBy[indexedField][value] = (
          codesBy[indexedField][value] || []
        ).concat([cardCode]);
      })
    });

    singleEntryValues.forEach((cardField) => {
      if(!card[cardField] || excludeCodesByFields.includes(cardField)) return;
      const fieldValue = card[cardField] as string;
      if(numericValueGroups.includes(cardField)) {  
        const numValue = (parseInt(fieldValue, 10) < 10) ? fieldValue : '10+';
        codesBy[cardField][numValue] = codesBy[cardField][numValue] || [];
        codesBy[cardField][numValue].push(cardCode);
      } else {
        codesBy[cardField][fieldValue] = codesBy[cardField][fieldValue] || [];
        codesBy[cardField][fieldValue].push(cardCode);
      }
    });

    return acc;
  }, emptyResult)

  // create a list of all the field values encountered for field "symbols"
  fields.forEach((field) => {
    result.allOf[field] = Object.keys(result.codesBy[field])
  })

  return result;
}