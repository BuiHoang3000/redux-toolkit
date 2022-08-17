export type TodoType = {
  id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
};

export type TodoSliceType = {
  todoList: {
    status: string;
    todos: TodoType[];
  };
};
