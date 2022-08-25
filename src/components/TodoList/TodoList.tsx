import React from 'react';
//
import useAxios from '~/hooks/useAxios';
import { Spinner } from '~/templates/Spinner';
import { TodoType } from '~/types';
//
import { Todo } from '../Todo';
import AddTodo from './AddTodo';

const TodoList = () => {
  // Init
  const { status, data, fetchApi } = useAxios<TodoType>('/todo');

  // Handle get list todo
  React.useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  // Show loading when call api
  if (status === 'loading') {
    return <Spinner />;
  }

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
      <AddTodo />
    </div>
  );
};

export default TodoList;
