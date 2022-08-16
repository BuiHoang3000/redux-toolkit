import './App.css';
import { Filters } from './components/Filters';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className='w-[50%] h-[90vh] my-0 mx-auto p-5 flex flex-col rounded-md shadow-md shadow-gray-500 bg-white box'>
      <h3 className='font-bold'>TODO APP with REDUX</h3>
      <Filters />
      <hr className='w-[70%] my-0 mx-auto' />
      <TodoList />
    </div>
  );
}

export default App;
