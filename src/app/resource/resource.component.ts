import { Component, Pipe, PipeTransform } from '@angular/core';


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
}




@Component({
  selector: 'app-resource',
  imports: [],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.css'
})
export class ResourceComponent 
{
  private _amount: number = 0;
  
  private _resource:resource = resource.Invalid;
  private _name : string = "Invalid";
  private _description:string ="";

  public initialize(data:ResourceData)
  {
    this._resource = data.res;
    this._amount = 0;
    this._name = data.name;
    this._description = data.description;
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
