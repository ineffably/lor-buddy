import { Card } from 'antd'
import { CardListView } from './card-list-view'
import { QueryBar } from './query-bar'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../page/state-provider';
import { CardDetails } from './card-details';
import { useRoute } from 'wouter';

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