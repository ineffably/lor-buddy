import { Card, Space } from 'antd'
import { type CSSProperties, useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../page/state-provider';
import { Link } from 'wouter';
import { LorCard } from '../types/lor-types';
import { cardDetailsSize } from '../library/config';
import { CardDetailsBody } from './card-details-body';

export interface CardDetailsProps {
  cardCode: string;
}

const getStyle = () => ({
  position: 'absolute',
  boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
  top: `${window.innerHeight / 50}px`,
  left: `${window.innerWidth / 3 - cardDetailsSize.width / 2}px`,
  width: `${cardDetailsSize.width}px`,
  height: `${cardDetailsSize.height}px`,
  zIndex: 10
}) as CSSProperties

export const CardDetailsLayout = ({ cardCode }: CardDetailsProps) => {
  const { state } = useContext(AppContext);
  const [cardProps, setCardProps] = useState<LorCard>(null);
  const [outerStyle, setOuterStyle] = useState<CSSProperties>(getStyle());
  const [sizeChanged, setSizeChanged] = useState(false);

  const cardRef = useRef(null);

  useEffect(() => {
    if (sizeChanged) {
      setOuterStyle(getStyle());
      setSizeChanged(false);
    }
  }, [sizeChanged])

  useEffect(() => {
    const sizeChanged = () => setSizeChanged(true);
    window.addEventListener('resize', sizeChanged);
    return (() => {
      window.removeEventListener('resize', sizeChanged);
    })
  }, [])

  useEffect(() => {
    if (!state.cardReport) return;
    const data = state.cardReport.cardsByCode[cardCode];
    if (data) {
      setCardProps(data)
    }
  }, [cardCode])

  if (!cardProps) return (<div>loading...</div>);

  return (
    <div style={{...outerStyle }} className="card-details-container">
      <Card
        ref={cardRef}
        size="small"
        title={
          <Space>{cardProps.name.toUpperCase()}</Space>
        }
        styles={{
          body: {
            padding: 0,
          }
        }} // remove padding to fit the image better
        style={{
          height: 'auto',
        }}
        extra={<Link href='/'>close</Link>}
      >
        <CardDetailsBody cardProps={cardProps} />

      </Card>
    </div>
  )
}