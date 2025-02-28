import { Component, Signal, viewChild, viewChildren, ViewContainerRef } from '@angular/core';
import { ResourceComponent, ResourceData, resource } from '../resource/resource.component';


let resourceDataArray:ResourceData[] = [
  {res:resource.Seetbucks, description:"Hard-earned cash for appeasing the unknowable."},
  {res:resource.Milk, description:"Required, avaliable. Seet favors this."}
]




@Component({
  selector: 'app-resource-container',
  imports: [ResourceComponent],
  template: '<div #content></div>',
  styleUrl: './resource-container.component.css'
})
export class ResourceContainerComponent 
{

  private ViewContainer: Signal<ViewContainerRef | undefined> = viewChild('content', {read: ViewContainerRef});

  // probably will use this later
  private resources: Signal<readonly ResourceComponent[]> = viewChildren(ResourceComponent);

  ngAfterContentInit()
  {
    // make sure we can access our children
    let viewContainer = this.ViewContainer();
    if(viewContainer === undefined)
    {
      throw Error("Couldn't create resources!");
    }
    viewContainer.clear();

  
    for(let i = 1; i<Object.values(resource).length; i++)
    {
      // create and initialize resource
      let res = viewContainer.createComponent(ResourceComponent).instance;
      res.resourceType = Object.values(resource)[i];
    }
  }

}
