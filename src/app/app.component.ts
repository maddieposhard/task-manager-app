// app.component.ts
import { Component, signal } from '@angular/core';
// import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [DashboardComponent],
  standalone: false
})
export class AppComponent {
  title = signal('Task Manager App');
}
