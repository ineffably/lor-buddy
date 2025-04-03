import { Card, Space, Image, Flex, Typography } from 'antd'
import { type CSSProperties, useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../page/state-provider';
import { Link } from 'wouter';
import { LorCard } from '../types/lor-types';
import { cardDetailsSize, naturalCardSize } from '../library/config';

export interface CardDetailsProps {
  cardCode: string;
}

const cleanDescription = (description: string): string => {
  const result = description.replace(/\<[^>]+\>/g, '')
    .replace(/^\s+|\s+$/g, '');
  return result
}

const getStyle = () => ({
  position: 'absolute',
  boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
  top: `${window.innerHeight / 50}px`,
  left: `${window.innerWidth / 2 - cardDetailsSize.width / 2}px`,
  width: `${cardDetailsSize.width}px`,
  height: `${cardDetailsSize.height}px`,
  zIndex: 10
}) as CSSProperties

export const CardDetails = ({ cardCode }: CardDetailsProps) => {
  const { state } = useContext(AppContext);
  const [cardProps, setCardProps] = useState<LorCard>(null);
  const [outerStyle, setOuterStyle] = useState<CSSProperties>(getStyle());
  const [sizeChanged, setSizeChanged] = useState(false);
  const cardImageScale = 0.4
  const associatedCardScale = 0.3;

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
    <div style={{...outerStyle }}>
      <Card
        size="small"
        title={
          <Space>{cardProps.name.toUpperCase()}</Space>
        }
        styles={{
          body: {
            height: `${cardDetailsSize.height}px`, // 50px for the header
            background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), center 0 url(${cardProps.assets[0].fullAbsolutePath}) no-repeat, #000`, // fallback
            backgroundSize: `contain`,
          }
        }} // remove padding to fit the image better
        style={{
          height: 'auto',
        }}
        extra={<Link href='/'>close</Link>}
      >
        <Flex vertical={true}>
          <Flex vertical={false} style={{height:`${naturalCardSize.height * cardImageScale}px` }}>
            <Image
              src={cardProps.assets[0].gameAbsolutePath}
              style={{ width: `${naturalCardSize.width * cardImageScale}px` }}
              alt={cardProps.name}
            />

            <Flex style={{color: '#fff', height: '100%'}} vertical={true}>
              <h1 style={{fontSize: '40px'}}>{cardProps.name.toUpperCase()}</h1>
              <p style={{fontSize: '32px'}}>{cleanDescription(cardProps.description)}</p>
              {/* <table>
                <tbody>
                  <tr><td></td><td>{cardProps.description}</td></tr>
                </tbody>
              </table> */}
              <p style={{color: '#fff', fontSize: '24px'}}>{cardProps.flavorText}</p>
            </Flex>
          </Flex>

          

          <Flex vertical={false}>
            {cardProps.associatedCardRefs && cardProps.associatedCardRefs.map(cardRef => {
              return (
                <Image
                  style={{ width: `${naturalCardSize.width * associatedCardScale}px` }}
                  key={cardRef}
                  src={state.cardReport.cardsByCode[cardRef]?.assets?.[0]?.gameAbsolutePath || ''}
                />
              )
            })}
          </Flex>

        </Flex>

      </Card>
    </div>
  )
}