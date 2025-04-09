import { Card, Splitter } from 'antd'
import { CardListView } from './card-list-view'
import { QueryBar } from './query-bar'
import { useContext, useState } from 'react';
import { AppContext } from '../page/state-provider';
import { SimpleTableReport } from './simple-table-report';

export interface ExploreProps {
  cardIdentifier?: string; // either a cardid or "card name" or a card-name-slug
}

export const Explore = () => {
  const { state } = useContext(AppContext);
  const defaultSizes = [window.innerWidth * 0.75, window.innerWidth * 0.25]
  const [sizes, setSizes] = useState(defaultSizes);
  if (!state.cardReport) return (<div>Loading...</div>);

  return (
    <Card>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'space-between' }}>
        <QueryBar />
        <Splitter onResize={ev => setSizes(ev)}>
          <Splitter.Panel size={sizes[0]}>
            <div style={{ width: `${sizes[0]}px` }}>
              <CardListView />
            </div>
          </Splitter.Panel>
          <Splitter.Panel size={sizes[1]}>
            <SimpleTableReport />
          </Splitter.Panel>
        </Splitter>
      </div>
    </Card>
  )
}