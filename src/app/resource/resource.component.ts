import { Component, Pipe, PipeTransform } from '@angular/core';
import { resource } from '../resource-container/resource-container.component';

@Component({
  selector: 'app-resource',
  imports: [],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.css'
})
export class ResourceComponent 
{
  public amount: number = 0;
  
  public _resource:resource = resource.Invalid;

  constructor(){console.log("HELLO?????");}

  /*get resourceType(): string 
  {
    return this._resource;
  }*/
  
 
  /*
  set resourceType(value: resource)
  {
    if(this._resource === resource.Invalid)
    {
      throw Error("Resource already set");
    }

    this._resource = value;
  }*/
}
