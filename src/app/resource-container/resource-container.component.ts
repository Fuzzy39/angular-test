import { Component, ComponentRef, contentChildren, Signal, viewChild, ViewContainerRef } from '@angular/core';
import { ResourceComponent, ResourceData, resource } from '../resource/resource.component';


let resourceDataArray:ResourceData[] = [
  {res:resource.Seetbucks, name:"Seetbucks", 
    description:"Hard-earned cash for appeasing the unknowable.", 
    purchasables:[
    {
      name:"Work", 
      baseCost:{costs:[]},
      exponent:0,
      displayPurchased:false, 
      effectDesc:"Work for money!", 
      onPurchase(resources, amount) {
        resources.getResourceComponent(resource.Seetbucks).amount+=1;
      },
    } ]
  },
  {res:resource.Milk, name:"Milk", description:"Required, avaliable. Seet favors this.", 
    purchasables:[
    {
      name:"Buy Milk", 
      baseCost:{costs:[{res:resource.Seetbucks, amount:5}]},
      exponent:.2,
      displayPurchased:false, 
      effectDesc:"You will be coming back, right?", 
      onPurchase(resources, amount) {
        resources.getResourceComponent(resource.Milk).amount+=1;
      },
    } ]
  }
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

  private resources: ResourceComponent[] = [];

  ngAfterContentInit()
  {
    // make sure we can access our children
    let viewContainer = this.ViewContainer();
    if(viewContainer === undefined)
    {
      throw Error("Couldn't create resources!");
    }
    viewContainer.clear();

  
    for(let i = 0; i<resourceDataArray.length; i++)
    {
      // create and initialize resource
      let res = viewContainer.createComponent(ResourceComponent).instance;
      res.initialize(this, resourceDataArray[i]);
      this.resources.push(res);
    }
  }


  getResourceComponent(res:resource):ResourceComponent
  {
    let toReturn:ResourceComponent | null = null;
    
    this.resources.forEach(element=>
    {
      if(element.resourceType == res) toReturn = element;
    });
  
    if(toReturn === null) throw("Unable to find resource!");
    return toReturn;
  }
 

}


