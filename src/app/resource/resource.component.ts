import { Component } from '@angular/core';

@Component({
  selector: 'app-resource',
  imports: [],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.css'
})
export class ResourceComponent {
  private _name: string = "default";
  public amount: number = 0;

  get name(): string {
    return this._name;
  }
}
