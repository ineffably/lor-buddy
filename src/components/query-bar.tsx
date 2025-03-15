import { Input } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state-provider';

const searchCardFields = {
  name: 'name',
  description: 'description',
  flavorText: 'flavorText',
}

const isInField = (card: any, field: string, queryText: string) => {
  if (!card[field]) return false;
  return card[field].toLowerCase().includes(queryText.toLowerCase());
}

export const QueryBar = () => {
  const { state, dispatch } = useContext(AppContext);
  const [queryText, setQueryText] = useState<string>('');

  useEffect(() => {
    if(!state?.cardData?.filteredCardData) return;
    const { allCardData } = state.cardData;
    const filteredCardData = allCardData.filter((card) => {
      const result = [];
      Object.keys(searchCardFields).forEach(field => result.push(isInField(card, field, queryText) ? field : ''));
      if(result.filter(Boolean).length > 0) return true;
    });

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