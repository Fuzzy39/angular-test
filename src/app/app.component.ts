import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResourceComponent } from './resource/resource.component';
import { ResourceContainerComponent } from './resource-container/resource-container.component';

@Component({
  selector: 'app-root',
  imports: [ResourceComponent, ResourceContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-test';
}
