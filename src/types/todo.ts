export type TodoType = {
  id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
  complete: string;
};

export type TodoSliceType = {
  todoList: {
    status: string;
    todos: TodoType[];
  };
};
