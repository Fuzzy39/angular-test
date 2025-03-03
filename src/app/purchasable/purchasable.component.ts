import { Component} from '@angular/core';
import { resource } from '../resource/resource.component';
import { ResourceContainerComponent } from '../resource-container/resource-container.component';


export interface resourceCost
{
  res:resource;
  amount:number;
}


export interface cost
{
  costs:resourceCost[];
}


export interface PurchasableData
{
  name:string;
  baseCost:cost;
  exponent:number;
  displayPurchased:boolean;
  effectDesc:string;
  onPurchase: (resources:ResourceContainerComponent, amount:number)=>void;

}

@Component({
  selector: 'app-purchasable',
  imports: [],
  templateUrl: './purchasable.component.html',
  styleUrl: './purchasable.component.css'
})
export class PurchasableComponent 
{
  
  private _name:string ="invalid";
  private _baseCost:cost = {costs:[]};
  private _exponent:number = 0;
  private _displayPurchased:boolean = false;
  private _effectDesc:string ="not initialized";
  private _onPurchase: (resources:ResourceContainerComponent, amount:number)=>void 
    = (resources:ResourceContainerComponent, amount:number)=>{};


  private _amountPurchased:number = 0;
  
  private resources : ResourceContainerComponent | null = null;


  public initialize(resources:ResourceContainerComponent, data:PurchasableData)
  {
    this._name = data.name;
    this._baseCost = data.baseCost;
    this._exponent = data.exponent;
    this._displayPurchased = data.displayPurchased;
    this._effectDesc = data.effectDesc;
    this._onPurchase = data.onPurchase;
    this.resources = resources;
  }

  onClick():void
  {
    if(this.canBuy())
    {
      this.purchase();
    }
  }

  private canBuy():boolean
  {
    let toReturn:boolean = true;
    this.cost.costs.forEach(element => {
       if(element.amount>this.resources!.getResourceComponent(element.res).amount)
       {
        toReturn = false;
       }
    });

    return toReturn;
  }

  private purchase():void
  {
    // spend the money
    this.cost.costs.forEach(element => 
    {
      this.resources!.getResourceComponent(element.res).amount-= element.amount 
    });

    this._amountPurchased++;

    this._onPurchase(this.resources!, this.amountPurchased);
  }

  get cost():cost
  {
    // multiplier
    let mul:number = Math.pow(this.amountPurchased+1, this._exponent); 

    let toReturn:cost = structuredClone(this._baseCost);
    for(let i:number = 0; i<toReturn.costs.length; i++)
    {
      toReturn.costs[i].amount = Math.floor(toReturn.costs[i].amount*mul);
      
    }
    return toReturn;
  }

  get costString():string
  {

    let toReturn:string = "";
    this.cost.costs.forEach(element => {
      toReturn += this.resources?.getResourceComponent(element.res).name+": "
      toReturn += element.amount+" "      
    });
    return toReturn.trim();
  }


  get name() {return this._name;}
  get effectDesc(){return this._effectDesc;}
  get amountPurchased(){return this._amountPurchased;}
  get displayPurchased(){return this._displayPurchased;}

  
  
}


