import { Component, Pipe, PipeTransform } from '@angular/core';


export enum resource
{
  Invalid = "INVALID",
  Seetbucks = "Seetbucks",
  Milk = "Milk",
}

export interface ResourceData
{
  res:resource;
  description:string;
}


@Component({
  selector: 'app-resource',
  imports: [],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.css'
})
export class ResourceComponent 
{
  public _amount: number = 0;
  
  public _resource:resource = resource.Invalid;
  public description:string ="";


  get resourceType(): string 
  {
    return this._resource;
  }
  
 
  
  set resourceType(value: resource)
  {
    if(this._resource !== resource.Invalid)
    {
      throw Error("Resource already set");
    }
    console.log(value);

    this._resource = value;
  }


  get amount():number
  {
    return this._amount;
  }

  addAmount(toAdd:number):number
  {
    this._amount+=toAdd;
    return this.amount;
  }
  
}
