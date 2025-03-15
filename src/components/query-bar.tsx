import { Input } from 'antd';
import { useState } from 'react';

export const QueryBar = () => {
  const [queryText, setQueryText] = useState<string>('');

  return (
    <div>
      <Input 
        type="text" 
        value={queryText}
        placeholder="Search..." 
        onChange={ev => {
          setQueryText(ev.target.value) 
        }} />
    </div>
  )
}