import { Component, Inject, inject } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {
    
  name: string;
  private dateArrival: Date;
  private dateReturn: Date;
  private tribeCount: number;
  private amazingItems: string[];
  private friendly: boolean;
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
  getName(): string {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
  getDateArrival(): Date {
    return this.dateArrival;
  }
  getDateReturn(): Date {
    return this.dateReturn;
  }
  getTribeCount(): number {
    return this.tribeCount;
  }
  getAmazingItems(): string[] {
    return this.amazingItems;
  }
  getFriendly(): boolean {
    return this.friendly;
  }
}
