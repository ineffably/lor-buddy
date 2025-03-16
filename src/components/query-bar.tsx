import { Input } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state-provider';
import { queryCards, QueryMonster } from '../utils/query-cards';

export const QueryBar = () => {
  const { state, dispatch } = useContext(AppContext);
  const [queryText, setQueryText] = useState<string>('');
  const { allCardData } = state?.cardData || {};

  useEffect(() => {
    if (!allCardData) return;
    const filteredCardData = queryCards(allCardData, { queryText } as QueryMonster)

    dispatch({
      type: 'SetFilteredCardData',
      payload: { filteredCardData },
    });
  }, [queryText]);

  return (
    <div>
      <Input
        type="text"
        value={queryText}
        autoFocus={true}
        allowClear={true}
        placeholder="Search..."
        onChange={ev => {
          setQueryText(ev.target.value)
        }} />
    </div>
  )
}