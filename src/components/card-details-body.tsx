import { Flex, Image } from 'antd'
import { LorCard } from '../types/lor-types';
import { useContext, useRef } from 'react';
import { cardDetailsSize, naturalCardSize } from '../library/config';
import { AppContext } from '../page/state-provider';
import { cleanDescription } from '../library/data-utils';

interface CardDetailsBodyProps { 
  cardProps: LorCard;
}

// TODO: move to config
const cardImageScale = 0.4
const associatedCardScale = 0.25;

export const CardDetailsBody = ({ cardProps }: CardDetailsBodyProps) => {
  const { state } = useContext(AppContext);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      key={cardProps.cardCode}
      ref={ref}
      className="card-details-body"
      style={{
        margin: 0,
        padding: '20px',
        height: `${cardDetailsSize.height}px`, // 50px for the header
        background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), center 0 url(${cardProps.assets[0].fullAbsolutePath}) no-repeat, #000`, // fallback
        backgroundSize: `contain`
      }}>
      <Flex vertical={true} >
        <Flex vertical={false} style={{ height: `${naturalCardSize.height * cardImageScale}px` }}>

          <Image
            src={cardProps.assets[0].gameAbsolutePath}
            style={{ width: `${naturalCardSize.width * cardImageScale}px` }}
            alt={cardProps.name}
          />

          <Flex style={{ color: '#fff', height: '100%', marginLeft: '20px' }} vertical={true} justify="space-between">
            <div>
              <div style={{ fontSize: '40px', marginRight: '20px', textTransform: 'uppercase' }}>
                {cardProps.name}
              </div>
              <div style={{ marginBottom: '20px', fontSize: '32px', display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <span>A</span>
                <span>{cardProps.cost}</span>
                <span>Cost</span>
                <span>{cardProps.rarityRef}</span>
                {cardProps.type === 'Spell' && <span>{cardProps.spellSpeedRef}</span>}
                <span>{cardProps.type}</span>
                <span>from</span>
                <span>{cardProps.regions?.join(', ')}</span>
              </div>
              <p style={{ fontSize: '32px' }}>{cleanDescription(cardProps.description)}</p>
            </div>
            <p style={{ color: '#fff', fontSize: '24px' }}>{cardProps.flavorText}</p>
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
    </div>
  )
}
