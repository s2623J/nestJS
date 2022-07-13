import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todoservice: TodosService) {}

  // Create Todo
  @Post()
  createtTodo(@Body() body: any): any[] {
    return this.todoservice.createTodo(body);
  }

  // Getting all Todos
  @Get()
  getTodos(): any[] {
    return this.todoservice.getTodos();
  }

  // Getting a specific Todo
  @Get(':todoId')
  getTodo(@Param('todoId') todoId: string): any {
    return this.todoservice.getTodo(todoId);
  }

  // Delete a specific Todo
  @Delete(':todoId')
  deleteTodo(@Param('todoId') todoId: string): any[] {
    return this.todoservice.deleteTodo(todoId);
  }
}
