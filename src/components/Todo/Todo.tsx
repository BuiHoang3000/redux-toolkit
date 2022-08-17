import { Checkbox } from '../../templates/Checkbox';
import { Chip } from '../../templates/Chip';

type TodoProps = {
  id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
};

const priorityColorMapping = {
  high: 'red',
  medium: 'blue',
  low: 'gray',
};

const Todo = (props: TodoProps) => {
  const { name, priority, completed } = props;

  return (
    <div
      className='max-w-[100%] p-2 flex justify-between break-all'
      style={{
        ...(completed ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox id='checkbox' checked={completed}>
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
