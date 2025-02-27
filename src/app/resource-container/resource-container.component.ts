import { Component, Signal, viewChild, viewChildren, ViewContainerRef } from '@angular/core';
import { ResourceComponent } from '../resource/resource.component';

export enum resource
{
  Invalid = "INVALID",
  Seetbucks = "Seetbucks",
  Milk = "Milk"
}


@Component({
  selector: 'app-resource-container',
  imports: [ResourceComponent],
  templateUrl: './resource-container.component.html',
  styleUrl: './resource-container.component.css'
})
export class ResourceContainerComponent 
{
  private resources: Signal<readonly ResourceComponent[]> = viewChildren(ResourceComponent);


  /*ngAfterContentInit() 
  {
    // testComp is a signal, so we need to grab it's value by calling it (it's a function, I guess)
    
    this.resources().forEach(element => {
      //name = 
    });
  } */
}
