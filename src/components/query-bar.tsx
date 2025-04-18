import { Select, Space, Typography, Switch, Input } from 'antd';
import { useContext, useState, useEffect } from 'react';
import { queryCards, QueryMonster } from '../library/query-cards';
import { AppContext } from '../page/state-provider';
import { CardType } from '../types/lor-types';

// and I don't want to assign numeric weight to a simple thing.
const manualRarityList = ['Common', 'Rare', 'Epic', 'Champion'];

export const QueryBar = () => {
  const { state, dispatch } = useContext(AppContext);
  const [queryText, setQueryText] = useState<string>('');
  const [ofRegions, setRegions] = useState<string[]>([]);
  const [ofRarity, setRarity] = useState<string[]>([]);
  const [ofType, setType] = useState<string[]>([]);
  const [ofKeywords, setKeywords] = useState<string[]>([]);
  const [onlyCollectible, setOnlyCollectibles] = useState<boolean>(true);
  const { allCardData } = state?.cardData || {};

  useEffect(() => {
    if (!allCardData) return;
    const filteredCardData = queryCards(
      allCardData, {
        queryText,
        regions: ofRegions,
        rarity: ofRarity,
        types: ofType,
        keywords: ofKeywords,
        onlyCollectible
      } as QueryMonster);

    dispatch({
      type: 'SetFilteredCardData',
      payload: { filteredCardData },
    });
  }, [queryText, ofRegions, onlyCollectible, allCardData, ofRarity, ofType, ofKeywords]);


  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'row' }}>
        {state.cardReport &&
          <>
            <Select
              options={
                state.cardReport.allOf.regions.sort().map(
                  region => ({
                    label: (
                      <Space>
                        <img
                          src={`./assets/icons/${region.toLowerCase()}.png`}
                          alt={region}
                          style={{ height: '20px' }}
                        />
                        <Typography.Text>{region}</Typography.Text>
                      </Space>
                    ),
                    value: region
                  })
                )
              }
              onChange={value => setRegions(value as string[])}
              value={ofRegions}
              mode="multiple"
              allowClear
              style={{ width: '300px' }}
              placeholder="Select a region"
            />

            <Select
              options={
                manualRarityList.map(
                  rarity => ({
                    label: (
                      <Space>
                        <img
                          src={`./assets/icons/${rarity.toLowerCase()}.png`}
                          alt={rarity}
                          style={{ height: '20px' }}
                        />
                        <Typography.Text>{rarity}</Typography.Text>
                      </Space>
                    ),
                    value: rarity
                  })
                )
              }
              onChange={value => setRarity(value as string[])}
              value={ofRarity}
              mode="multiple"
              allowClear
              style={{ width: '300px' }}
              placeholder="Select a rarity"
            />

            <Select
              options={state.cardReport.allOf.type.filter(
                (typeName: CardType) => ((typeName !== 'Ability' && typeName !== 'Trap') || !onlyCollectible)
              ).map(
                (cardTypeName) => ({
                  label: (
                    <Space>
                      <img
                        src={`./assets/icons/${cardTypeName.toLowerCase()}.png`}
                        alt={cardTypeName}
                        style={{ height: '20px' }}
                      />
                      <Typography.Text>{cardTypeName}</Typography.Text>
                    </Space>
                  ),
                  value: cardTypeName
                })
              )}
              onChange={value => setType(value as string[])}
              value={ofType}
              mode="multiple"
              allowClear
              style={{ width: '300px' }}
              placeholder="Select a type"
            />

            <Select
              options={state.cardReport.allOf.keywords.map(
                (keyword) => ({
                  label: (
                    <Space>
                      <img 
                        src={`./assets/icons/${keyword.toLowerCase()}.png`} 
                        alt={keyword}
                        style={{ height: '20px' }}
                      />
                      <Typography.Text>{keyword}</Typography.Text>
                    </Space>
                  ),
                  value: keyword
                })
              )}
              onChange={value => setKeywords(value as string[])}
              value={ofKeywords}
              mode="multiple"
              allowClear
              style={{ width: '300px' }}
              placeholder="Select a keyword"
            />

            <Space>
              <Typography.Text>
                Only Collectibles
              </Typography.Text>
              <Switch
                title='Collectbiles'
                value={onlyCollectible}
                onChange={ev => setOnlyCollectibles(ev)}
              />
            </Space>
          </>
        }
      </div>
      <div>
        <Input
          type="text"
          value={queryText}
          autoFocus={true}
          allowClear={true}
          placeholder="Search..."
          onChange={ev => {
            setQueryText(ev.target.value)
          }}
        />
      </div>
    </div>
  )
}