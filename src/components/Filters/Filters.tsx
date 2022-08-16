import { Input } from '../../templates/Input';
import { Radio } from '../../templates/Radio';

const Filters = () => {
  return (
    <div className='p-5 text-left'>
      <Input placeholder='Search todo...' />

      {/* Radio */}
      <div className='mt-3'>
        <h5>Filter By Status</h5>
        <Radio id='html' name='radio' label='HTML' />
        <Radio id='react' name='radio' label='React' />
      </div>
    </div>
  );
};

export default Filters;
