import React from 'react';
//
import useAxios from '~/hooks/useAxios';
import { Button } from '~/templates/Button';
import { Input } from '~/templates/Input';

const AddTodo = () => {
  // Init
  const { status, fetchApi } = useAxios('/todo', 'post');
  //
  const [todoName, setTodoName] = React.useState('');

  // Handle add todo
  const handleAddTodo = () => {
    const id = new Date().getTime();
    fetchApi({
      id,
      name: todoName,
      priority: 'medium',
      complete: 'false',
    });

    // setTodoName('')
  };

  return (
    <div className='flex p-5'>
      <Input
        placeholder='Add todo...'
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <Button label='Add' onClick={() => handleAddTodo()} />
    </div>
  );
};

export default AddTodo;
