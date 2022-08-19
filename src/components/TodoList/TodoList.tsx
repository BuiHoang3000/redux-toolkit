import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
//
import { Spinner } from '../../templates/Spinner';
import { Button } from '../../templates/Button';
import { Input } from '../../templates/Input';
import { TodoSliceType, TodoType } from '../../types';
import Todo from '../Todo/Todo';
import { addNewTodo, fetchTodos } from './todoListSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: TodoSliceType) => state.todoList);
  const [todoName, setTodoName] = React.useState('');

  // React.useEffect(() => {
  //   dispatch(fetchTodos() as any);
  // }, []);

  const handleAddTodo = async () => {
    setTodoName('');
    await dispatch(
      addNewTodo({
        id: uuidv4(),
        name: todoName,
        priority: 'medium',
        complete: 'false',
      }) as any,
    );
    await dispatch(fetchTodos() as any);
  };

  if (todoList.status === 'loading') {
    return <Spinner />;
  }

  return (
    <div>
      <div style={{ height: 'calc(100vh - 50vh)' }}>
        {todoList.todos?.map((todo: TodoType) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            complete={todo.complete}
          />
        ))}
      </div>
      <div className='flex p-5'>
        <Input
          placeholder='Add todo...'
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <Button label='Add' onClick={() => handleAddTodo()} />
      </div>
    </div>
  );
};

export default TodoList;
