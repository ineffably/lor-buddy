import { useContext, useEffect } from 'react'
import { Explore } from '../components/explore';
import { CardData } from '../types/app-types';
import { CardGlobals, LorCard } from '../types/lor-types';
import { AppContext } from './state-provider';
import { excludeKeysFromCardIndex, rootDargonData } from '../library/config';

// TODO: using flat css for now; will introduce modules when layout model is more mature
import 'antd/dist/reset.css';
import '../app.css' 

export const App = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      const dragonData = await (await fetch(`${rootDargonData}data/card-sets.json`)).json();
      const globals = await (await fetch(`${rootDargonData}data/core-en_us/en_us/data/globals-en_us.json`)).json() as CardGlobals;

      const allCardData = Object.entries(dragonData)
        .filter(
          ([key]) => !excludeKeysFromCardIndex.includes(key)
        )
        .map(([key, cards]: [string, LorCard[]]) => (
          cards.map((card) => ({ ...card, setkey: key }))
        ))
        .flat()

      const globalsRecords = Object.entries(globals).reduce((acc, [key, value]) => {
        acc[key] = value.reduce((acc, item) => {
          acc[item.nameRef] = item;
          return acc;
        }, {} as Record<string, any>);
        return acc;
      }, {} as Record<string, Record<string, any>>);

      dispatch({ type: 'Loaded', payload: { isLoaded: true } });
      dispatch({ type: 'SetGlobals', payload: { globals, globalsRecords } });
      dispatch({ type: 'SetCardData', payload: { cardData: { allCardData, filteredCardData: allCardData } as CardData } });
      
    })();
  }, [])
  
  return (
    <Explore />
  )
}