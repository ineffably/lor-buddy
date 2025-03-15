import { Card, Empty, Pagination } from 'antd'
import { useContext, useState } from 'react';
import { AppContext } from '../state-provider'
import { CardImageView } from './card-image-view';

export const CardListView = () => {
  const { state } = useContext(AppContext);
  const { filteredCardData } = state?.cardData || {};

  const [pageSize, setPageSize] = useState<number>(20);
  const [pageNum, setPageNum] = useState<number>(1);
  
  if (!filteredCardData) {
    return <div>Loading...</div>
  }

  const TopBottomPagination = () => {
    return (
      <Pagination
        size="small"
        total={filteredCardData.length}
        pageSize={pageSize}
        current={pageNum}
        onChange={(pageNum, pageSize) => {
          setPageSize(pageSize)
          setPageNum(pageNum)
        }} />
    )
  }

  return (
    <Card>
      <TopBottomPagination />
      {filteredCardData.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={`No cards found with that query`} />}      
      {filteredCardData.slice((pageNum - 1) * pageSize, pageNum * pageSize).map((card, index) => {
        return <CardImageView
          card={card}
          key={index}
        />
      })}
      <TopBottomPagination />
    </Card>
  )
}