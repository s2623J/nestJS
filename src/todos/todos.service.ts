import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class TodosService {
  private todos: any[] = [
    {
      id: '0',
      title: 'Create a course',
      completed: true,
    },
    {
      id: '1',
      title: 'Go to a store',
      completed: false,
    },
    {
      id: '2',
      title: 'Wash a car',
      completed: true,
    },
  ];

  createTodo(todo: any): any[] {
    const result = {
      id: new Date().getTime().toString(),
      title: todo.title,
      completed: todo.completed,
    };
    this.todos = [...this.todos, result];
    return this.todos;
  }

  // Getting Todos
  getTodos(): any[] {
    return [...this.todos];
  }

  //   Getting Todo
  //   Route handler parameter decorator. Extracts the
  //   params property from the req object and populates
  //   the decorated parameter with the value of params.
  //   May also apply pipes to the bound parameter.
  getTodo(todoId: string): any {
    return this.todos.find((todo: any) => todo.id === todoId);
  }

  deleteTodo(todoId: string): any[] {
    const todoIndex = this.todos.findIndex((todo: any) => todo.id === todoId);
    if (todoIndex !== -1) this.todos.splice(todoIndex, 1);
    return [...this.todos];
  }
}
