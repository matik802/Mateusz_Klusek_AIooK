import { Component, OnInit } from '@angular/core';
import { RegionComponent } from '../region/region.component';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  
  private RegionArray: RegionComponent[];
  private selected: number;

  constructor() {
    
  }
  ngOnInit(): void {
    this.RegionArray = [
      new RegionComponent("Kreta",new Date('2000-03-18'),new Date('2000-03-26'),3,["Statue","Pearl"],true),
      new RegionComponent("Rodos",new Date('2004-03-11'),new Date('2004-03-14'),20,["Sword","Crossbow"],false)
    ]
    this.selected = -1;
  }
  getRegionArray() : RegionComponent[] {
    return this.RegionArray;
  }
  setRegionArray(RegionArray: RegionComponent[]) {
    this.RegionArray = RegionArray;
  }
  getSelected(): number {
    return this.selected;
  }
  setSelected(which: number): void {
       this.selected = which;
     }
  save(): void {
    this.selected = -1;
  }
  lock(event: { stopPropagation: () => void; }): void {
    event.stopPropagation();
  }
}

