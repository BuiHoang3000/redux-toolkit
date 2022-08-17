import { Input } from '../../templates/Input';
import { Radio } from '../../templates/Radio';

const Filters = () => {
  return (
    <div className='p-5'>
      <Input placeholder='Search todo...' />

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
