import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Todo } from 'src/models/todo.model';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todoservice: TodosService) {}

  // Create Todo
  @Post()
  createtTodo(@Body() body: Todo): Todo[] {
    return this.todoservice.createTodo(body);
  }

  // Getting all Todos
  @Get()
  getTodos(): any[] {
    return this.todoservice.getTodos();
  }

  // Getting a specific Todo
  @Get(':todoId')
  getTodo(@Param('todoId') todoId: string): Todo {
    return this.todoservice.getTodo(todoId);
  }

  //   Update Todo
  @Patch(':todoId')
  updateTodo(@Param('todoId') todoId: string, @Body() todo: Todo): Todo[] {
    return this.todoservice.updateTodo(todoId, todo);
  }

  // Delete a specific Todo
  @Delete(':todoId')
  deleteTodo(@Param('todoId') todoId: string): Todo[] {
    return this.todoservice.deleteTodo(todoId);
  }
}
