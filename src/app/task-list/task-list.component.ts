// task-list.component.ts
import { Component, inject, signal } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { TaskService } from '../shared/services/services/task.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  // imports: [TaskComponent, FormsModule],
  standalone: false
})
export class TaskListComponent {

  taskService = inject(TaskService)
  tasks = this.taskService.tasks;
  isEditing = false;
  editedTitle = signal('');
  selectedTaskTitle = '';
  
  filterStatus = signal('All');

  get filteredTasks() {
    if (this.filterStatus() === 'Completed') {
      return this.tasks().filter(task => task.completed);
    }
    if (this.filterStatus() === 'Pending') {
      return this.tasks().filter(task => !task.completed);
    }
    return this.tasks();
  }

  changeFilter(status: string) {
    status = this.filterStatus();
  }


  editTask (title: string) {
  // Logic to edit a task title
  this.isEditing = true;
  this.selectedTaskTitle = title;

  }


  submitEdit () {
    this.taskService.editTask(this.editedTitle(), this.selectedTaskTitle);
    
    this.editedTitle.set('');

    this.isEditing = false;
  }







  completeTask () {
  // Logic to mark a task as completed
  }
}
