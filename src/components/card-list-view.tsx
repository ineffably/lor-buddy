import { Card, Pagination } from 'antd'
import { useContext, useState } from 'react';
import { AppContext } from '../state-provider'
import { CardImageView } from './card-image-view';

export const CardListView = () => {
  const { state } = useContext(AppContext);

  const [pageSize, setPageSize] = useState<number>(20);
  const [pageNum, setPageNum] = useState<number>(1);
  const { filteredCardData } = state?.cardData || {};
  if(!filteredCardData) {
    return <div>Loading...</div>
  }
  
  return (
    <Card>
      <Pagination 
        size="small" 
        total={filteredCardData.length} 
        pageSize={pageSize}
        current={pageNum}
        onChange={(pageNum, pageSize) => {
        setPageSize(pageSize)
        setPageNum(pageNum)
      }} />
      {filteredCardData.slice((pageNum - 1) * pageSize, pageNum * pageSize).map((card, index) => {
        return <CardImageView 
          card={card} 
          key={index} 
        />
      } )}
    </Card>
  )
}