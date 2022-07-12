import { Injectable } from '@nestjs/common';

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
      title: 'Waash a car',
      completed: true,
    },
  ];

  // Getting Todos
  getTodos(): any[] {
    return [...this.todos];
  }
}
