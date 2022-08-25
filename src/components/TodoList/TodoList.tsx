import React from 'react';
import { useDispatch } from 'react-redux';
//
import useAxios from '~/hooks/useAxios';
import { Input } from '~/templates/Input';
import { TodoType } from '~/types';
//
import { Todo } from '../Todo';

const TodoList = () => {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = React.useState('');

  const { status, data, error } = useAxios('/todo');

  // const handleAddTodo = async () => {
  //   setTodoName('');
  //   await dispatch(
  //     addNewTodo({
  //       id: uuidv4(),
  //       name: todoName,
  //       priority: 'medium',
  //       complete: 'false',
  //     }) as any,
  //   );
  //   await dispatch(fetchTodos() as any);
  // };

  // if (todoList.status === 'loading') {
  //   return <Spinner />;
  // }

  return (
    <div>
      <div style={{ height: 'calc(100vh - 50vh)' }}>
        {data &&
          (data as any)?.todo?.map((todo: TodoType) => (
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
        {/* <Button label='Add' onClick={() => handleAddTodo()} /> */}
      </div>
    </div>
  );
};

export default TodoList;
