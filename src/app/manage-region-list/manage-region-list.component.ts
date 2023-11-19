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
  @Output() selectRegionInParent: EventEmitter<number> = new EventEmitter();

  constructor() {
    
  }

  ngOnInit(): void {
      
  }

  selectRegion(index: number) {
    this.selectRegionInParent.emit(index);
     }
}
