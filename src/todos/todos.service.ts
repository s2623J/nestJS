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
}
