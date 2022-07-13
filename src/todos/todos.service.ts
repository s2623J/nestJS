import { BadRequestException, Injectable, Param } from '@nestjs/common';
import { Todo } from 'src/models/todo.model';

@Injectable()
export class TodosService {
  private todos: Todo[] = [
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

  createTodo(todo: Todo): Todo[] {
    if (todo.title === '') {
      // Validation
      throw new BadRequestException();
    }
    const result = {
      id: new Date().getTime().toString(),
      title: todo.title,
      completed: todo.completed,
    };
    this.todos = [...this.todos, result];
    return this.todos;
  }

  // Getting Todos
  getTodos(): Todo[] {
    return this.todos;
  }

  //   Getting Todo
  //   Route handler parameter decorator. Extracts the
  //   params property from the req object and populates
  //   the decorated parameter with the value of params.
  //   the decorated parameter with the value of params.
  //   May also apply pipes to the bound parameter.
  getTodo(todoId: string): Todo {
    return this.todos.find((todo: Todo) => todo.id === todoId);
  }

  updateTodo(todoId: string, todo: Todo): Todo[] {
    if (todo.title === '') {
      throw new BadRequestException();
    } else {
      const todoIndex = this.todos.findIndex(
        (todo: Todo) => todo.id === todoId,
      );
      this.todos[todoIndex] = { ...this.todos[todoIndex], ...todo };
      return this.todos;
    }
  }

  deleteTodo(todoId: string): Todo[] {
    const todoIndex = this.todos.findIndex((todo: Todo) => todo.id === todoId);
    if (todoIndex !== -1) this.todos.splice(todoIndex, 1);
    return this.todos;
  }
}
