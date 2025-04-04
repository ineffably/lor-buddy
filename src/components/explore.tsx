import { Card } from 'antd'
import { CardListView } from './card-list-view'
import { QueryBar } from './query-bar'
import { useContext } from 'react';
import { AppContext } from '../page/state-provider';

export interface ExploreProps {
  cardIdentifier?: string; // either a cardid or "card name" or a card-name-slug
}

export const Explore = () => {
  const { state } = useContext(AppContext);

  if(!state.cardReport) return(<div>Loading...</div>);
 
  return (
    <Card>
      <QueryBar />
      <CardListView />
    </Card>
  )
}