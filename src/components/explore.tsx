import { Card } from 'antd'
import { CardListView } from './card-list-view'
import { QueryBar } from './query-bar'

export const Explore = () => {

  return (
    <Card>
      <QueryBar />
      <CardListView />
    </Card>
  )
}