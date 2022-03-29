import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = []; //if dont make it private, any component from outside can change this array

  getAllTasks() {
    return this.tasks;
  }
}
