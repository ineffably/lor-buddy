import { useContext, useEffect } from "react"
import { rootDargonData } from "./config";
import { Tabs } from "antd";
import { AppContext } from "./state-provider";
import { CardData } from "./types/app-types";
import { LorCard } from "./types/lor-types";
import { Explore } from "./explore";
import './app.css'

const excludeKeys = ['metadata', 'globals-en_us'];

export const App = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      const dragonData = await (await fetch(`${rootDargonData}/data/card-sets.json`)).json();
      const allCardData = Object.entries(dragonData)
        .filter(([key]) => !excludeKeys.includes(key))
        .map(([key, v]: [string, LorCard]) => ({ ...v, ...{ setkey: key } }))
        .flat();

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
    <Tabs
      size="small"
      items={[
        {
          label: 'Explore',
          key: 'explore',
          children: <Explore />
        }
      ]}
    />
  )
}