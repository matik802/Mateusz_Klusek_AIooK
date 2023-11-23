import { Component, Inject, inject } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {
    
  name: string;
  dateArrival: Date;
  dateReturn: Date;
  tribeCount: number;
  amazingItems: string[];
  friendly: boolean;
  constructor(
    @Inject(String) name: string, 
    dateArrival: Date, 
    dateReturn: Date, 
    @Inject(Number) tribeCount: number,
    @Inject(String) amazingItems: string[],
    @Inject(Boolean)friendly: boolean) {
      this.name = name;
      this.dateArrival = dateArrival;
      this.dateReturn = dateReturn;
      this.tribeCount = tribeCount;
      this.amazingItems = amazingItems;
      this.friendly = friendly;
  }
}
