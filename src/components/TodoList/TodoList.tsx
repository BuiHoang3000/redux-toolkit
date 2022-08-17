import { useSelector } from 'react-redux';
import { Button } from '../../templates/Button';
import { Input } from '../../templates/Input';
import { TodoSliceType, TodoType } from '../../types';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const todoList = useSelector((state: TodoSliceType) => state.todoList);

  return (
    <div>
      <div style={{ height: 'calc(100vh - 50vh)' }}>
        {todoList.todos?.map((todo: TodoType) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </div>
      <div className='flex p-5'>
        <Input placeholder='Add todo...' />
        <Button label='Add' />
      </div>
    </div>
  );
};

export default TodoList;
