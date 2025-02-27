import { Component, ViewContainerRef } from '@angular/core';
import { ResourceComponent } from '../resource/resource.component';

@Component({
  selector: 'app-resource-container',
  imports: [ResourceComponent],
  templateUrl: './resource-container.component.html',
  styleUrl: './resource-container.component.css'
})
export class ResourceContainerComponent 
{
  

  constructor(private viewContainer: ViewContainerRef) 
  {

  } 


  loadContent() 
  {  

    this.viewContainer.createComponent(); 
  } 
}
