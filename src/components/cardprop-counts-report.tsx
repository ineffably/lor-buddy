import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../page/state-provider';
import { Card, Tooltip } from 'antd';
import { LorCardsDataReport } from '../types/app-types';
import { BadgeIconImage, BadgeIconNumber } from './badge-icon';

const numericValueGroups = ['attack', 'health', 'cost'];
const skippedGroups = ['collectible', 'formats', 'rarity'];

export const CardpropCountsReport = () => {
  const { state } = useContext(AppContext);
  const [filteredReport, setFilteredReport] = useState<LorCardsDataReport | null>(null);

  useEffect(() => {
    setFilteredReport(state.filteredReport);
  }, [state.cardData.filteredCardData.length])

  if (!filteredReport) return null;

  const { codesBy } = filteredReport;
  const data = Object.entries(codesBy).filter(([key]) => !skippedGroups.includes(key)).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: Object.entries(value).map(([name, cards]) => {
        return ({
          name: name,
          count: cards.length,
        })
      })
    }
  }, {} as Record<string, { name: string, count: number }[]>)

  return (
    <div style={{ backgroundColor: '#ccc', padding: '10px', borderRadius: '10px' }}>
      {Object.entries(data).filter(([, stats]) => stats.length > 0).map(([group, stats]) => {
        const validStats = stats.filter(stat => stat.name.toLowerCase() !== 'none');
        return (
          <Card
            size="small"
            key={group}
            className={`report-card-${group}`}
            style={{ marginBottom: '10px' }}
            >
            <div style={{ display: 'flex', flexDirection: 'row', columnGap: '15px', padding: '10px 0 0 0', flexWrap: 'wrap' }}>
              {!numericValueGroups.includes(group) && validStats.map(entry => (
                <Tooltip title={entry.name} key={entry.name}>
                  <BadgeIconImage 
                    src={`./assets/icons/${entry.name.toLowerCase()}.png`} 
                    count={entry.count} 
                    overflowCount={999} 
                  />
                </Tooltip>
              ))}
              {numericValueGroups.includes(group) && validStats.map(
                entry => 
                  <BadgeIconNumber 
                    key={entry.name} 
                    number={entry.name as any} 
                    count={entry.count} 
                    overflowCount={999} 
                  />
              )}
            </div>
          </Card>
        )
      })}
    </div>
  )
}
