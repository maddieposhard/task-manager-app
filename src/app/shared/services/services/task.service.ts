import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = signal<Task[]>([
    { title: 'Task 1', completed: false, priority: 'low' },
    { title: 'Task 2', completed: false, priority: 'medium' },
    { title: 'Task 3', completed: false, priority: 'high' },
  ]);

  addTask(taskName: string, taskPriority: string) {
    this.tasks.update(tasks => [...tasks, { title: taskName, completed: false, priority: taskPriority }]);
    // Clear the input field after adding the task
  }

  editTask(selectedTaskTitle: string, editedTitle: string) {
    console.log('submitted')
    const taskToEdit = this.tasks().find(task => task.title === selectedTaskTitle);
    // once we find matching task, replace original title with new
    taskToEdit!.title = editedTitle;
  }

//   getUserTasks(userId: string) {
//     return this.tasks.filter((task)=> task.userId === this.userId);
//   }
// 
}
