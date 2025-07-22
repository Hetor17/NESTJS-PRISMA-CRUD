import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from 'generated/prisma';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get()
  async getTask(@Body() id: number) {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(data: Task){
    return this.taskService.createTask(data);
  }

  @Put()
  updateTask(id: number, data: Task) {
    return this.taskService.updateTask(id, data);
  }

  @Delete()
  deleteTask(id:number){
    return this.taskService.deleteTask(id);
  }
}
