import { Toast } from './components/Toast';
import './App.css';
import { Filters } from './components/Filters';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className='w-[50%] my-5 mx-auto p-5 flex flex-col rounded-md shadow-md shadow-gray-500 bg-white box'>
      <h3 className='font-bold text-center'>TODO APP with REDUX</h3>
      <Filters />
      <hr className='w-[70%] my-0 mx-auto' />
      <TodoList />
      <Toast />
    </div>
  );
}

export default App;
