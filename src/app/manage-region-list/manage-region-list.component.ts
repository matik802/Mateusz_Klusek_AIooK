import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegionComponent } from '../region/region.component';

@Component({
  selector: 'app-manage-region-list',
  templateUrl: './manage-region-list.component.html',
  styleUrls: ['./manage-region-list.component.css']
})
export class ManageRegionListComponent implements OnInit{
  @Input() RegionList: RegionComponent[];
  @Input() selected: number;
  @Output() selectInterestInParent: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.RegionList = [
      new RegionComponent("Kreta",new Date('2000-03-18'),new Date('2000-03-26'),3,["Statue","Pearl"],true),
      new RegionComponent("Rodos",new Date('2004-03-11'),new Date('2004-03-14'),20,["Sword","Crossbow"],false)
    ]
    this.selected = -1;
  }

  ngOnInit(): void {
      
  }

  selectRegion(index: number) {
    this.selectInterestInParent.emit(index);
     }
}
