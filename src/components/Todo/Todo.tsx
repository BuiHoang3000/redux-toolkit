import { Checkbox } from '~/templates/Checkbox';
import { Chip } from '~/templates/Chip';
import { TodoType } from '~/types';

const priorityColorMapping = {
  high: 'red',
  medium: 'blue',
  low: 'gray',
};

const Todo = (props: TodoType) => {
  const { name, priority, complete } = props;

  return (
    <div
      className='max-w-[100%] p-2 flex justify-between break-all'
      style={{
        ...(complete === 'true'
          ? { opacity: 0.5, textDecoration: 'line-through' }
          : {}),
      }}
    >
      <Checkbox id='checkbox' checked={complete === 'true'}>
        {name}
      </Checkbox>
      <div className='p-3'>
        <Chip
          label={priority}
          color={priorityColorMapping[priority] as 'red' | 'blue' | 'gray'}
        />
      </div>
    </div>
  );
};

export default Todo;
