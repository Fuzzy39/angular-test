import { Component, Pipe, PipeTransform, Signal, viewChild, ViewContainerRef } from '@angular/core';
import { PurchasableComponent, PurchasableData } from '../purchasable/purchasable.component';
import { ResourceContainerComponent } from '../resource-container/resource-container.component';


export enum resource
{
  Invalid,
  Seetbucks,
  Milk,
}

export interface ResourceData
{
  res:resource;
  name:string;
  description:string;
  purchasables:PurchasableData[];
}




@Component({
  selector: 'app-resource',
  imports: [PurchasableComponent],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.css'
})
export class ResourceComponent 
{

  private ViewContainer: Signal<ViewContainerRef | undefined> = viewChild('content', {read: ViewContainerRef});

  private resources:ResourceContainerComponent|null = null;
  private _amount: number = 0;
  
  private _resource:resource = resource.Invalid;
  private _name : string = "Invalid";
  private _description:string ="";

 



  public initialize(resources: ResourceContainerComponent, data:ResourceData)
  {
    this.resources = resources;

    this._resource = data.res;
    this._amount = 0;
    this._name = data.name;
    this._description = data.description;


    // create purchasables
    let viewContainer = this.ViewContainer();
    if(viewContainer === undefined)
    {
      throw Error("Couldn't create resources!");
    }
  

  
    for(let i = 0; i<data.purchasables.length; i++)
    {
      // create and initialize resource
      let item = viewContainer.createComponent(PurchasableComponent).instance;
      item.initialize(resources, data.purchasables[i]);
    }

  }


  get amount():number
  {
    return this._amount;
  }

  set amount(value:number)
  {
    this._amount = value;
  }
  

  get resourceType(): resource 
  {
    return this._resource;
  } 

  get name():string
  {
    return this._name;
  }

  get description():string
  {
    return this._description;
  }




  
}
