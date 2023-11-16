import { Component } from '@angular/core';
import { RegionComponent } from '../region/region.component';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent {
  
  RegionArray: RegionComponent[];
  selected: number;

  constructor() {
    this.RegionArray = [
      new RegionComponent("Kreta",new Date('2000-03-18'),new Date('2000-03-26'),3,["Statue","Pearl"],true),
      new RegionComponent("Rodos",new Date('2004-03-11'),new Date('2004-03-14'),20,["Sword","Crossbow"],false)
    ]
    this.selected = -1;
  }
  select(event: { stopPropagation: () => void; },which: number): void {
    this.selected = which;
    event.stopPropagation();
  }
  save(): void {
    this.selected = -1;
  }
  lock(event: { stopPropagation: () => void; }): void {
    event.stopPropagation();
  }
}

