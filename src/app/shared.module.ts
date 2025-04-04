import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskComponent } from "./task/task.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations: [TaskComponent, TaskFormComponent, TaskListComponent, DashboardComponent, AppComponent],
    imports: [FormsModule, BrowserModule],
    bootstrap: [AppComponent],
    exports: [TaskComponent, TaskFormComponent, TaskListComponent, DashboardComponent]
  })
  export class SharedModule {
    
  }