import React from 'react';
import './App.css';
import { Filters } from './components/Filters';
import { TodoList } from './components/TodoList';
import instance from '../axios';

function App() {
  React.useEffect(() => {
    const data = instance.get('/api/todo');
    console.log(data);
  }, []);

  return (
    <div className='w-[50%] my-5 mx-auto p-5 flex flex-col rounded-md shadow-md shadow-gray-500 bg-white box'>
      <h3 className='font-bold text-center'>TODO APP with REDUX</h3>
      <Filters />
      <hr className='w-[70%] my-0 mx-auto' />
      <TodoList />
    </div>
  );
}

export default App;
