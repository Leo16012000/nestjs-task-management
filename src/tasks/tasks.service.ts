import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = []; //if dont make it private, any component from outside can change this array

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
