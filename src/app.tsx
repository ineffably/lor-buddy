import { useContext, useEffect } from 'react'
import { rootDargonData } from './config';
import { AppContext } from './state-provider';
import { CardData } from './types/app-types';
import { LorCard } from './types/lor-types';
import { Explore } from './components/explore';
import 'antd/dist/reset.css';
import './app.css'

const excludeKeys = ['metadata', 'globals-en_us'];

export const App = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      const dragonData = await (await fetch(`${rootDargonData}/data/card-sets.json`)).json();
      const allCardData = Object.entries(dragonData)
        .filter(
          ([key]) => !excludeKeys.includes(key)
        )
        .map(([key, cards]: [string, LorCard[]]) => (
          cards.map((card) => ({ ...card, setkey: key }))
        ))
        .flat()

      dispatch({ type: 'Loaded', payload: { isLoaded: true } });
      dispatch({
        type: 'SetCardData',
        payload: {
          cardData: { allCardData, filteredCardData: allCardData } as CardData
        }
      });
    })();
  }, [])

  return (
    <Explore />
  )
}