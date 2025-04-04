import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../shared/services/services/task.service';

@Component({
  selector: 'app-task-form',
  // imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
  standalone: false
})
export class TaskFormComponent {
  taskService = inject(TaskService);
  tasks = this.taskService.tasks;
  // Define a signal to hold the task title
  newTaskTitle = signal<string>('');
  // addTask method
  taskPriority = signal<string>('');

  addTaskHandler (taskName: string, taskPriority: string) {
    if (this.newTaskTitle()) {
     this.taskService.addTask(taskName, taskPriority);
     this.newTaskTitle.set('');
     this.taskPriority.set('');
    }
  }

}
