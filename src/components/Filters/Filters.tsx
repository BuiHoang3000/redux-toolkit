import React from 'react';
import { Input } from '~/templates/Input';
import { Radio } from '~/templates/Radio';

const Filters = () => {
  const [search, setSearch] = React.useState('');

  return (
    <div className='p-5'>
      <Input
        placeholder='Search todo...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Radio */}
      <div className='mt-3'>
        <h5>Filter By Status</h5>
        <Radio id='hight' name='status' label='Hight' color='red' />
        <Radio id='medium' name='status' label='Medium' color='blue' />
        <Radio id='low' name='status' label='Low' color='gray' />
      </div>
    </div>
  );
};

export default Filters;
