import { Controller, Get, Param } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todoservice: TodosService) {}

  // Getting all Todos
  @Get()
  getTodos(): any[] {
    return this.todoservice.getTodos();
  }

  // Getting a specific Todo
  @Get(':todoId')
  getTodo(@Param('todoId') todoId: string): any[] {
    return this.todoservice.getTodo(todoId);
  }
}
